import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const VoterSchema = z.object({
    name: z.string().min(2),
    email: z.string().email().optional().or(z.literal('')),
    registration: z.string().min(5), // e.g. Voter ID or Phone
});

export const VoterService = {
    async createVoter(data: z.infer<typeof VoterSchema>) {
        const validated = VoterSchema.parse(data);

        const existing = await prisma.voter.findUnique({
            where: { registration: validated.registration },
        });

        if (existing) {
            throw new Error('Voter with this registration ID already exists');
        }

        return await prisma.voter.create({
            data: {
                name: validated.name,
                email: validated.email || null,
                registration: validated.registration,
            },
        });
    },

    async updateVoter(id: string, data: Partial<z.infer<typeof VoterSchema>>) {
        return await prisma.voter.update({
            where: { id },
            data,
        });
    },

    async deleteVoter(id: string) {
        return await prisma.voter.delete({
            where: { id },
        });
    },

    async getVoters() {
        return await prisma.voter.findMany({
            orderBy: { createdAt: 'desc' },
        });
    },

    async getVoterById(id: string) {
        return await prisma.voter.findUnique({
            where: { id },
        });
    },
};
