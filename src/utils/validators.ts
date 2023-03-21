export const userValidator = (email?: string, password?: string): boolean => {
    if (!emailValidator(email)) {
        throw new Error('Invalid email');
    }
    if (!passwordValidator(password)) {
        throw new Error('Password is required');
    }
    return true;
};

export const emailValidator = (email?: string): boolean => {
    if (!email) {
        throw new Error('Email is required');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const passwordValidator = (password?: string): boolean => {
    if (!password) {
        throw new Error('Password is required');
    }
    if (password.length < 4) {
        throw new Error('Password must be at least 6 characters long');
    }
    return true;
};
