import React from "react";
import usePostState from "../../../stores/post/usePostState";
import usePostAction from "../../../stores/post/usePostAction";
import syncroService from "../../../utils/api/syncroService";
import { Alert, View, ScrollView, RefreshControl } from "react-native";
import PostCard from "./PostCard";

const PostList = () => {
  const postState = usePostState();
  const postAction = usePostAction();

  const handleGetPost = React.useCallback(async () => {
    try {
      postAction.getRequest();
      const posts = await syncroService.getAllPosts();
      postAction.getSuccess(posts);
    } catch (err) {
      postAction.getError(err.message);
      Alert.alert("Unable to fetch post", err.message);
    }
  }, [postAction]);

  React.useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={postState.loading}
          onRefresh={handleGetPost}
        />
      }
    >
      {postState.items.reverse().map(item => (
        <View style={{ marginBottom: 8 }} key={item._id}>
          <PostCard post={item} />
        </View>
      ))}
    </ScrollView>
  );
};

export default PostList;
