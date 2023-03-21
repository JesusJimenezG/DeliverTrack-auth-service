import bcrypt from 'bcrypt';
import { User as PrismaUser } from '@prisma/client';
import UserModel from '../models/user';

const registerUser = async (user: PrismaUser): Promise<PrismaUser> => {
    // Validate user data
    if (!user.email || !user.password) {
        throw new Error('Email and password are required');
    }
    if (user.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    return await UserModel.createUser(user);
};

const getUserById = async (id: number): Promise<PrismaUser | null> => {
    return await UserModel.getUserById(id);
};

const updateUserName = async (
    id: number,
    name: string
): Promise<PrismaUser> => {
    return await UserModel.updateUserName(id, name);
};

const updateUserEmail = async (
    id: number,
    email: string
): Promise<PrismaUser> => {
    return await UserModel.updateUserEmail(id, email);
};

const updateUserPassword = async (
    id: number,
    password: string
): Promise<PrismaUser> => {
    // TODO: Hash password
    return await UserModel.updateUserPassword(id, password);
};

const deleteUser = async (id: number): Promise<PrismaUser> => {
    return await UserModel.deleteUser(id);
};

export default {
    registerUser,
    getUserById,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    deleteUser
};
