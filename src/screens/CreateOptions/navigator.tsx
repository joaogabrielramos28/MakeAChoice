import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CreateOptions } from ".";
import { StackRoutesEnum } from "../../routes/stack.routes";
import { CreateEvent } from "./screens/CreateEvent";
import { PreviewEvents } from "./screens/PreviewEvents";

const { Navigator, Screen } = createStackNavigator();
export const CreateOptionsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={StackRoutesEnum.CREATE_OPTIONS} component={CreateOptions} />
      <Screen name={StackRoutesEnum.CREATE_EVENT} component={CreateEvent} />
      <Screen name={StackRoutesEnum.PREVIEW_EVENTS} component={PreviewEvents} />
    </Navigator>
  );
};
