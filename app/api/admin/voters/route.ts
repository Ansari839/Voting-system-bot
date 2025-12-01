import { VoterController } from '@/controllers/admin/voter.controller';
import { withAdminAuth } from '@/middlewares/admin-auth';

export const GET = withAdminAuth(VoterController.getAll);
export const POST = withAdminAuth(VoterController.create);
