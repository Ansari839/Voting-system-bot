import { NextResponse } from 'next/server';

type ApiResponse<T> = {
    success: boolean;
    message?: string;
    data?: T;
    error?: any;
};

export function sendResponse<T>(
    status: number,
    success: boolean,
    message: string,
    data?: T,
    error?: any
) {
    return NextResponse.json(
        { success, message, data, error },
        { status }
    );
}

export function sendError(status: number, message: string, error?: any) {
    return sendResponse(status, false, message, undefined, error);
}

export function sendSuccess<T>(data: T, message: string = 'Success', status: number = 200) {
    return sendResponse(status, true, message, data);
}
