import { useNavigation } from "@react-navigation/native";
import {
  ArrowBackIcon,
  Box,
  Heading,
  IconButton,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { ArrowLeft, Plus } from "phosphor-react-native";
import React from "react";

export const CreateOptions = () => {
  const { goBack, navigate } = useNavigation<any>();

  const goToCreateEvent = () => {
    navigate("CreateEvent");
  };

  return (
    <>
      <Box
        safeAreaY
        px={6}
        alignItems={"flex-start"}
        width={"100%"}
        bgColor={{
          linearGradient: {
            colors: ["#FF8E77", "#FF1949"],
            start: [0, 0],
            end: [0, 1.1],
          },
        }}
      >
        <IconButton
          p={0}
          icon={<ArrowLeft size={24} color={"white"} weight={"bold"} />}
          onPress={goBack}
          _pressed={{
            opacity: 0.5,
            backgroundColor: "transparent",
          }}
        />
      </Box>
      <VStack width={"100%"} flex={1} bg={"white"} px={4} py={6}>
        <Pressable
          bg={"white"}
          p={4}
          shadow={2}
          borderRadius={32}
          flexDirection={"row"}
          alignItems={"center"}
          onPress={goToCreateEvent}
          _pressed={{
            opacity: 0.5,
          }}
        >
          <Box
            width={12}
            height={12}
            borderRadius={999}
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={{
              linearGradient: {
                colors: ["#FF8E77", "#FF1949"],
                start: [0, 0],
                end: [0, 1.1],
              },
            }}
          >
            <Plus color="#FFF" />
          </Box>
          <Text color={"#4F4F4F"} bold marginLeft={4} fontSize={"md"}>
            Add an event
          </Text>
        </Pressable>
      </VStack>
      <Box
        safeAreaY
        alignItems={"flex-start"}
        width={"100%"}
        bgColor={{
          linearGradient: {
            colors: ["#FF8E77", "#FF1949"],
            start: [0, 0],
            end: [0, 1.1],
          },
        }}
      ></Box>
    </>
  );
};
