export interface AuthCredentials {
    email: string;
    password: string;
}

export interface Token {
    token: string;
}

export interface JwtPayload {
    fingerprint: string;
}
