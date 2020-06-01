import React from "react";
import { Post, PostAction } from "./postAction";
import { Action } from "../StoreContext";
import { combineReducers } from "../combineReducers";

export type PostState = {
  items: Post[];
  selected?: Post;
  loading: boolean;
  error?: string;
};

export const postInitialState: PostState = {
  items: [],
  selected: undefined,
  loading: false,
  error: undefined
};

const itemsReducer: React.Reducer<PostState["items"], Action> = (
  prevState,
  action
) => {
  switch (action.type) {
    case PostAction.GetSuccess:
      return [...action.payload];
    case PostAction.CreateSuccess:
      return [...prevState, action.payload];
    case PostAction.EditSuccess:
      return prevState.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case PostAction.DeleteSuccess:
      return prevState.filter(post => post._id !== action.payload._id);
    default:
      return prevState;
  }
};

const selectedReducer: React.Reducer<PostState["selected"], Action> = (
  prevState,
  action
) => {
  switch (action.type) {
    case PostAction.Select:
      return action.payload;
    case PostAction.ClearSelected:
      return undefined;
    default:
      return prevState;
  }
};

const loadingReducer: React.Reducer<PostState["loading"], Action> = (
  prevState,
  action
) => {
  switch (action.type) {
    case PostAction.GetRequest:
    case PostAction.CreateRequest:
    case PostAction.EditRequest:
    case PostAction.DeleteRequest:
      return true;
    case PostAction.GetSuccess:
    case PostAction.GetError:
    case PostAction.CreateSuccess:
    case PostAction.CreateError:
    case PostAction.EditSuccess:
    case PostAction.EditError:
    case PostAction.DeleteSuccess:
    case PostAction.DeleteError:
      return false;
    default:
      return prevState;
  }
};

const errorReducer: React.Reducer<PostState["error"], Action> = (
  prevState,
  action
) => {
  switch (action.type) {
    case PostAction.GetError:
    case PostAction.CreateError:
    case PostAction.EditError:
    case PostAction.DeleteError:
      return action.payload;
    case PostAction.GetSuccess:
    case PostAction.CreateSuccess:
    case PostAction.EditSuccess:
    case PostAction.DeleteSuccess:
      return undefined;
    default:
      return prevState;
  }
};

export const postReducer = combineReducers<PostState>({
  items: itemsReducer,
  selected: selectedReducer,
  loading: loadingReducer,
  error: errorReducer
});
