import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
};
const Stack = createStackNavigator<AuthStackParamList>();

const AuthPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginForm}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="register"
        component={RegisterForm}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default AuthPage;
