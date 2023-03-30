import express from 'express';
import AuthController from '../controller/auth.controller';
import UserController from '../controller/user.controller';

const router = express.Router();

router.post('/register', UserController.create);
router.post('/login', AuthController.login);
// router.post('/logout', AuthController.logout);
// router.post('/token', AuthController.token);
// router.post('/token/refresh', AuthController.refresh);

export default router;
