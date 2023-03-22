import express from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const router = express.Router();

router.use('/', authRoutes);
router.use('/user', userRoutes);

export default router;
