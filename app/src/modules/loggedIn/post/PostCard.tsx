import React from "react";
import { View } from "react-native";
import { Post } from "../../../stores/post/postActions";
import { Text, Icon } from "@ui-kitten/components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PostCard = (props: { post: Post }) => {
  const isSameYear = dayjs().isSame(props.post.createdAt, "year");
  const isSameDay = dayjs().isSame(props.post.createdAt, "day");

  return (
    <View style={{ padding: 16, backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", marginBottom: 16 }}>
        <Icon
          name="person-outline"
          fill="#000"
          style={{ height: 40, width: 40 }}
        />
        <View>
          <Text>{props.post.user.name}</Text>
          <Text category="c1" appearance="hint">
            {isSameYear
              ? isSameDay
                ? dayjs(props.post.createdAt).fromNow()
                : dayjs(props.post.createdAt).format("MMMM DD [at] hh:mm A")
              : dayjs(props.post.createdAt).format("MMMM DD, YYYY")}
          </Text>
        </View>
      </View>

      <Text>{props.post.content}</Text>
    </View>
  );
};

export default PostCard;
