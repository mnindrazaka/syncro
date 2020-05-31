import React from "react";
import { useStoreContext } from "../StoreContext";
import {
  loginRequestAction,
  loginSuccessAction,
  loginErrorAction,
  registerRequestAction,
  registerSuccessAction,
  registerErrorAction,
  logoutRequestAction,
  logoutSuccessAction,
  logoutErrorAction,
  UserLoginResponse,
  User
} from "./userActions";

const useUserAction = () => {
  const storeContext = useStoreContext();

  const loginRequest = React.useCallback(() => {
    storeContext.dispatch(loginRequestAction());
  }, [storeContext]);
  const loginSuccess = React.useCallback(
    (user: UserLoginResponse) => {
      storeContext.dispatch(loginSuccessAction(user));
    },
    [storeContext]
  );
  const loginError = React.useCallback(
    (message: string) => {
      storeContext.dispatch(loginErrorAction(message));
    },
    [storeContext]
  );

  const registerRequest = React.useCallback(() => {
    storeContext.dispatch(registerRequestAction());
  }, [storeContext]);
  const registerSuccess = React.useCallback(
    (user: User) => {
      storeContext.dispatch(registerSuccessAction(user));
    },
    [storeContext]
  );
  const registerError = React.useCallback(
    (message: string) => {
      storeContext.dispatch(registerErrorAction(message));
    },
    [storeContext]
  );

  const logoutRequest = React.useCallback(() => {
    storeContext.dispatch(logoutRequestAction());
  }, [storeContext]);
  const logoutSuccess = React.useCallback(() => {
    storeContext.dispatch(logoutSuccessAction());
  }, [storeContext]);
  const logoutError = React.useCallback(
    (message: string) => {
      storeContext.dispatch(logoutErrorAction(message));
    },
    [storeContext]
  );

  return {
    loginRequest,
    loginSuccess,
    loginError,
    registerRequest,
    registerSuccess,
    registerError,
    logoutRequest,
    logoutSuccess,
    logoutError
  };
};

export default useUserAction;
