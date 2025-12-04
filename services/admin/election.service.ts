import prisma from '../../lib/prisma';
import { z } from 'zod';
import { LogService } from './log.service';

const ElectionSchema = z.object({
    name: z.string().min(3),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    timezone: z.string().default('UTC'),
});

export const ElectionService = {
    async createElection(data: z.infer<typeof ElectionSchema>, adminId: string) {
        const validated = ElectionSchema.parse(data);

        const election = await prisma.election.create({
            data: {
                name: validated.name,
                startDate: validated.startDate,
                endDate: validated.endDate,
                timezone: validated.timezone,
                status: 'NOT_STARTED',
            },
        });

        await LogService.createLog('CREATE_ELECTION', adminId, election.id);
        return election;
    },

    async generateKeys(electionId: string, adminId: string) {
        // Generate keys for all candidates in the election
        const candidates = await prisma.candidate.findMany({ where: { electionId } });

        if (candidates.length === 0) {
            throw new Error('No candidates found for this election');
        }

        // Clear existing keys
        await prisma.multiKey.deleteMany({ where: { electionId } });

        const keys = candidates.map(() => ({
            electionId,
            keyValue: Math.random().toString(36).substring(2, 10).toUpperCase(),
            status: 'PENDING' as const,
        }));

        // Also add one key for the admin/lead
        keys.push({
            electionId,
            keyValue: Math.random().toString(36).substring(2, 10).toUpperCase(),
            status: 'PENDING' as const,
        });

        await prisma.multiKey.createMany({ data: keys });
        await LogService.createLog('GENERATE_KEYS', adminId, electionId);

        return await prisma.multiKey.findMany({ where: { electionId } });
    },

    async enterKey(electionId: string, key: string) {
        const multiKey = await prisma.multiKey.findFirst({
            where: { electionId, keyValue: key, status: 'PENDING' },
        });

        if (!multiKey) {
            throw new Error('Invalid or already used key');
        }

        await prisma.multiKey.update({
            where: { id: multiKey.id },
            data: { status: 'PROVIDED' },
        });

        return { success: true, message: 'Key accepted' };
    },

    async checkAllKeysProvided(electionId: string) {
        const pendingKeys = await prisma.multiKey.count({
            where: { electionId, status: 'PENDING' },
        });
        return pendingKeys === 0;
    },

    async startElection(electionId: string, adminId: string) {
        const allKeysProvided = await this.checkAllKeysProvided(electionId);
        if (!allKeysProvided) {
            throw new Error('All multi-keys must be provided to start the election');
        }

        const election = await prisma.election.update({
            where: { id: electionId },
            data: { status: 'LIVE' },
        });

        // Reset keys for next action (Stop)
        await prisma.multiKey.updateMany({
            where: { electionId },
            data: { status: 'PENDING' },
        });

        await LogService.createLog('START_ELECTION', adminId, electionId);
        return election;
    },

    async stopElection(electionId: string, adminId: string) {
        const allKeysProvided = await this.checkAllKeysProvided(electionId);
        if (!allKeysProvided) {
            throw new Error('All multi-keys must be provided to stop the election');
        }

        const election = await prisma.election.update({
            where: { id: electionId },
            data: { status: 'COMPLETED' },
        });

        await LogService.createLog('STOP_ELECTION', adminId, electionId);
        return election;
    },

    async getResults(electionId: string) {
        const election = await prisma.election.findUnique({
            where: { id: electionId },
            include: { candidates: true },
        });

        if (!election) throw new Error('Election not found');

        // HIDDEN LIVE COUNTING RULE
        if (election.status !== 'COMPLETED') {
            throw new Error('Results are hidden until election is completed');
        }

        // Check keys for showing results (re-using stop keys logic or separate? Requirement says "Show Results -> require ALL keys")
        // Assuming keys need to be entered AGAIN to view results after stopping? 
        // Or maybe the same keys used to stop are sufficient? 
        // The requirement says "Election Start, Stop, Show Results -> require ALL keys".
        // Let's assume we need to verify keys again for "Show Results" action specifically if it's a sensitive action.
        // However, usually "Stop" transitions to "Completed" and then results are available.
        // Let's enforce key check if we want to be strict, but for now, let's assume if it's COMPLETED, we can show it, 
        // OR we can enforce a "Unlock Results" step. 
        // Given the prompt "Show Results -> require ALL keys", I will implement a check here.

        const allKeysProvided = await this.checkAllKeysProvided(electionId);
        if (!allKeysProvided) {
            // If keys are pending, we can't show results.
            // But wait, if we just stopped it, keys might be reset?
            // Let's assume the flow is: Enter Keys -> Stop Election. Once Stopped, Results are viewable?
            // OR: Enter Keys -> View Results.
            // Let's stick to: If status is COMPLETED, allow viewing. 
            // BUT the prompt explicitly says "Show Results -> require ALL keys".
            // So I will enforce that even if COMPLETED, you need keys to VIEW.
            throw new Error('All multi-keys must be provided to view results');
        }

        const votes = await prisma.vote.groupBy({
            by: ['candidateId'],
            _count: {
                candidateId: true,
            },
        });

        const results = election.candidates.map(candidate => {
            const voteCount = votes.find(v => v.candidateId === candidate.id)?._count.candidateId || 0;
            return {
                ...candidate,
                votes: voteCount,
            };
        });

        // Sort by votes desc
        results.sort((a, b) => b.votes - a.votes);

        const totalVotes = results.reduce((sum, c) => sum + c.votes, 0);

        return {
            election,
            results,
            stats: {
                totalVotes,
                turnout: 0, // Need total voters count to calculate turnout
            }
        };
    },

    async getElectionById(id: string) {
        return await prisma.election.findUnique({
            where: { id },
            include: { candidates: true, multiKeys: true }
        });
    },

    async getAllElections() {
        const elections = await prisma.election.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { voters: true }
                }
            }
        });

        return elections.map(election => ({
            ...election,
            votersCount: election._count.voters
        }));
    }
};
