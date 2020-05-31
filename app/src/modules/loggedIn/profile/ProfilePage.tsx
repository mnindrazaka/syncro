import React from "react";
import { View, Alert } from "react-native";
import { Button, Icon, Text, Card } from "@ui-kitten/components";
import useUserState from "../../../stores/user/useUserState";
import useUserAction from "../../../stores/user/useUserAction";
import tokenStorage from "../../../stores/user/tokenStorage";

const ProfilePage = () => {
  const userState = useUserState();
  const userAction = useUserAction();

  const handleLogout = React.useCallback(async () => {
    try {
      userAction.logoutRequest();
      await tokenStorage.removeToken();
      userAction.logoutSuccess();
    } catch (error) {
      userAction.logoutError(error.message);
      Alert.alert("Logout Failed", error.message);
    }
  }, [userAction]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card
        footer={props => (
          <View {...props}>
            <Button status="danger" onPress={handleLogout} appearance="outline">
              Logout
            </Button>
          </View>
        )}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon
            name="person-outline"
            fill="#000"
            style={{ height: 50, width: 50 }}
          />
          <View style={{ marginVertical: 8 }}>
            <Text category="h6">{userState.selected?.name}</Text>
          </View>
          <Text appearance="hint">{userState.selected?.username}</Text>
        </View>
      </Card>
    </View>
  );
};

export default ProfilePage;
