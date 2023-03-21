import { Request, Response } from 'express';
import ResponseHandler from './network';
import UserService from '../services/user';

const registerUser = (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = UserService.registerUser(data);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const getUserById = (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = UserService.getUserById(data);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const updateUserName = (req: Request, res: Response) => {
    try {
        const { id, name } = req.body;
        const user = UserService.updateUserName(Number(id), name);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const updateUserEmail = (req: Request, res: Response) => {
    try {
        const { id, email } = req.body;
        const user = UserService.updateUserName(Number(id), email);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const updateUserPassword = (req: Request, res: Response) => {
    try {
        const { id, password } = req.body;
        const user = UserService.updateUserPassword(Number(id), password);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const deleteUser = (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const user = UserService.deleteUser(Number(id));

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

export default {
    registerUser,
    getUserById,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    deleteUser
};
