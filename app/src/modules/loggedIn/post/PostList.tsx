import React from "react";
import usePostState from "../../../stores/post/usePostState";
import usePostAction from "../../../stores/post/usePostAction";
import sosmedService from "../../../utils/api/sosmedService";
import { Alert, View, ScrollView } from "react-native";
import PostCard from "./PostCard";
import { Spinner } from "@ui-kitten/components";

const PostList = () => {
  const postState = usePostState();
  const postAction = usePostAction();

  React.useEffect(() => {
    (async () => {
      try {
        postAction.getRequest();
        const posts = await sosmedService.getAllPosts();
        postAction.getSuccess(posts);
      } catch (err) {
        postAction.getError(err.message);
        Alert.alert("Unable to fetch post", err.message);
      }
    })();
  }, []);

  return (
    <ScrollView>
      {postState.loading ? (
        <View style={{ alignItems: "center" }}>
          <Spinner />
        </View>
      ) : (
        postState.items.map(item => (
          <View style={{ marginBottom: 8 }} key={item._id}>
            <PostCard post={item} />
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default PostList;
