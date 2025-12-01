import { prisma } from '@/lib/prisma';
import { hashPassword, comparePassword, generateToken } from '@/utils/auth';
import { z } from 'zod';

const RegisterSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const AuthService = {
    async register(data: z.infer<typeof RegisterSchema>) {
        const validated = RegisterSchema.parse(data);

        const existing = await prisma.admin.findUnique({
            where: { email: validated.email },
        });

        if (existing) {
            throw new Error('Admin already exists');
        }

        const hashedPassword = await hashPassword(validated.password);

        const admin = await prisma.admin.create({
            data: {
                name: validated.name,
                email: validated.email,
                password: hashedPassword,
            },
        });

        const token = generateToken({ id: admin.id, email: admin.email });

        return { admin: { id: admin.id, name: admin.name, email: admin.email }, token };
    },

    async login(data: z.infer<typeof LoginSchema>) {
        const validated = LoginSchema.parse(data);

        const admin = await prisma.admin.findUnique({
            where: { email: validated.email },
        });

        if (!admin) {
            throw new Error('Invalid credentials');
        }

        const isValid = await comparePassword(validated.password, admin.password);

        if (!isValid) {
            throw new Error('Invalid credentials');
        }

        const token = generateToken({ id: admin.id, email: admin.email });

        return { admin: { id: admin.id, name: admin.name, email: admin.email }, token };
    },
};
