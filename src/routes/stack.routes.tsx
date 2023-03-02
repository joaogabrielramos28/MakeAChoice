import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectYourUser } from "../screens/SelectYourUser";
import { CreateOptionsNavigator } from "../screens/CreateOptions/navigator";
import { Start } from "../screens/Start";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createStackNavigator();

export enum StackRoutesEnum {
  SPLASH = "Splash",
  SELECT_YOUR_USER = "SelectYourUser",
  CREATE_OPTIONS_STACK = "CreateOptionsStack",
  START = "Start",
  CREATE_OPTIONS = "CreateOptions",
  CREATE_EVENT = "CreateEvent",
  PREVIEW_EVENTS = "PreviewEvents",
}

export const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={StackRoutesEnum.SPLASH} component={Splash} />
      <Screen
        name={StackRoutesEnum.SELECT_YOUR_USER}
        component={SelectYourUser}
      />
      <Screen
        name={StackRoutesEnum.CREATE_OPTIONS_STACK}
        component={CreateOptionsNavigator}
      />
      <Screen name={StackRoutesEnum.START} component={Start} />
    </Navigator>
  );
};
