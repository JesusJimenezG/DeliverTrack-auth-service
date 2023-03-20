import express from 'express';
import config from '../config';

const app = express();

app.use(express.json());

app.get("/ping", (_, res) => {
    res.send("pong");
});

app.listen(config.api.port, () => {
    console.log(`Listening http://localhost:${config.api.port}`);
});