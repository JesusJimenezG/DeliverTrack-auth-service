import { Request, Response } from 'express';
import response from './network';
import AuthService from '../services/auth';

const login = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await AuthService.loginUser(data);

        response.success(res, user.toString(), 200);
    } catch (error) {
        // console.error(error);
        response.error(res, error, 500);
    }
};

export default {
    login
};
