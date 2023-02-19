import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CreateOptions } from ".";
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
      <Screen name="CreateOptions" component={CreateOptions} />
      <Screen name="CreateEvent" component={CreateEvent} />
      <Screen name="PreviewEvents" component={PreviewEvents} />
    </Navigator>
  );
};
