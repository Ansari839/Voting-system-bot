import { NextRequest } from 'next/server';
import { ElectionService } from '@/services/admin/election.service';
import { sendSuccess, sendError } from '@/utils/api-response';
import { z } from 'zod';
import { verifyAdmin } from '@/middlewares/admin-auth';

export const ElectionController = {
    async create(req: NextRequest) {
        try {
            const admin = await verifyAdmin(req);
            if (!admin) return sendError(401, 'Unauthorized');

            const body = await req.json();
            const election = await ElectionService.createElection(body, admin.id);
            return sendSuccess(election, 'Election created successfully', 201);
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                return sendError(400, 'Validation Error', error.errors);
            }
            return sendError(400, error.message);
        }
    },

    async generateKeys(req: NextRequest) {
        try {
            const admin = await verifyAdmin(req);
            if (!admin) return sendError(401, 'Unauthorized');

            const { searchParams } = new URL(req.url);
            const electionId = searchParams.get('electionId');
            if (!electionId) return sendError(400, 'Election ID required');

            const keys = await ElectionService.generateKeys(electionId, admin.id);
            return sendSuccess(keys, 'Keys generated successfully');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },

    async enterKey(req: NextRequest) {
        try {
            const admin = await verifyAdmin(req);
            if (!admin) return sendError(401, 'Unauthorized');

            const body = await req.json(); // { electionId, key }
            if (!body.electionId || !body.key) return sendError(400, 'Election ID and Key required');

            const result = await ElectionService.enterKey(body.electionId, body.key);
            return sendSuccess(result, 'Key accepted');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },

    async start(req: NextRequest) {
        try {
            const admin = await verifyAdmin(req);
            if (!admin) return sendError(401, 'Unauthorized');

            const body = await req.json(); // { electionId }
            const election = await ElectionService.startElection(body.electionId, admin.id);
            return sendSuccess(election, 'Election started successfully');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },

    async stop(req: NextRequest) {
        try {
            const admin = await verifyAdmin(req);
            if (!admin) return sendError(401, 'Unauthorized');

            const body = await req.json(); // { electionId }
            const election = await ElectionService.stopElection(body.electionId, admin.id);
            return sendSuccess(election, 'Election stopped successfully');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },

    async getResults(req: NextRequest) {
        try {
            const admin = await verifyAdmin(req);
            if (!admin) return sendError(401, 'Unauthorized');

            const { searchParams } = new URL(req.url);
            const electionId = searchParams.get('electionId');
            if (!electionId) return sendError(400, 'Election ID required');

            const results = await ElectionService.getResults(electionId);
            return sendSuccess(results, 'Election results retrieved');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },

    async getAll(req: NextRequest) {
        try {
            const elections = await ElectionService.getAllElections();
            return sendSuccess(elections, 'Elections retrieved successfully');
        } catch (error: any) {
            return sendError(500, error.message);
        }
    },

    async getById(req: NextRequest, { params }: { params: { id: string } }) {
        try {
            const election = await ElectionService.getElectionById(params.id);
            if (!election) return sendError(404, 'Election not found');
            return sendSuccess(election, 'Election retrieved successfully');
        } catch (error: any) {
            return sendError(500, error.message);
        }
    }
};
