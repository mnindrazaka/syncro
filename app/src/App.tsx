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
import { Icon } from "@ant-design/react-native";
import PostForm from "./modules/post/PostForm";

const App = () => {
  return (
    <>
      <PostForm />
      <Icon name="share-alt" size="md" color="red" />
    </>
  );
};

export default App;
