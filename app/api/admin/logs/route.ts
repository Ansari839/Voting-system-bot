import { LogController } from '@/controllers/admin/log.controller';
import { withAdminAuth } from '@/middlewares/admin-auth';

export const GET = withAdminAuth(LogController.getLogs);
