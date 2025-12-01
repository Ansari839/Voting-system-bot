import { prisma } from '@/lib/prisma';

export const LogService = {
    async createLog(action: string, adminId?: string, electionId?: string) {
        return await prisma.log.create({
            data: {
                action,
                adminId,
                electionId,
            },
        });
    },

    async getLogs() {
        return await prisma.log.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                admin: { select: { name: true, email: true } },
                election: { select: { name: true } },
            },
        });
    },
};
