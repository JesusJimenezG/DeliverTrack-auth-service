import express from 'express';

const router = express.Router();

router.get('/api/auth/login', (_, res) => {
    res.send(JSON.stringify({ message: 'login' }));
});
router.get('api/auth/token', (_, res) => {
    res.send(JSON.stringify({ message: 'token' }));
});

export default router;
