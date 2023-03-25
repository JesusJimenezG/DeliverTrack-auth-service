// import jwt from 'jsonwebtoken';
// import config from '../config/config';
// import { JwtPayload, Token } from '../interfaces/auth.interface';

// const SECRET = config.secret.jwt_secret;

// const generateToken = (hash: string): Token => {
//     const token = jwt.sign({ fingerprint: hash }, SECRET);
//     return { token };
// };

// const verifyToken = (token: string): JwtPayload => {
//     const decoded = jwt.verify(token, SECRET) as JwtPayload;
//     return decoded;
// };

// export { generateToken, verifyToken };
