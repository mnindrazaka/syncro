import React from "react";
import { useStoreContext } from "../StoreContext";
import {
  Post,
  getRequestAction,
  getSuccessAction,
  getErrorAction,
  createRequestAction,
  createSuccessAction,
  createErrorAction,
  editRequestAction,
  editSuccessAction,
  editErrorAction,
  deleteRequestAction,
  deleteSuccessAction,
  deleteErrorAction,
  selectAction,
  clearSelectedAction
} from "./postActions";

const usePostAction = () => {
  const storeContext = useStoreContext();

  const getRequest = React.useCallback(() => {
    storeContext.dispatch(getRequestAction());
  }, [storeContext]);
  const getSuccess = React.useCallback(
    (posts: Post[]) => {
      storeContext.dispatch(getSuccessAction(posts));
    },
    [storeContext]
  );
  const getError = React.useCallback(
    (message: string) => {
      storeContext.dispatch(getErrorAction(message));
    },
    [storeContext]
  );

  const createRequest = React.useCallback(() => {
    storeContext.dispatch(createRequestAction());
  }, [storeContext]);
  const createSuccess = React.useCallback(
    (post: Post) => {
      storeContext.dispatch(createSuccessAction(post));
    },
    [storeContext]
  );
  const createError = React.useCallback(
    (message: string) => {
      storeContext.dispatch(createErrorAction(message));
    },
    [storeContext]
  );

  const editRequest = React.useCallback(() => {
    storeContext.dispatch(editRequestAction());
  }, [storeContext]);
  const editSuccess = React.useCallback(
    (post: Post) => {
      storeContext.dispatch(editSuccessAction(post));
    },
    [storeContext]
  );
  const editError = React.useCallback(
    (message: string) => {
      storeContext.dispatch(editErrorAction(message));
    },
    [storeContext]
  );

  const deleteRequest = React.useCallback(() => {
    storeContext.dispatch(deleteRequestAction());
  }, [storeContext]);
  const deleteSuccess = React.useCallback(
    (post: Post) => {
      storeContext.dispatch(deleteSuccessAction(post));
    },
    [storeContext]
  );
  const deleteError = React.useCallback(
    (message: string) => {
      storeContext.dispatch(deleteErrorAction(message));
    },
    [storeContext]
  );

  const select = React.useCallback(
    (post: Post) => {
      storeContext.dispatch(selectAction(post));
    },
    [storeContext]
  );
  const clearSelected = React.useCallback(
    (post: Post) => {
      storeContext.dispatch(clearSelectedAction());
    },
    [storeContext]
  );

  return {
    getRequest,
    getSuccess,
    getError,
    createRequest,
    createSuccess,
    createError,
    editRequest,
    editSuccess,
    editError,
    deleteRequest,
    deleteSuccess,
    deleteError,
    select,
    clearSelected
  };
};

export default usePostAction;
