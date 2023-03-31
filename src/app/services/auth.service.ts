import { AuthCredentials } from '../interfaces/auth.interface';
import UserModel from '../models/user.model';
import { userValidate } from '../../utils/validators';
import { EncrypHandler } from 'delivertrack-middlewares';

const validateCredentials = async (credentials: AuthCredentials) => {
    const { email, password } = credentials;
    userValidate(email, password);

    const user = await UserModel.getByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await EncrypHandler.decryptPassword(
        password,
        user.password
    );
    if (!passwordMatch) {
        throw new Error('Incorrect password');
    }

    return true;
};

export default {
    validateCredentials
};
