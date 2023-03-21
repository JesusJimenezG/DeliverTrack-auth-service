import bcrypt from 'bcrypt';
import { User as PrismaUser } from '@prisma/client';
import UserModel from '../models/user';
import { userValidator } from '../utils/validators';

/**
 *
 * @param user { email: string, password: string, name: string}
 * @returns {PrismaUser}
 */
const registerUser = async (user: PrismaUser): Promise<PrismaUser> => {
    // Validate user data
    userValidator(user.email, user.password);

    console.log(`user before hashing password: ${user}`);
    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    console.log(`user after password hashed: ${user}`);

    return await UserModel.create(user);
};

const getUserById = async (id: number): Promise<PrismaUser | null> => {
    return await UserModel.getById(id);
};

const updateUserName = async (
    id: number,
    name: string
): Promise<PrismaUser> => {
    return await UserModel.updateName(id, name);
};

const updateUserEmail = async (
    id: number,
    email: string
): Promise<PrismaUser> => {
    return await UserModel.updateEmail(id, email);
};

const updateUserPassword = async (
    id: number,
    password: string
): Promise<PrismaUser> => {
    // TODO: Hash password
    return await UserModel.updatePassword(id, password);
};

const deleteUser = async (id: number): Promise<PrismaUser> => {
    return await UserModel.removeById(id);
};

export default {
    registerUser,
    getUserById,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    deleteUser
};
