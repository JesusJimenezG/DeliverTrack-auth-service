export interface User {
    user_id?: number;
    email: string;
    name: string;
    password?: string;
    created_at: Date;
    updated_at: Date;
}
