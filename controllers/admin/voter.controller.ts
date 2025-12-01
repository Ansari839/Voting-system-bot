import { NextRequest } from 'next/server';
import { VoterService } from '@/services/admin/voter.service';
import { sendSuccess, sendError } from '@/utils/api-response';
import { z } from 'zod';

export const VoterController = {
    async create(req: NextRequest) {
        try {
            const body = await req.json();
            const voter = await VoterService.createVoter(body);
            return sendSuccess(voter, 'Voter created successfully', 201);
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                return sendError(400, 'Validation Error', error.errors);
            }
            return sendError(400, error.message);
        }
    },

    async getAll(req: NextRequest) {
        try {
            const voters = await VoterService.getVoters();
            return sendSuccess(voters, 'Voters retrieved successfully');
        } catch (error: any) {
            return sendError(500, 'Failed to fetch voters', error.message);
        }
    },

    async update(req: NextRequest, { params }: { params: { id: string } }) {
        try {
            const body = await req.json();
            const voter = await VoterService.updateVoter(params.id, body);
            return sendSuccess(voter, 'Voter updated successfully');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },

    async delete(req: NextRequest, { params }: { params: { id: string } }) {
        try {
            await VoterService.deleteVoter(params.id);
            return sendSuccess(null, 'Voter deleted successfully');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },
};
