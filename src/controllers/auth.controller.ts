import { Request, Response } from 'express';
import ResponseHandler from '../utils/network.handler';
import AuthService from '../services/auth.service';
import { generateRandomString, hashString } from '../utils/encrypt.handler';
import { generateToken } from '../utils/jwt.handler';

const login = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const valid = await AuthService.validateCredentials(data);

        if (!valid) {
            ResponseHandler.error(res, 'Invalid credentials', 401);
            return;
        }

        addTokenToResponse(res);
        ResponseHandler.success(res);
    } catch (error) {
        ResponseHandler.error(res, error, 500);
    }
};

const addTokenToResponse = (res: Response) => {
    // Generate a random string and hash it
    const randomString = generateRandomString(32);
    const hash = hashString(randomString);

    // Set the cookie with the random string (HttpOnly, Secure, SameSite, and prefixes)
    res.cookie('session', randomString, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    });

    // Create the JWT token with the hashed random string as the user context
    const { token } = generateToken(hash);

    // Add the token to the response as a Bearer token
    res.setHeader('Authorization', `Bearer ${token}`);
};

export default {
    login
};
