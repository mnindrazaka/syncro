import React from "react";
import { View } from "react-native";
import { Icon, Text, Card } from "@ui-kitten/components";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../LoggedinPage";
import PostList from "../post/PostList";

const ProfilePage = () => {
  const route = useRoute<RouteProp<RootStackParamList, "profile">>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
      }}
    >
      <Card>
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
            <Text category="h6">{route.params.user?.name}</Text>
          </View>
          <Text appearance="hint">{route.params.user?.username}</Text>
        </View>
      </Card>
      <PostList username={route.params.user?.username} />
    </View>
  );
};

export default ProfilePage;
