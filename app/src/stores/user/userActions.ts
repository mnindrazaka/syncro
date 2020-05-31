import { action } from "typesafe-actions";

export enum UserAction {
  LoginRequest = "@@USER/LOGIN_REQUEST",
  LoginSuccess = "@@USER/LOGIN_SUCCESS",
  LoginError = "@@USER/LOGIN_ERROR",

  RegisterRequest = "@@USER/REGISTER_REQUEST",
  RegisterSuccess = "@@USER/REGISTER_SUCCESS",
  RegisterError = "@@USER/REGISTER_ERROR",

  LogoutRequest = "@@USER/LOGOUT_REQUEST",
  LogoutSuccess = "@@USER/LOGOUT_SUCCESS",
  LogoutError = "@@USER/LOGOUT_ERROR"
}

export type User = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  username: string;
  password: string;
};

export type UserLoginResponse = {
  name: string;
  username: string;
};

export type UserLoginRequest = {
  username: string;
  password: string;
};

export type UserRegisterRequest = {
  name: string;
  username: string;
  password: string;
};

export const loginRequestAction = () => {
  return action(UserAction.LoginRequest);
};

export const loginSuccessAction = (user: UserLoginResponse) => {
  return action(UserAction.LoginSuccess, user);
};

export const loginErrorAction = (message: string) => {
  return action(UserAction.LoginError, message);
};

export const registerRequestAction = () => {
  return action(UserAction.RegisterRequest);
};

export const registerSuccessAction = (user: User) => {
  return action(UserAction.RegisterSuccess, user);
};

export const registerErrorAction = (message: string) => {
  return action(UserAction.RegisterError, message);
};

export const logoutRequestAction = () => {
  return action(UserAction.LogoutRequest);
};

export const logoutSuccessAction = () => {
  return action(UserAction.LogoutSuccess);
};

export const logoutErrorAction = (message: string) => {
  return action(UserAction.LogoutError, message);
};
