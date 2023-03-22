import bcrypt from 'bcrypt';

const encrypt = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const compare = (password: string, hash: string): boolean => {
    return bcrypt.compareSync(password, hash);
};

export { encrypt, compare };
