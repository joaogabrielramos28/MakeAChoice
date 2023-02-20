import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { theme } from "./src/theme";
import { StackRoutes } from "./src/routes/stack.routes";
import { NavigationContainer } from "@react-navigation/native";
import { Text, StatusBar } from "react-native";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return <Text>carregando...</Text>;

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <StatusBar barStyle="light-content" hidden />
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
