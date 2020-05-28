import { combineReducers } from "./combineReducers";
import postStateAndReducers, { PostState } from "./post/postReducers";

export type StoreState = {
  post: PostState;
};

const [postReducers, postState] = postStateAndReducers;

export default combineReducers<StoreState>({
  post: [postReducers, postState]
});
