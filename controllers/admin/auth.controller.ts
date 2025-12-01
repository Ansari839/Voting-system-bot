import { NextRequest } from 'next/server';
import { AuthService } from '@/services/admin/auth.service';
import { sendSuccess, sendError } from '@/utils/api-response';
import { z } from 'zod';

export const AuthController = {
    async register(req: NextRequest) {
        try {
            const body = await req.json();
            const result = await AuthService.register(body);
            return sendSuccess(result, 'Admin registered successfully', 201);
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                return sendError(400, 'Validation Error', error.errors);
            }
            return sendError(400, error.message || 'Registration failed');
        }
    },

    async login(req: NextRequest) {
        try {
            const body = await req.json();
            const result = await AuthService.login(body);
            return sendSuccess(result, 'Login successful');
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                return sendError(400, 'Validation Error', error.errors);
            }
            return sendError(401, error.message || 'Login failed');
        }
    },
};
