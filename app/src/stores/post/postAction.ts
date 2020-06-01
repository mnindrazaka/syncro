import { action } from "typesafe-actions";
import { User } from "../user/userAction";

export enum PostAction {
  GetRequest = "@@POST/GET_REQUEST",
  GetSuccess = "@@POST/GET_SUCCESS",
  GetError = "@@POST/GET_ERROR",

  CreateRequest = "@@POST/CREATE_REQUEST",
  CreateSuccess = "@@POST/CREATE_SUCCESS",
  CreateError = "@@POST/CREATE_ERROR",

  EditRequest = "@@POST/EDIT_REQUEST",
  EditSuccess = "@@POST/EDIT_SUCCESS",
  EditError = "@@POST/EDIT_ERROR",

  DeleteRequest = "@@POST/DELETE_REQUEST",
  DeleteSuccess = "@@POST/DELETE_SUCCESS",
  DeleteError = "@@POST/DELETE_ERROR",

  Select = "@@POST/SELECT",
  ClearSelected = "@@POST/ClEAR_SELECTED"
}

export type Post = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  user: User;
};

export type PostRequest = {
  content: string;
};

export const getRequestAction = () => {
  return action(PostAction.GetRequest);
};

export const getSuccessAction = (posts: Post[]) => {
  return action(PostAction.GetSuccess, posts);
};

export const getErrorAction = (message: string) => {
  return action(PostAction.GetError, message);
};

export const createRequestAction = () => {
  return action(PostAction.CreateRequest);
};

export const createSuccessAction = (post: Post) => {
  return action(PostAction.CreateSuccess, post);
};

export const createErrorAction = (message: string) => {
  return action(PostAction.CreateError, message);
};

export const editRequestAction = () => {
  return action(PostAction.EditRequest);
};

export const editSuccessAction = (post: Post) => {
  return action(PostAction.EditSuccess, post);
};

export const editErrorAction = (message: string) => {
  return action(PostAction.EditError, message);
};

export const deleteRequestAction = () => {
  return action(PostAction.DeleteRequest);
};

export const deleteSuccessAction = (post: Post) => {
  return action(PostAction.DeleteSuccess, post);
};

export const deleteErrorAction = (message: string) => {
  return action(PostAction.DeleteError, message);
};

export const selectAction = (post: Post) => {
  return action(PostAction.Select, post);
};

export const clearSelectedAction = () => {
  return action(PostAction.ClearSelected);
};
