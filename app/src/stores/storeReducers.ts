import { combineReducers } from "./combineReducers";
import userStateAndReducers, { UserState } from "./user/userReducers";
import postStateAndReducers, { PostState } from "./post/postReducers";

export type StoreState = {
  user: UserState;
  post: PostState;
};

const [userReducers, userState] = userStateAndReducers;
const [postReducers, postState] = postStateAndReducers;

export default combineReducers<StoreState>({
  user: [userReducers, userState],
  post: [postReducers, postState]
});
