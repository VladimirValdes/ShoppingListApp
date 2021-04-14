export interface UserResponse {
    user:  User;
    token: string;
}

export interface User {
    rol:    string;
    status: boolean;
    google: boolean;
    name:   string;
    email:  string;
    uid:    string;
}
