import { Request, Response } from 'express';
import ResponseHandler from './network';
import UserService from '../services/user';

const create = (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = UserService.registerUser(data);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        // console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const retrieve = (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = UserService.getUserById(data);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        // console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const update = (req: Request, res: Response) => {
    try {
        const { id, name } = req.body;
        const user = UserService.updateUserName(Number(id), name);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        // console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const remove = (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const user = UserService.deleteUser(Number(id));

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        // console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

export default {
    create,
    retrieve,
    update,
    remove
};
