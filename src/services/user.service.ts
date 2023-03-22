import { User as PrismaUser } from '@prisma/client';
import UserModel from '../models/user.model';
import { userValidator } from '../utils/validators';
import { encrypt } from '../utils/bcrypt.handler';

const registerUser = async (user: PrismaUser): Promise<PrismaUser> => {
    // Validate user data
    userValidator(user.email, user.password);

    // Hash password
    const hashedPassword = await encrypt(user.password);
    user.password = hashedPassword;

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
