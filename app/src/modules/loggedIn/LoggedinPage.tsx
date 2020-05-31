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
import { Text, TabBar, Tab, Icon } from "@ui-kitten/components";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps
} from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import PostPage from "./post/PostPage";
import ProfilePage from "./profile/ProfilePage";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = (props: MaterialTopTabBarProps) => (
  <TabBar
    selectedIndex={props.state.index}
    onSelect={index => props.navigation.navigate(props.state.routeNames[index])}
  >
    <Tab icon={props => <Icon name="home-outline" {...props} />} />
    <Tab icon={props => <Icon name="person-outline" {...props} />} />
  </TabBar>
);

const LoggedinPage = () => {
  return (
    <>
      <View
        style={{
          padding: 16,
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Icon
          name="message-circle-outline"
          fill="#000"
          style={{ width: 25, height: 25 }}
        />
        <Text category="h5" style={{ marginLeft: 8 }}>
          Sosmed
        </Text>
      </View>
      <Navigator tabBar={props => <TopTabBar {...props} />}>
        <Screen name="home" component={PostPage} />
        <Screen name="profile" component={ProfilePage} />
      </Navigator>
    </>
  );
};

export default LoggedinPage;
