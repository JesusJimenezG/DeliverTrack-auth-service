import express from 'express';
import userRoutes from './user';
import authRoutes from './auth';

const router = express.Router();

router.use('/', authRoutes);
router.use('/user', userRoutes);

export default router;
