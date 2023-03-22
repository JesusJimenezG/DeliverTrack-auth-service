import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { User } from '@prisma/client';
import config from '../config/config';
import { encrypt } from './bcrypt.handler';

const generateToken = async (payload: User) => {
    const fingerprint = crypto.randomBytes(20).toString('hex');
    const hashedFingerprint = await encrypt(fingerprint);

    const token = jwt.sign(
        {
            user: {
                id: payload.user_id,
                email: payload.email,
                fingerprint: hashedFingerprint
            }
        },
        config.secret.jwt_secret
    );

    return { token, fingerprint };
};

const verifyToken = (token: string) => {
    const decoded = jwt.verify(token, config.secret.jwt_secret);
    return decoded;
};

export { generateToken, verifyToken };
