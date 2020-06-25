/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  Text,
  TabBar,
  Tab,
  Icon,
  Button,
  Spinner
} from "@ui-kitten/components";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps
} from "@react-navigation/material-top-tabs";
import { View, Alert } from "react-native";
import PostPage from "./post/PostPage";
import ProfilePage from "./profile/ProfilePage";
import { User } from "../../stores/user/userAction";
import useUserState from "../../stores/user/useUserState";
import useUserAction from "../../stores/user/useUserAction";
import tokenStorage from "../../stores/user/tokenStorage";

export type RootStackParamList = {
  home: undefined;
  profile: { user: User };
};

const { Navigator, Screen } = createMaterialTopTabNavigator<
  RootStackParamList
>();

const TopTabBar = (props: MaterialTopTabBarProps) => {
  const userState = useUserState();
  return (
    <TabBar
      selectedIndex={props.state.index}
      onSelect={index =>
        props.navigation.navigate(props.state.routeNames[index], {
          user: userState.selected
        })
      }
    >
      <Tab icon={props => <Icon name="home-outline" {...props} />} />
      <Tab icon={props => <Icon name="person-outline" {...props} />} />
    </TabBar>
  );
};

const LoggedinPage = () => {
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
    <>
      <View
        style={{
          padding: 16,
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="message-circle-outline"
            fill="#000"
            style={{ width: 25, height: 25 }}
          />
          <Text category="h5" style={{ marginLeft: 8 }}>
            Syncro
          </Text>
        </View>
        <Button
          status="danger"
          onPress={handleLogout}
          appearance="ghost"
          accessoryLeft={userState.loading ? () => <Spinner /> : undefined}
        >
          Logout
        </Button>
      </View>
      <Navigator tabBar={props => <TopTabBar {...props} />}>
        <Screen name="home" component={PostPage} />
        <Screen name="profile" component={ProfilePage} />
      </Navigator>
    </>
  );
};

export default LoggedinPage;
