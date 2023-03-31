import { Request, Response } from 'express';
import ResponseHandler from 'delivertrack-middlewares/utils/network.handler';
import UserService from '../services/user.service';

const create = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await UserService.registerUser(data);

        ResponseHandler.success(res, user, 200);
    } catch (error) {
        ResponseHandler.error(res, error);
    }
};

const retrieve = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.body;
        const user = await UserService.getUserById(user_id);

        ResponseHandler.success(res, user, 200);
    } catch (error) {
        ResponseHandler.error(res, error, 500);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await UserService.updateUserDetails(data);

        ResponseHandler.success(res, user, 200);
    } catch (error) {
        ResponseHandler.error(res, error, 500);
    }
};

const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const user = await UserService.deleteUser(Number(id));

        ResponseHandler.success(res, user, 200);
    } catch (error) {
        ResponseHandler.error(res, error, 500);
    }
};

export default {
    create,
    retrieve,
    update,
    remove
};
