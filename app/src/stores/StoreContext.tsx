import React from "react";
import storeStateAndReducers, { StoreState } from "./storeReducers";
import { postInitialState } from "./post/postReducers";

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
    post: postInitialState
  },
  dispatch: () => {}
});

export const useStore = () => {
  const [storeReducers, storeState] = storeStateAndReducers;
  const [state, dispatch] = React.useReducer(storeReducers, storeState);
  return { state, dispatch };
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