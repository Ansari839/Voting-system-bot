import { NextRequest } from 'next/server';
import { LogService } from '@/services/admin/log.service';
import { sendSuccess, sendError } from '@/utils/api-response';

export const LogController = {
    async getLogs(req: NextRequest) {
        try {
            const logs = await LogService.getLogs();
            return sendSuccess(logs, 'Logs retrieved successfully');
        } catch (error: any) {
            return sendError(500, 'Failed to fetch logs', error.message);
        }
    },
};
