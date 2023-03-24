import { Request, Response } from 'express';
import ResponseHandler from '../utils/network.handler';
import AuthService from '../services/auth.service';
// import { generateRandomString, hashString } from '../utils/encrypt.handler';
import {
    generateRandomString,
    hashString
} from 'session-authentication-middleware/utils/encrypt.handler';
// import { generateToken } from '../utils/jwt.handler';
import { generateToken } from 'session-authentication-middleware/utils/jwt.handler';
import config from '../config/config';

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

    // Add the token to the response as a Bearer token
    return token;
    // res.setHeader('Authorization', `Bearer ${token}`);
};

export default {
    login
};
