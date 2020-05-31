import React from "react";
import LoggedinPage from "./loggedIn/LoggedinPage";
import AuthPage from "./auth/AuthPage";

const Main = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <LoggedinPage /> : <AuthPage />;
};

export default Main;
