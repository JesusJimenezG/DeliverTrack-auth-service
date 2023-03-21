import { Response } from 'express';

const success = (res: Response, data?: string, status?: number) => {
    const _status = status || 200;
    const _data = { data: data || 'Success' };
    res.status(_status).send(_data);
};

const error = (res: Response, error?: Error | unknown, status?: number) => {
    const _status = status || 500;
    const _error = {
        Error: `${(error as Error)?.message || 'Internal server error'}`
    };
    res.status(_status).send(_error);
};

export default {
    success,
    error
};
