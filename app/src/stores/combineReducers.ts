import React from "react";
import { Action } from "./StoreContext";

type State<T> = {
  [key in keyof T]: T[key];
};

type Reducers<T> = { [key in keyof T]: React.Reducer<T[key], Action> };

export const combineReducers = <T extends object>(reducers: Reducers<T>) => {
  return function combination(state: State<T>, action: Action) {
    const nextState: State<T> = {} as State<T>;
    Object.keys(reducers).forEach(key => {
      const reducerName = key as keyof typeof reducers;
      const reducer = reducers[reducerName];
      const previousStateForKey = state[reducerName];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[reducerName] = nextStateForKey;
    });
    return nextState;
  };
};
