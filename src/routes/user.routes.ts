import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.post('/create', UserController.create);
router.get('/get', UserController.retrieve);
router.put('/update', UserController.update);
router.delete('/delete', UserController.remove);

export default router;
