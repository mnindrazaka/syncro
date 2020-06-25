import React from "react";
import usePostState from "../../../stores/post/usePostState";
import usePostAction from "../../../stores/post/usePostAction";
import syncroService from "../../../utils/api/syncroService";
import { Alert, View, ScrollView, RefreshControl } from "react-native";
import PostCard from "./PostCard";

const PostList = (props: { username?: string }) => {
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

  const posts = React.useMemo(() => {
    return postState.items
      .filter(post =>
        props.username ? post.user.username === props.username : true
      )
      .reverse();
  }, [postState, props.username]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={postState.loading}
          onRefresh={handleGetPost}
        />
      }
    >
      {posts.map(post => (
        <View style={{ marginBottom: 8 }} key={post._id}>
          <PostCard post={post} />
        </View>
      ))}
    </ScrollView>
  );
};

export default PostList;
