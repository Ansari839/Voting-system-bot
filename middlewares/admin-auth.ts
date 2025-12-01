import { NextRequest } from 'next/server';
import { verifyToken } from '@/utils/auth';
import { sendError } from '@/utils/api-response';

export async function verifyAdmin(req: NextRequest) {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null; // No token
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded) {
        return null; // Invalid token
    }

    return decoded; // Return admin data
}

// Helper to wrap route handlers
export function withAdminAuth(handler: Function) {
    return async (req: NextRequest, ...args: any[]) => {
        const admin = await verifyAdmin(req);
        if (!admin) {
            return sendError(401, 'Unauthorized: Admin access required');
        }
        // Attach admin to request if needed, or just proceed
        // Since NextRequest is immutable, we might pass admin as an argument if the handler supports it
        // For now, we just ensure auth.
        return handler(req, ...args);
    };
}
