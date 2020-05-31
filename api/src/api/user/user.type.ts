export interface User {
  name: string;
  username: string;
  password: string;
}

export interface UserRegisterRequest {
  name: string;
  username: string;
  password: string;
}

export interface UserLoginRequest {
  username: string;
  password: string;
}
