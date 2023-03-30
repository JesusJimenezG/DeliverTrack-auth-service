import express from 'express';
import { MiddlewareSession } from 'session-authentication-middleware';
import config from '../../config/config';
import UserController from '../controller/user.controller';

const router = express.Router();
const jwt_token = config.secret.jwt_secret;

router.post(
    '/create',
    (req, res, next) =>
        MiddlewareSession.validateToken(req, res, next, jwt_token),
    UserController.create
);
router.get(
    '/get',
    (req, res, next) =>
        MiddlewareSession.validateToken(req, res, next, jwt_token),
    UserController.retrieve
);
router.put(
    '/update',
    (req, res, next) =>
        MiddlewareSession.validateToken(req, res, next, jwt_token),
    UserController.update
);
router.delete(
    '/delete',
    (req, res, next) =>
        MiddlewareSession.validateToken(req, res, next, jwt_token),
    UserController.remove
);

export default router;
