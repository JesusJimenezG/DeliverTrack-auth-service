import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const handleErrorMessage = (
    error: PrismaClientKnownRequestError | unknown
) => {
    let _error;

    if (
        typeof (error as PrismaClientKnownRequestError).code === 'string' &&
        (error as PrismaClientKnownRequestError).code.startsWith('P')
    ) {
        const prismaError = error as PrismaClientKnownRequestError;
        console.log(`instanceof PrismaClientKnownRequestError`);
        const target = (prismaError.meta?.target as Array<string>)[0];

        if (prismaError.code === 'P2002') {
            _error = {
                Error: `${target} already in use`
            };
        }
        if (prismaError.code === 'P2003') {
            const target = (prismaError.meta?.target as Array<string>)[0];
            _error = {
                Error: `${target} not found`
            };
        }
    }

    return _error;
};
