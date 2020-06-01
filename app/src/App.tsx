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
import { CODE_SEND_ID } from "react-native-dotenv";
import { useCodeSend } from "code-send-plugin";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StoreProvider } from "./stores/StoreContext";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./modules/Main";

const App = () => {
  useCodeSend(CODE_SEND_ID || "", true);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StoreProvider>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </StoreProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
