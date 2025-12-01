import { ElectionController } from '@/controllers/admin/election.controller';
import { withAdminAuth } from '@/middlewares/admin-auth';

export const GET = withAdminAuth(ElectionController.getResults);
