const config = {
    api: {
        url: process.env.URL || 'http://localhost:4000',
        port: process.env.PORT || 4000,
        host: process.env.HOST || '0.0.0.0'
    }
};

export default config;
