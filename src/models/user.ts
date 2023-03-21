import { User as PrismaUser } from '@prisma/client';

import prisma from '../services/prisma';

const create = async (user: PrismaUser): Promise<PrismaUser> => {
    return await prisma.user.create({
        data: {
            email: user.email,
            password: user.password,
            name: user.name
        }
    });
};

const getById = async (id: number): Promise<PrismaUser | null> => {
    return await prisma.user.findUnique({ where: { id } });
};

const getByEmail = async (email: string): Promise<PrismaUser | null> => {
    return await prisma.user.findUnique({ where: { email } });
};

const getAll = async (): Promise<PrismaUser[]> => {
    return await prisma.user.findMany();
};

const update = async (id: number, user: PrismaUser): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { id },
        data: {
            email: user.email,
            password: user.password,
            name: user.name
        }
    });
};

const updateName = async (id: number, name: string): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { id },
        data: {
            name: name
        }
    });
};

const updateEmail = async (id: number, email: string): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { id },
        data: {
            email: email
        }
    });
};

const updatePassword = async (
    id: number,
    password: string
): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { id },
        data: {
            password: password
        }
    });
};

const removeById = async (id: number): Promise<PrismaUser> => {
    return await prisma.user.delete({ where: { id } });
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
