import { NextRequest } from 'next/server';
import { CandidateService } from '@/services/admin/candidate.service';
import { sendSuccess, sendError } from '@/utils/api-response';
import { z } from 'zod';

export const CandidateController = {
    async create(req: NextRequest) {
        try {
            const body = await req.json();
            const candidate = await CandidateService.createCandidate(body);
            return sendSuccess(candidate, 'Candidate created successfully', 201);
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                return sendError(400, 'Validation Error', error.errors);
            }
            return sendError(400, error.message);
        }
    },

    async getByElection(req: NextRequest) {
        try {
            const { searchParams } = new URL(req.url);
            const electionId = searchParams.get('electionId');

            if (!electionId) {
                return sendError(400, 'Election ID is required');
            }

            const candidates = await CandidateService.getCandidatesByElection(electionId);
            return sendSuccess(candidates, 'Candidates retrieved successfully');
        } catch (error: any) {
            return sendError(500, 'Failed to fetch candidates', error.message);
        }
    },

    async update(req: NextRequest, { params }: { params: { id: string } }) {
        try {
            const body = await req.json();
            const candidate = await CandidateService.updateCandidate(params.id, body);
            return sendSuccess(candidate, 'Candidate updated successfully');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },

    async delete(req: NextRequest, { params }: { params: { id: string } }) {
        try {
            await CandidateService.deleteCandidate(params.id);
            return sendSuccess(null, 'Candidate deleted successfully');
        } catch (error: any) {
            return sendError(400, error.message);
        }
    },
};
