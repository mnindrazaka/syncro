import React from "react";
import storeStateAndReducers, { StoreState } from "./storeReducers";
import { userInitialState } from "./user/userReducers";
import { postInitialState } from "./post/postReducers";
import { UserLoginResponse } from "./user/userActions";
import tokenStorage from "./user/tokenStorage";

export type Action<T = any> = {
  type: string;
  payload?: T;
};

type StoreContextValue = {
  state: StoreState;
  dispatch: React.Dispatch<Action>;
};

const StoreContext = React.createContext<StoreContextValue>({
  state: {
    user: userInitialState,
    post: postInitialState
  },
  dispatch: () => {}
});

export const useStore = (): {
  state: StoreState;
  dispatch: React.Dispatch<Action>;
} => {
  const [storeReducers, storeState] = storeStateAndReducers;
  const [state, dispatch] = React.useReducer(storeReducers, storeState);
  const [user, setUser] = React.useState<UserLoginResponse>();

  React.useEffect(() => {
    (async () => {
      setUser(await tokenStorage.getUser());
    })();
  }, []);

  return {
    state: { ...state, user: { ...state.user, selected: user } },
    dispatch
  };
};

export const StoreProvider = (props: { children: React.ReactNode }) => {
  const store = useStore();
  return (
    <StoreContext.Provider value={{ ...store }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => React.useContext(StoreContext);
