import express from 'express';
import config from '../config';

const app = express();
const PORT = config.api.port;
const HOST = config.api.host;

app.use(express.json());

app.get('/ping', (_, res) => {
    res.send('pong');
});

app.listen(PORT, HOST, () => {
    console.log(`Listening http://${HOST}:${PORT}`);
    console.log(`name: ${process.env.NAME}`);
});
