import prisma from "@/lib/prisma";
import { ElectionConfig, Prisma } from "@/app/generated/prisma/client";

export const create = async (data: Prisma.ElectionConfigCreateInput): Promise<ElectionConfig> => {
    return await prisma.electionConfig.create({
        data,
    });
};

export const get = async (): Promise<ElectionConfig | null> => {
    return await prisma.electionConfig.findFirst();
};

export const update = async (id: string, data: Prisma.ElectionConfigUpdateInput): Promise<ElectionConfig> => {
    return await prisma.electionConfig.update({
        where: { id },
        data,
    });
};

export const count = async (): Promise<number> => {
    return await prisma.electionConfig.count();
};
