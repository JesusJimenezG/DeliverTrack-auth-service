import { User as PrismaUser } from '@prisma/client';
import { AuthCredentials } from '../interfaces/auth.interface';
import UserModel from '../models/user.model';
import { userValidator } from '../utils/validators';
import { compare } from '../utils/bcrypt.handler';
import { generateToken } from '../utils/jwt.handler';

const loginUser = async (credentials: AuthCredentials): Promise<PrismaUser> => {
    const { email, password } = credentials;
    userValidator(email, password);

    const user = await UserModel.getByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Incorrect password');
    }

    // const { token, fingerprint } = generateToken(user);

    // await UserModel.updateFingerprint(user.id, fingerprint);

    return user;
};

export default {
    loginUser
};
