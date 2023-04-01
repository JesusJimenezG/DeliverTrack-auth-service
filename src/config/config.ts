const config = {
    server: {
        url: process.env.URL || 'http://localhost:4000',
        port: process.env.PORT || 4000,
        host: process.env.HOST || '0.0.0.0'
    },
    secret: {
        saltRounds: 10,
        jwt_secret: process.env.JWT_SECRET || 'secret'
    }
};

export default config;
