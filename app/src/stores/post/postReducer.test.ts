import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { postReducer, postInitialState } from "./postReducer";
import {
  getRequestAction,
  createRequestAction,
  getSuccessAction,
  Post,
  getErrorAction,
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
} from "./postAction";

const post: Post = {
  _id: "1",
  createdAt: "2018-09-28T10:55:51.603Z",
  updatedAt: "2018-09-28T10:55:51.603Z",
  content: "hello world",
  user: {
    _id: "1",
    createdAt: "2018-09-28T10:55:51.603Z",
    updatedAt: "2018-09-28T10:55:51.603Z",
    name: "m. nindra zaka",
    username: "mnindrazaka",
    password: "yf7a8tgeagea"
  }
};

describe("postReducer", () => {
  it("can handle get request", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, postInitialState)
    );
    act(() => {
      result.current[1](getRequestAction());
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: true,
      error: undefined
    });
  });

  it("can handle get success", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, {
        ...postInitialState,
        items: [post, post],
        loading: true,
        error: "failed"
      })
    );
    act(() => {
      result.current[1](getSuccessAction([post]));
    });
    expect(result.current[0]).toStrictEqual({
      items: [post],
      selected: undefined,
      loading: false,
      error: undefined
    });
  });

  it("can handle get error", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, { ...postInitialState, loading: true })
    );
    act(() => {
      result.current[1](getErrorAction("failed to get post"));
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: false,
      error: "failed to get post"
    });
  });

  it("can handle create request", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, postInitialState)
    );
    act(() => {
      result.current[1](createRequestAction());
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: true,
      error: undefined
    });
  });

  it("can handle create success", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, {
        ...postInitialState,
        loading: true,
        error: "failed"
      })
    );
    act(() => {
      result.current[1](createSuccessAction(post));
    });
    expect(result.current[0]).toStrictEqual({
      items: [post],
      selected: undefined,
      loading: false,
      error: undefined
    });
  });

  it("can handle create error", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, { ...postInitialState, loading: true })
    );
    act(() => {
      result.current[1](createErrorAction("failed to create post"));
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: false,
      error: "failed to create post"
    });
  });

  it("can handle edit request", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, postInitialState)
    );
    act(() => {
      result.current[1](editRequestAction());
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: true,
      error: undefined
    });
  });

  it("can handle edit success", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, {
        ...postInitialState,
        items: [post],
        loading: true,
        error: "failed"
      })
    );
    act(() => {
      result.current[1](
        editSuccessAction({ ...post, content: "hello world 2" })
      );
    });
    expect(result.current[0]).toStrictEqual({
      items: [{ ...post, content: "hello world 2" }],
      selected: undefined,
      loading: false,
      error: undefined
    });
  });

  it("can handle edit error", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, { ...postInitialState, loading: true })
    );
    act(() => {
      result.current[1](editErrorAction("failed to edit post"));
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: false,
      error: "failed to edit post"
    });
  });

  it("can handle delete request", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, postInitialState)
    );
    act(() => {
      result.current[1](deleteRequestAction());
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: true,
      error: undefined
    });
  });

  it("can handle delete success", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, {
        ...postInitialState,
        items: [post],
        loading: true,
        error: "failed"
      })
    );
    act(() => {
      result.current[1](deleteSuccessAction(post));
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: false,
      error: undefined
    });
  });

  it("can handle delete error", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, { ...postInitialState, loading: true })
    );
    act(() => {
      result.current[1](deleteErrorAction("failed to delete post"));
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: false,
      error: "failed to delete post"
    });
  });

  it("can handle select", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, postInitialState)
    );
    act(() => {
      result.current[1](selectAction(post));
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: post,
      loading: false,
      error: undefined
    });
  });

  it("can handle clear selected", () => {
    const { result } = renderHook(() =>
      React.useReducer(postReducer, { ...postInitialState, selected: post })
    );
    act(() => {
      result.current[1](clearSelectedAction());
    });
    expect(result.current[0]).toStrictEqual({
      items: [],
      selected: undefined,
      loading: false,
      error: undefined
    });
  });
});
