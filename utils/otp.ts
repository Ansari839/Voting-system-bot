import bcrypt from 'bcryptjs';

export const generateOTP = (): string => {
    // Generate a 6-digit numeric OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const hashOTP = async (otp: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(otp, salt);
};

export const verifyOTP = async (otp: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(otp, hash);
};
