import { User as PrismaUser } from '@prisma/client';

import prisma from '../services/prisma';

const createUser = async (user: PrismaUser): Promise<PrismaUser> => {
    return await prisma.user.create({
        data: {
            email: user.email,
            password: user.password,
            name: user.name
        }
    });
};

const getUserById = async (id: number): Promise<PrismaUser | null> => {
    return await prisma.user.findUnique({ where: { id } });
};

const getUserByEmail = async (email: string): Promise<PrismaUser | null> => {
    return await prisma.user.findUnique({ where: { email } });
};

const getUsers = async (): Promise<PrismaUser[]> => {
    return await prisma.user.findMany();
};

const updateUserName = async (
    id: number,
    name: string
): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { id },
        data: {
            name: name
        }
    });
};

const updateUserEmail = async (
    id: number,
    email: string
): Promise<PrismaUser> => {
    return await prisma.user.update({
        where: { id },
        data: {
            email: email
        }
    });
};

const updateUserPassword = async (
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

const deleteUser = async (id: number): Promise<PrismaUser> => {
    return await prisma.user.delete({ where: { id } });
};

export default {
    createUser,
    getUsers,
    getUserById,
    getUserByEmail,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    deleteUser
};
