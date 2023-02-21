import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectYourUser } from "../screens/SelectYourUser";
import { CreateOptions } from "../screens/CreateOptions";
import { CreateOptionsNavigator } from "../screens/CreateOptions/navigator";
import { Start } from "../screens/Start";

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="SelectYourUser"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SelectYourUser" component={SelectYourUser} />
      <Screen name="CreateOptionsStack" component={CreateOptionsNavigator} />
      <Screen name="Start" component={Start} />
    </Navigator>
  );
};
