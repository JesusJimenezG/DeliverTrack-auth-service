import { Request, Response, NextFunction } from 'express';
import { hashString } from '../utils/encrypt.handler';
import { verifyToken } from '../utils/jwt.handler';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: 'Authorization header is missing' });
    }

    // Verify the token and extract the user context
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = verifyToken(token);
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    const fingerprint = decodedToken.fingerprint;

    // Get the cookie and compare it with the hashed user context
    const session = req.cookies.session;
    const hash = hashString(session);
    if (hash !== fingerprint) {
        return res.status(401).json({ message: 'Invalid session' });
    }

    return next();
};

export default validateToken;
