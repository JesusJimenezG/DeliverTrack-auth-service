import express from 'express';
import auth from '../controllers/auth';

const router = express.Router();

router.post('/login', auth.login);
// router.get('/token', (_, res) => {
//     res.send(JSON.stringify({ message: 'token' }));
// });

export default router;
