import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  IconButton,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import React from "react";

export const CreateEvent = () => {
  const { goBack, navigate } = useNavigation<any>();

  const goToPreview = () => {
    navigate("PreviewEvents");
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
        <Box mb={4}>
          <Text color={"#4F4F4F"} fontSize={"lg"}>
            Title
          </Text>
          <Input placeholder="Type the title of event" mt={2} />
        </Box>
        <Box mb={4}>
          <Text color={"#4F4F4F"} fontSize={"lg"}>
            First Option
          </Text>
          <Input placeholder="Type the first option" mt={2} />
        </Box>

        <Box mb={4}>
          <Text color={"#4F4F4F"} fontSize={"lg"}>
            Second Option
          </Text>
          <Input placeholder="Type the second option" mt={2} />
        </Box>
        <VStack space={2}>
          <Pressable>
            <Box
              p={2}
              alignItems={"center"}
              borderRadius={12}
              bgColor={{
                linearGradient: {
                  colors: ["#FF8E77", "#FF1949"],
                  start: [0, 0],
                  end: [0, 0.9],
                },
              }}
            >
              <Text color={"#FFF"} bold fontSize={"md"}>
                Create
              </Text>
            </Box>
          </Pressable>
          <Box
            alignItems={"center"}
            borderRadius={12}
            p={"1px"}
            bgColor={{
              linearGradient: {
                colors: ["#FF8E77", "#FF1949"],
                start: [0, 0],
                end: [0, 0.9],
              },
            }}
          >
            <Pressable
              onPress={goToPreview}
              alignItems={"center"}
              bg={"white"}
              width={"100%"}
              p={2}
              borderRadius={12}
            >
              <Text color={"#FF1949"} bold fontSize={"md"}>
                Preview
              </Text>
            </Pressable>
          </Box>
        </VStack>
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
