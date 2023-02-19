import React from "react";
import { VStack, Text, Center, Heading, Button } from "native-base";

import CoupleImg from "../../assets/test.svg";
import { useNavigation } from "@react-navigation/native";

export const SelectYourUser = () => {
  const { navigate } = useNavigation<any>();

  const goToCreateOptions = () => {
    navigate("CreateOptionsStack");
  };

  return (
    <VStack
      width={"100%"}
      flex={1}
      safeAreaY
      bgColor={{
        linearGradient: {
          colors: ["#FF8E77", "#FF1949"],
          start: [0, 0.4],
          end: [0, 1.1],
        },
      }}
    >
      <VStack alignItems={"center"}>
        <Center>
          <CoupleImg width={400} height={400} />
        </Center>
        <Heading color={"white"}>Make A Choice</Heading>
      </VStack>

      <VStack space={4} alignItems={"center"} mt={8}>
        <Button
          bgColor={"rgba(255,255,255,.4)"}
          borderRadius={32}
          width={"2xs"}
          borderColor={"white"}
          borderWidth={1}
          _text={{
            color: "white",
            fontSize: "md",
          }}
          onPress={goToCreateOptions}
          _pressed={{
            opacity: 0.5,
          }}
        >
          Create options
        </Button>
        <Button bgColor={"white"} borderRadius={32} width={"2xs"}>
          <Text bold color={"#FF1949"} fontSize={"md"}>
            Start!
          </Text>
        </Button>
      </VStack>
    </VStack>
  );
};
