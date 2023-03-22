import { Request, Response } from 'express';
import ResponseHandler from './network';
import UserService from '../services/user';

const create = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await UserService.registerUser(data);
        console.log(`user: ${user}`);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        console.error(`type of error: ${typeof error}`);

        ResponseHandler.error(res, error);
    }
};

const retrieve = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await UserService.getUserById(data);

        ResponseHandler.success(res, user?.toString(), 200);
    } catch (error) {
        ResponseHandler.error(res, error, 500);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.body;
        const user = await UserService.updateUserName(Number(id), name);

        ResponseHandler.success(res, user.toString(), 200);
    } catch (error) {
        // console.error(error);
        ResponseHandler.error(res, error, 500);
    }
};

const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const user = await UserService.deleteUser(Number(id));

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
