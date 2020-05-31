import React from "react";
import { View } from "react-native";
import { Card, Text, Input, Button } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "./AuthPage";

const LoginForm = (props: StackScreenProps<AuthStackParamList>) => {
  const handleNavigateToRegister = React.useCallback(() => {
    props.navigation.navigate("register");
  }, [props.navigation]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card
        header={props => (
          <View {...props}>
            <Text category="h6">Sosmed</Text>
            <Text category="c1">
              Enter your username and password to continue
            </Text>
          </View>
        )}
        footer={props => (
          <View {...props}>
            <Button style={{ marginBottom: 16 }}>Login</Button>
            <Text appearance="hint" onPress={handleNavigateToRegister}>
              Dont have account ? register now
            </Text>
          </View>
        )}
      >
        <Input label="Username" />
        <Input label="Password" secureTextEntry />
      </Card>
    </View>
  );
};

export default LoginForm;
