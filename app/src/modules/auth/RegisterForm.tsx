import React from "react";
import { View, Alert } from "react-native";
import { Card, Text, Input, Button, Spinner } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "./AuthPage";
import { UserRegisterRequest } from "../../stores/user/userAction";
import useUserState from "../../stores/user/useUserState";
import useUserAction from "../../stores/user/useUserAction";
import sosmedService from "../../utils/api/sosmedService";

const RegisterForm = (props: StackScreenProps<AuthStackParamList>) => {
  const [values, setValues] = React.useState<UserRegisterRequest>({
    name: "",
    username: "",
    password: ""
  });
  const userState = useUserState();
  const userAction = useUserAction();

  const isFormValid = React.useMemo(() => {
    return (
      values.name.length && values.username.length && values.password.length
    );
  }, [values]);

  const handleNavigateToLogin = React.useCallback(() => {
    props.navigation.navigate("login");
  }, [props.navigation]);

  const handleInputChange = React.useCallback((name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleRegister = React.useCallback(async () => {
    try {
      userAction.loginRequest();
      await sosmedService.register(values);
      userAction.registerSuccess();
      Alert.alert(
        "Register success",
        "Enter your username and password in login page"
      );
      props.navigation.navigate("login");
    } catch (error) {
      userAction.registerError(error.message);
      Alert.alert("Registration failed", error.message);
    }
  }, [userAction]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card
        header={props => (
          <View {...props}>
            <Text category="h6">Welcome to Sosmed</Text>
            <Text category="c1">Please fill form below to join sosmed</Text>
          </View>
        )}
        footer={props => (
          <View {...props}>
            <Button
              style={{ marginBottom: 16 }}
              accessoryLeft={userState.loading ? () => <Spinner /> : undefined}
              onPress={handleRegister}
              disabled={!isFormValid || userState.loading}
            >
              Register
            </Button>
            <Text appearance="hint" onPress={handleNavigateToLogin}>
              Already have account ? login now
            </Text>
          </View>
        )}
      >
        <Input
          label="Name"
          value={values.name}
          onChangeText={value => handleInputChange("name", value)}
        />
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

export default RegisterForm;
