import React from "react";
import { StoreState, storeReducer, storeInitialState } from "./storeReducers";
import tokenStorage from "./user/tokenStorage";
import { loginSuccessAction, UserLoginResponse } from "./user/userActions";

export type Action<T = any> = {
  type: string;
  payload?: T;
};

type StoreContextValue = {
  state: StoreState;
  dispatch: React.Dispatch<Action>;
};

const StoreContext = React.createContext<StoreContextValue>({
  state: storeInitialState,
  dispatch: () => {}
});

export const useStoreReducer = (): {
  state: StoreState;
  dispatch: React.Dispatch<Action>;
} => {
  const [state, dispatch] = React.useReducer(storeReducer, storeInitialState);
  React.useEffect(() => {
    (async () => {
      const user = (await tokenStorage.getUser()) as UserLoginResponse;
      dispatch(loginSuccessAction(user));
    })();
  }, []);
  return { state, dispatch };
};

export const StoreProvider = (props: { children: React.ReactNode }) => {
  const storeReducer = useStoreReducer();
  return (
    <StoreContext.Provider value={storeReducer}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => React.useContext(StoreContext);
