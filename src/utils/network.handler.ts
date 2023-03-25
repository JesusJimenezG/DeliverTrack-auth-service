// import { Response } from 'express';
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

// const success = (res: Response, data?: string | unknown, status?: number) => {
//     const _status = status || 200;
//     const _data = { data: data || 'Success' };
//     res.status(_status).json(_data);
// };

// const error = (res: Response, error?: unknown, status?: number) => {
//     const _status = status || 500;
//     const _error = handleErrorMessage(error) || {
//         Error: 'Internal server error'
//     };
//     res.status(_status).json(_error);
// };

// const handleErrorMessage = (
//     error: Error | PrismaClientKnownRequestError | unknown
// ) => {
//     let _error;

//     // console.log(`error: ${error}`);

//     if (
//         typeof (error as PrismaClientKnownRequestError).code === 'string' &&
//         (error as PrismaClientKnownRequestError).code.startsWith('P')
//     ) {
//         const prismaError = error as PrismaClientKnownRequestError;
//         console.log(`instanceof PrismaClientKnownRequestError`);
//         const target = (prismaError.meta?.target as Array<string>)[0];

//         if (prismaError.code === 'P2002') {
//             _error = {
//                 Error: `${target} already in use`
//             };
//         }
//         if (prismaError.code === 'P2003') {
//             const target = (prismaError.meta?.target as Array<string>)[0];
//             _error = {
//                 Error: `${target} not found`
//             };
//         }
//     } else if (error instanceof Error) {
//         console.log(`instanceof error`);
//         _error = { Error: error.message };
//     }

//     return _error;
// };

// export default {
//     success,
//     error
// };
