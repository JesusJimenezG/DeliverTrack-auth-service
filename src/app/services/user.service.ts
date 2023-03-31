import { User as PrismaUser } from '@prisma/client';
import UserModel from '../models/user.model';
import { userValidate } from '../../utils/validators';
import { EncrypHandler } from 'delivertrack-middlewares';
import { User } from '../interfaces/user.interface';
import { cleanedUser } from '../../utils/user.handler';

const registerUser = async (user: PrismaUser): Promise<PrismaUser> => {
    // Validate user data
    userValidate(user.email, user.password);

    // Hash password
    const hashedPassword = await EncrypHandler.encryptPassword(
        user.password as string
    );
    user.password = hashedPassword;

    return await UserModel.create(user);
};

const getUserById = async (user_id: number): Promise<User | null> => {
    const user = (await UserModel.getById(user_id)) as User | null;

    return cleanedUser(user);
};

const updateUserDetails = async (user: User): Promise<User | null> => {
    if (!user.user_id) throw new Error('User ID is required');

    if (user.name) {
        await updateUserName(user.user_id, user.name);
    }
    if (user.email) {
        await updateUserEmail(user.user_id, user.email);
    }
    if (user.password) {
        await updateUserPassword(user.user_id, user.password);
    }

    const updatedUser = (await UserModel.getById(user.user_id)) as User | null;
    return cleanedUser(updatedUser);
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
    updateUserDetails,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    deleteUser
};
