import { ElectionController } from '@/controllers/admin/election.controller';
import { withAdminAuth } from '@/middlewares/admin-auth';

export const POST = withAdminAuth(ElectionController.generateKeys);
