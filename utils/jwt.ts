import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key'; // Ensure this is in env

export const generateVoterToken = (voterId: string): string => {
    return jwt.sign({ voterId, role: 'voter' }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyVoterToken = (token: string): { voterId: string; role: string } | null => {
    try {
        return jwt.verify(token, JWT_SECRET) as { voterId: string; role: string };
    } catch (error) {
        return null;
    }
};
