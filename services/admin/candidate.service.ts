import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const CandidateSchema = z.object({
    name: z.string().min(2),
    party: z.string().optional(),
    electionId: z.string().uuid(),
});

export const CandidateService = {
    async createCandidate(data: z.infer<typeof CandidateSchema>) {
        const validated = CandidateSchema.parse(data);

        // Check if election exists
        const election = await prisma.election.findUnique({
            where: { id: validated.electionId },
        });

        if (!election) {
            throw new Error('Election not found');
        }

        return await prisma.candidate.create({
            data: {
                name: validated.name,
                party: validated.party,
                electionId: validated.electionId,
            },
        });
    },

    async updateCandidate(id: string, data: Partial<z.infer<typeof CandidateSchema>>) {
        return await prisma.candidate.update({
            where: { id },
            data,
        });
    },

    async deleteCandidate(id: string) {
        return await prisma.candidate.delete({
            where: { id },
        });
    },

    async getCandidatesByElection(electionId: string) {
        return await prisma.candidate.findMany({
            where: { electionId },
            orderBy: { name: 'asc' },
        });
    },
};
