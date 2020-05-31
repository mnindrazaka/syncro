import React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { View, ScrollView } from "react-native";

const PostPage = () => {
  return (
    <>
      <View style={{ marginVertical: 8 }}>
        <PostForm />
      </View>
      <PostList />
    </>
  );
};

export default PostPage;
