import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectYourUser } from "../screens/SelectYourUser";
import { CreateOptions } from "../screens/CreateOptions";
import { CreateOptionsNavigator } from "../screens/CreateOptions/navigator";

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
    </Navigator>
  );
};
