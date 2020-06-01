import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { userReducer, userInitialState } from "./userReducer";
import {
  User,
  loginRequestAction,
  loginSuccessAction,
  loginErrorAction,
  registerRequestAction,
  registerSuccessAction,
  registerErrorAction,
  logoutRequestAction,
  logoutSuccessAction,
  logoutErrorAction
} from "./userAction";

const user: User = {
  _id: "1",
  createdAt: "2018-09-28T10:55:51.603Z",
  updatedAt: "2018-09-28T10:55:51.603Z",
  name: "m. nindra zaka",
  username: "mnindrazaka",
  password: "yf7a8tgeagea"
};

describe("userReducer", () => {
  it("can handle login request", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, userInitialState)
    );
    act(() => {
      result.current[1](loginRequestAction());
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: true,
      error: undefined
    });
  });

  it("can handle login success", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, {
        ...userInitialState,
        loading: true,
        error: "failed"
      })
    );
    act(() => {
      result.current[1](loginSuccessAction(user));
    });
    expect(result.current[0]).toStrictEqual({
      selected: user,
      loading: false,
      error: undefined
    });
  });

  it("can handle login error", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, { ...userInitialState, loading: true })
    );
    act(() => {
      result.current[1](loginErrorAction("failed to login"));
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: false,
      error: "failed to login"
    });
  });

  it("can handle register request", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, userInitialState)
    );
    act(() => {
      result.current[1](registerRequestAction());
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: true,
      error: undefined
    });
  });

  it("can handle register success", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, {
        ...userInitialState,
        loading: true,
        error: "failed"
      })
    );
    act(() => {
      result.current[1](registerSuccessAction());
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: false,
      error: undefined
    });
  });

  it("can handle register error", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, { ...userInitialState, loading: true })
    );
    act(() => {
      result.current[1](registerErrorAction("failed to register"));
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: false,
      error: "failed to register"
    });
  });

  it("can handle logout request", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, userInitialState)
    );
    act(() => {
      result.current[1](logoutRequestAction());
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: true,
      error: undefined
    });
  });

  it("can handle logout success", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, {
        ...userInitialState,
        selected: user,
        loading: true,
        error: "failed"
      })
    );
    act(() => {
      result.current[1](logoutSuccessAction());
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: false,
      error: undefined
    });
  });

  it("can handle logout error", () => {
    const { result } = renderHook(() =>
      React.useReducer(userReducer, { ...userInitialState, loading: true })
    );
    act(() => {
      result.current[1](logoutErrorAction("failed to logout"));
    });
    expect(result.current[0]).toStrictEqual({
      selected: undefined,
      loading: false,
      error: "failed to logout"
    });
  });
});
