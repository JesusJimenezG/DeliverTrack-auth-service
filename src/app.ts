import express from 'express';
import config from './config/config';
import router from './routes';
import cors from 'cors';
import prisma from './services/prisma';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api/auth', router);

// Start the server
const PORT = config.api.port;
const HOST = config.api.host;
app.listen(PORT, HOST, () => {
    console.log(`Listening http://${HOST}:${PORT}`);
});

// Graceful shutdown
const handleShutdown = async () => {
    console.log('Shutting down server...');
    await prisma.$disconnect();
    //   await new Promise((resolve) => redisClient.quit(() => resolve(null)));
    process.exit(0);
};

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);
