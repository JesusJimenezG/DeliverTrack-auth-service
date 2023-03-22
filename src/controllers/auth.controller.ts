import { Request, Response } from 'express';
import response from '../utils/network.handler';
import AuthService from '../services/auth.service';

const login = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await AuthService.loginUser(data);

        response.success(res, user.toString(), 200);
    } catch (error) {
        console.error(error);
        response.error(res, error, 500);
    }
};

export default {
    login
};
