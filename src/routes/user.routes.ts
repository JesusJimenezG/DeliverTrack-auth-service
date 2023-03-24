import express from 'express';
import UserController from '../controllers/user.controller';
// import validateToken from '../middleware/session';
// import validateToken from '../../../session-authentication-middleware/middleware/session';
import validateToken from 'session-authentication-middleware';
import config from '../config/config';

const router = express.Router();
const jwt_token = config.secret.jwt_secret;

router.post(
    '/create',
    (req, res, next) => validateToken(req, res, next, jwt_token),
    UserController.create
);
router.get(
    '/get',
    (req, res, next) => validateToken(req, res, next, jwt_token),
    UserController.retrieve
);
router.put(
    '/update',
    (req, res, next) => validateToken(req, res, next, jwt_token),
    UserController.update
);
router.delete(
    '/delete',
    (req, res, next) => validateToken(req, res, next, jwt_token),
    UserController.remove
);

export default router;
