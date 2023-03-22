import { fingerprint as UserFingerprint } from '@prisma/client';
import prisma from '../client/prisma.client';

const create = async (
    user_id: number,
    fingerprint: string
): Promise<UserFingerprint> => {
    return await prisma.fingerprint.create({
        data: {
            fingerprint: fingerprint,
            user_id: user_id
        }
    });
};
const update = async (
    fingerprint_id: number,
    fingerprint: string
): Promise<UserFingerprint> => {
    return await prisma.fingerprint.update({
        where: { fingerprint_id },
        data: {
            fingerprint: fingerprint
        }
    });
};

export default {
    create,
    update
};
