import React from "react";
import { UserLoginResponse, UserAction } from "./userActions";
import { Action } from "../StoreContext";
import { combineReducers } from "../combineReducers";

export type UserState = {
  selected?: UserLoginResponse;
  loading: boolean;
  error?: string;
};

export const userInitialState: UserState = {
  selected: undefined,
  loading: false,
  error: undefined
};

const selectedReducer: React.Reducer<UserState["selected"], Action> = (
  prevState,
  action
) => {
  switch (action.type) {
    case UserAction.LoginSuccess:
      return action.payload;
    case UserAction.LogoutSuccess:
      return undefined;
    default:
      return prevState;
  }
};

const loadingReducer: React.Reducer<UserState["loading"], Action> = (
  prevState,
  action
) => {
  switch (action.type) {
    case UserAction.LoginRequest:
    case UserAction.RegisterRequest:
    case UserAction.LogoutRequest:
      return true;
    case UserAction.LoginSuccess:
    case UserAction.LoginError:
    case UserAction.RegisterSuccess:
    case UserAction.RegisterError:
    case UserAction.LogoutSuccess:
    case UserAction.LogoutError:
      return false;
    default:
      return prevState;
  }
};

const errorReducer: React.Reducer<UserState["error"], Action> = (
  prevState,
  action
) => {
  switch (action.type) {
    case UserAction.LoginError:
    case UserAction.RegisterError:
    case UserAction.LogoutError:
      return action.payload;
    case UserAction.LoginSuccess:
    case UserAction.RegisterSuccess:
    case UserAction.LogoutSuccess:
      return undefined;
    default:
      return prevState;
  }
};

export const userReducer = combineReducers<UserState>({
  selected: selectedReducer,
  loading: loadingReducer,
  error: errorReducer
});
