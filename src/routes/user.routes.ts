import express from 'express';
import UserController from '../controllers/user.controller';
import validateToken from '../middleware/session';

const router = express.Router();

router.post('/create', validateToken, UserController.create);
router.get('/get', validateToken, UserController.retrieve);
router.put('/update', validateToken, UserController.update);
router.delete('/delete', validateToken, UserController.remove);

export default router;
