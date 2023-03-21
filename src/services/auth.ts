import bcrypt from 'bcrypt';
import { User as PrismaUser } from '@prisma/client';
import { AuthCredentials } from '../interfaces/auth.interface';
import UserModel from '../models/user';
import { userValidator } from '../utils/validators';

const loginUser = async (credentials: AuthCredentials): Promise<PrismaUser> => {
    const { email, password } = credentials;
    userValidator(email, password);

    const user = await UserModel.getByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Incorrect password');
    }

    return user;
};

export default {
    loginUser
};
