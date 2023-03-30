import { User as PrismaUser } from '@prisma/client';
import prisma from '../../client/prisma.client';

const create = async (user: PrismaUser): Promise<PrismaUser> => {
    return await prisma.user.create({
        data: {
            email: user.email,
            password: user.password,
            name: user.name
        }
    });
};

const getById = async (user_id: number): Promise<PrismaUser | null> => {
    return await prisma.user.findUnique({ where: { user_id } });
};

const getByEmail = async (email: string): Promise<PrismaUser | null> => {
    return await prisma.user.findUnique({ where: { email } });
};

const getAll = async (): Promise<PrismaUser[]> => {
    return await prisma.user.findMany();
};

const update = async (
    user_id: number,
    user: PrismaUser
): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { user_id },
        data: {
            email: user.email,
            password: user.password,
            name: user.name
        }
    });
};

const updateName = async (
    user_id: number,
    name: string
): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { user_id },
        data: {
            name: name
        }
    });
};

const updateEmail = async (
    user_id: number,
    email: string
): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { user_id },
        data: {
            email: email
        }
    });
};

const updatePassword = async (
    user_id: number,
    password: string
): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { user_id },
        data: {
            password: password
        }
    });
};

const removeById = async (user_id: number): Promise<PrismaUser> => {
    return await prisma.user.delete({ where: { user_id } });
};

export default {
    create,
    getAll,
    getById,
    getByEmail,
    update,
    updateName,
    updateEmail,
    updatePassword,
    removeById
};
