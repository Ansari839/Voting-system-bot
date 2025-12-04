import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as model from "./electionConfig.model";
import { sendSuccess, sendError } from "@/utils/api-response";

const createSchema = z.object({
    electionName: z.string().min(1, "Election name is required"),
    electionDescription: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
}).refine((data) => data.startDate < data.endDate, {
    message: "Start date must be before end date",
    path: ["startDate"],
});

const updateSchema = z.object({
    electionName: z.string().min(1, "Election name is required").optional(),
    electionDescription: z.string().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
}).refine((data) => {
    if (data.startDate && data.endDate) {
        return data.startDate < data.endDate;
    }
    return true;
}, {
    message: "Start date must be before end date",
    path: ["startDate"],
});

export const createElectionConfig = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const validation = createSchema.safeParse(body);

        if (!validation.success) {
            return sendError(400, "Validation Error", validation.error.format());
        }

        const count = await model.count();
        if (count > 0) {
            return sendError(409, "Election configuration already exists. Only one is allowed.");
        }

        const newConfig = await model.create({
            electionName: validation.data.electionName,
            electionDescription: validation.data.electionDescription,
            startDate: validation.data.startDate,
            endDate: validation.data.endDate,
            // status is default NOT_STARTED
        });

        return sendSuccess(newConfig, "Election configuration created successfully", 201);
    } catch (error) {
        console.error("Error creating election config:", error);
        return sendError(500, "Internal Server Error", error);
    }
};

export const getElectionConfig = async () => {
    try {
        const config = await model.get();
        if (!config) {
            return sendSuccess(null, "No election configuration found");
        }
        return sendSuccess(config, "Election configuration retrieved successfully");
    } catch (error) {
        console.error("Error getting election config:", error);
        return sendError(500, "Internal Server Error", error);
    }
};

export const updateElectionConfig = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        const { id } = await params;
        const body = await req.json();

        // Ensure status is not being updated
        if (body.status) {
            return sendError(400, "Status cannot be updated in this module");
        }

        const validation = updateSchema.safeParse(body);
        if (!validation.success) {
            return sendError(400, "Validation Error", validation.error.format());
        }

        const existingConfig = await model.get();
        if (!existingConfig) {
            return sendError(404, "Election configuration not found");
        }

        if (existingConfig.id !== id) {
            return sendError(404, "Election configuration ID mismatch");
        }

        // If updating dates, we might need to check against existing dates if only one is provided
        // But for simplicity, if one is provided, we assume the other is valid or we should fetch and compare.
        // The refine logic in Zod only works if both are present in the body.
        // Let's add a check if only one is provided.
        let startDate = validation.data.startDate || existingConfig.startDate;
        let endDate = validation.data.endDate || existingConfig.endDate;

        if (startDate >= endDate) {
            return sendError(400, "Start date must be before end date");
        }

        const updatedConfig = await model.update(id, {
            electionName: validation.data.electionName,
            electionDescription: validation.data.electionDescription,
            startDate: validation.data.startDate,
            endDate: validation.data.endDate,
        });

        return sendSuccess(updatedConfig, "Election configuration updated successfully");
    } catch (error) {
        console.error("Error updating election config:", error);
        return sendError(500, "Internal Server Error", error);
    }
};
