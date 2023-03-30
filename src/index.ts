import { createApp } from './app/app';
import prisma from './client/prisma.client';
import config from './config/config';

const app = createApp();

// Connect prisma
prisma.$connect();

// Start the server
const PORT = config.api.port;
const HOST = config.api.host;
const server = app.listen(PORT, HOST, () => {
    console.info(
        `🪪  Authentication service started at: http://${HOST}:${PORT}`
    );
});

// Graceful shutdown
const handleShutdown = async () => {
    // console.info('Shutting down server... 👋');
    await server.close();
    await prisma.$disconnect();
    process.exit(0);
};

process.on('SIGINT', () => handleShutdown());
process.on('SIGTERM', () => handleShutdown());
