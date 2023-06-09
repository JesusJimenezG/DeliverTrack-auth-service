import { Request, Response } from 'express';
import ResponseHandler from 'delivertrack-middlewares/utils/network.handler';
import AuthService from '../services/auth.service';
import {
    hashString,
    generateRandomString
} from 'delivertrack-middlewares/utils/encrypt.handler';
import { generateToken } from 'delivertrack-middlewares/utils/jwt.handler';
import config from '../../config/config';

const jwt_token = config.secret.jwt_secret;

const login = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const valid = await AuthService.validateCredentials(data);

        if (!valid) {
            ResponseHandler.error(res, 'Invalid credentials', 401);
            return;
        }

        const token = addTokenToResponse(res);
        ResponseHandler.success(res, token);
    } catch (error) {
        ResponseHandler.error(res, error, 500);
    }
};

const addTokenToResponse = (res: Response): string => {
    // Generate a random string and hash it
    const randomString = generateRandomString(32);
    const hash = hashString(randomString);

    // Set the cookie with the random string (HttpOnly, Secure, SameSite, and prefixes)
    res.cookie('fingerprint', randomString, {
        httpOnly: true,
        secure: false
        // sameSite: 'strict'
    });

    // Create the JWT token with the hashed random string as the user context
    const { token } = generateToken(hash, jwt_token);

    return token;
    // Add the token to the response as a Bearer token
    // res.setHeader('Authorization', `Bearer ${token}`);
};

export default {
    login
};
