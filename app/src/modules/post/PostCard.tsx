import React from "react";
import { View } from "react-native";
import { Post } from "../../stores/post/postActions";
import { Text } from "@ui-kitten/components";

const PostCard = (props: { post: Post }) => {
  return (
    <View style={{ padding: 8, backgroundColor: "#fff" }}>
      <Text>{props.post.content}</Text>
    </View>
  );
};

export default PostCard;
