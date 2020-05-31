import React from "react";
import { View } from "react-native";
import { Card, Text, Input, Button } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "./AuthPage";

const RegisterForm = (props: StackScreenProps<AuthStackParamList>) => {
  const handleNavigateToLogin = React.useCallback(() => {
    props.navigation.navigate("login");
  }, [props.navigation]);
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
            <Button style={{ marginBottom: 16 }}>Register</Button>
            <Text appearance="hint" onPress={handleNavigateToLogin}>
              Already have account ? login now
            </Text>
          </View>
        )}
      >
        <Input label="Name" />
        <Input label="Username" />
        <Input label="Password" secureTextEntry />
        <Input label="Password Confirmation" secureTextEntry />
      </Card>
    </View>
  );
};

export default RegisterForm;
