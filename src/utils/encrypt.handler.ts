import bcrypt from 'bcrypt';
import crypto from 'crypto';

const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const decryptPassword = (password: string, hash: string): boolean => {
    return bcrypt.compareSync(password, hash);
};

const generateRandomString = (length: number): string => {
    return crypto
        .randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
};

const hashString = (str: string): string => {
    return crypto.createHash('sha256').update(str).digest('hex');
};

export { encryptPassword, decryptPassword, generateRandomString, hashString };
