import React from "react";
import LoggedinPage from "./loggedIn/LoggedinPage";
import AuthPage from "./auth/AuthPage";
import useUserState from "../stores/user/useUserState";

const Main = () => {
  const userState = useUserState();
  return userState.selected ? <LoggedinPage /> : <AuthPage />;
};

export default Main;
