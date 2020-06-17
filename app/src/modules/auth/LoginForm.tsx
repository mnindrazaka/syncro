import React from "react";
import { View, Alert } from "react-native";
import { Card, Text, Input, Button, Spinner } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "./AuthPage";
import useUserState from "../../stores/user/useUserState";
import useUserAction from "../../stores/user/useUserAction";
import sosmedService from "../../utils/api/sosmedService";
import {
  UserLoginRequest,
  UserLoginResponse
} from "../../stores/user/userAction";
import jwtDecode from "jwt-decode";
import tokenStorage from "../../stores/user/tokenStorage";

const LoginForm = (props: StackScreenProps<AuthStackParamList>) => {
  const [values, setValues] = React.useState<UserLoginRequest>({
    username: "",
    password: ""
  });
  const userState = useUserState();
  const userAction = useUserAction();

  const isFormValid = React.useMemo(() => {
    return values.username.length && values.password.length;
  }, [values]);

  const handleNavigateToRegister = React.useCallback(() => {
    props.navigation.navigate("register");
  }, [props.navigation]);

  const handleInputChange = React.useCallback((name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleLogin = React.useCallback(async () => {
    try {
      userAction.loginRequest();
      const { token } = await sosmedService.login(values);
      await tokenStorage.saveToken(token);
      const user = jwtDecode(token) as UserLoginResponse;
      userAction.loginSuccess(user);
    } catch (error) {
      userAction.loginError(error.message);
      Alert.alert("Login failed", error.message);
    }
  }, [userAction]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card
        header={props => (
          <View {...props}>
            <Text category="h6">Syncro</Text>
            <Text category="c1">
              Enter your username and password to continue
            </Text>
          </View>
        )}
        footer={props => (
          <View {...props}>
            <Button
              accessoryLeft={userState.loading ? () => <Spinner /> : undefined}
              style={{ marginBottom: 16 }}
              onPress={handleLogin}
              disabled={!isFormValid || userState.loading}
            >
              Login Now
            </Button>
            <Text appearance="hint" onPress={handleNavigateToRegister}>
              Dont have account ? register now
            </Text>
          </View>
        )}
      >
        <Input
          label="Username"
          value={values.username}
          onChangeText={value => handleInputChange("username", value)}
        />
        <Input
          label="Password"
          secureTextEntry
          value={values.password}
          onChangeText={value => handleInputChange("password", value)}
        />
      </Card>
    </View>
  );
};

export default LoginForm;
