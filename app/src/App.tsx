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
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Text,
  TabBar,
  Tab,
  Icon
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps
} from "@react-navigation/material-top-tabs";
import PostForm from "./modules/post/PostForm";
import { View } from "react-native";
import { StoreProvider } from "./stores/StoreContext";

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

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StoreProvider>
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
          <NavigationContainer>
            <Navigator tabBar={props => <TopTabBar {...props} />}>
              <Screen name="home" component={PostForm} />
              <Screen name="profile" component={PostForm} />
            </Navigator>
          </NavigationContainer>
        </StoreProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;