import express from 'express';
import router from './routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const createApp = () => {
    const app = express();
    app.use(
        cors({
            origin: 'http://localhost:5173',
            credentials: true
        })
    );
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Set up routes
    app.use('/api/auth', router);

    return app;
};
