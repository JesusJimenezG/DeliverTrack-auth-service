import { User } from '../app/interfaces/user.interface';

export const cleanedUser = (user: User | null): User | null => {
    if (!user) return null;
    if (user.password) delete user.password;
    return user;
};
