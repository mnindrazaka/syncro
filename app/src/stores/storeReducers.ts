import { combineReducers } from "./combineReducers";
import { UserState, userReducer, userInitialState } from "./user/userReducers";
import { PostState, postReducer, postInitialState } from "./post/postReducers";

export type StoreState = {
  user: UserState;
  post: PostState;
};

export const storeInitialState: StoreState = {
  user: userInitialState,
  post: postInitialState
};

export const storeReducer = combineReducers<StoreState>({
  user: userReducer,
  post: postReducer
});
