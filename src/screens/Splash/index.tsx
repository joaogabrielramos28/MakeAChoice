import React, { useEffect } from "react";

import { runOnJS } from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";
import { VStack } from "native-base";
import AnimatedLottieView from "lottie-react-native";

import Animation from "../../assets/animation.json";
import { StackRoutesEnum } from "../../routes/stack.routes";

export function Splash() {
  const { navigate } = useNavigation();

  function StartApp() {
    navigate(StackRoutesEnum.SELECT_YOUR_USER);
  }

  useEffect(() => {
    setTimeout(() => {
      runOnJS(StartApp)();
    }, 4000);
  }, []);

  return (
    <VStack
      flex={1}
      safeAreaY
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={{
        linearGradient: {
          colors: ["#FF8E77", "#FF1949"],
          start: [0, 0.4],
          end: [0, 1.1],
        },
      }}
    >
      <AnimatedLottieView autoPlay loop source={Animation} />
    </VStack>
  );
}
