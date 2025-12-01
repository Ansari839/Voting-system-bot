import { CandidateController } from '@/controllers/admin/candidate.controller';
import { withAdminAuth } from '@/middlewares/admin-auth';

export const GET = withAdminAuth(CandidateController.getByElection);
export const POST = withAdminAuth(CandidateController.create);
