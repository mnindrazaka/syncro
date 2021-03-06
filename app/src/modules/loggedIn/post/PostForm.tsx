import React from "react";
import { Button, Input, Icon, Spinner } from "@ui-kitten/components";
import { View, Alert } from "react-native";
import usePostState from "../../../stores/post/usePostState";
import usePostAction from "../../../stores/post/usePostAction";
import syncroService from "../../../utils/api/syncroService";

const PostForm = () => {
  const [content, setContent] = React.useState<string>("");
  const postState = usePostState();
  const postAction = usePostAction();

  const handleSubmit = React.useCallback(async () => {
    try {
      postAction.createRequest();
      const post = await syncroService.createPost({ content });
      postAction.createSuccess(post);
      setContent("");
    } catch (e) {
      postAction.createError(e.message);
      Alert.alert("Post creation failed", e.message);
    }
  }, [postAction]);

  return (
    <View style={{ padding: 8, backgroundColor: "#fff" }}>
      <Input
        value={content}
        onChangeText={setContent}
        placeholder="Whats in your mind ?"
        style={{ marginBottom: 8 }}
        multiline
      />
      <Button
        disabled={postState.loading || !content.length}
        onPress={handleSubmit}
        accessoryLeft={props =>
          postState.loading ? (
            <Spinner />
          ) : (
            <Icon name="paper-plane-outline" {...props} />
          )
        }
      >
        Send
      </Button>
    </View>
  );
};

export default PostForm;
