export const userValidate = (
    email?: string,
    password?: string | null
): boolean => {
    if (!emailValidate(email)) {
        throw new Error('Invalid email');
    }
    if (!passwordValidate(password)) {
        throw new Error('Password is required');
    }
    return true;
};

export const emailValidate = (email?: string): boolean => {
    if (!email) {
        throw new Error('Email is required');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const passwordValidate = (password?: string | null): boolean => {
    if (!password) {
        throw new Error('Password is required');
    }
    if (password.length < 4) {
        throw new Error('Password must be at least 6 characters long');
    }
    return true;
};
