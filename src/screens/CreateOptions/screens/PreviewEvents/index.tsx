import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Factory,
  IconButton,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";

type options = "first" | "second" | null;

export const PreviewEvents = () => {
  const [optionSelected, setOptionSelected] = useState<options>(null);
  const [finalResponse, setFinalResponse] = useState<options>(null);
  const { goBack } = useNavigation();

  const onFinalResponse = () => {
    setFinalResponse(optionSelected);
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
      <VStack
        width={"100%"}
        flex={1}
        bg={"white"}
        height={"300px"}
        px={4}
        py={6}
      >
        {finalResponse === null ? (
          <>
            <FlipCard
              style={(styles.face, styles.back, styles.flipCard)}
              useNativeDriver={true}
              flip={finalResponse === "first"}
              clickable={false}
              alignHeight={true}
              alignWidth={true}
            >
              <Pressable
                onPress={() => setOptionSelected("first")}
                borderColor={optionSelected === "first" ? "#FF8E77" : "white"}
                borderWidth={2}
                shadow={2}
                width={"100%"}
                bg={"white"}
                borderRadius={4}
                p={8}
                alignItems={"center"}
              >
                <Text color={"#4F4F4F"} fontSize={"md"}>
                  Clique para selecionar
                </Text>
              </Pressable>

              <Box
                shadow={2}
                width={"100%"}
                bg={"white"}
                borderRadius={4}
                p={8}
                alignItems={"center"}
              >
                <Text color={"#4F4F4F"} bold fontSize={"md"}>
                  Jantar fora
                </Text>
              </Box>
            </FlipCard>
            <FlipCard
              style={(styles.face, styles.back, styles.flipCard)}
              flip={finalResponse === "second"}
              clickable={false}
              alignHeight={true}
              alignWidth={true}
            >
              <Pressable
                onPress={() => setOptionSelected("second")}
                borderColor={optionSelected === "second" ? "#FF8E77" : "white"}
                borderWidth={2}
                shadow={2}
                width={"100%"}
                bg={"white"}
                borderRadius={4}
                p={8}
                alignItems={"center"}
              >
                <Text color={"#4F4F4F"} fontSize={"md"}>
                  Clique para selecionar
                </Text>
              </Pressable>

              {/* Back Side */}
              <Box
                shadow={2}
                width={"100%"}
                bg={"white"}
                borderRadius={4}
                p={8}
                alignItems={"center"}
              >
                <Text color={"#4F4F4F"} bold fontSize={"md"}>
                  Pedir Ifood
                </Text>
              </Box>
            </FlipCard>
          </>
        ) : (
          <>
            {finalResponse === "first" ? (
              <FlipCard
                style={(styles.face, styles.back, styles.flipCard)}
                useNativeDriver={true}
                flip={finalResponse === "first"}
                clickable={false}
                alignHeight={true}
                alignWidth={true}
              >
                <Pressable
                  onPress={() => setOptionSelected("first")}
                  borderColor={optionSelected === "first" ? "#FF8E77" : "white"}
                  borderWidth={2}
                  shadow={2}
                  width={"100%"}
                  bg={"white"}
                  borderRadius={4}
                  p={8}
                  alignItems={"center"}
                >
                  <Text color={"#4F4F4F"} fontSize={"md"}>
                    Clique para selecionar
                  </Text>
                </Pressable>

                <Box
                  shadow={2}
                  width={"100%"}
                  bg={"white"}
                  borderRadius={4}
                  p={8}
                  alignItems={"center"}
                >
                  <Text color={"#4F4F4F"} bold fontSize={"md"}>
                    Jantar fora
                  </Text>
                </Box>
              </FlipCard>
            ) : (
              <FlipCard
                style={(styles.face, styles.back, styles.flipCard)}
                flip={finalResponse === "second"}
                clickable={false}
                alignHeight={true}
                alignWidth={true}
              >
                <Pressable
                  onPress={() => setOptionSelected("second")}
                  borderColor={
                    optionSelected === "second" ? "#FF8E77" : "white"
                  }
                  borderWidth={2}
                  shadow={2}
                  width={"100%"}
                  bg={"white"}
                  borderRadius={4}
                  p={8}
                  alignItems={"center"}
                >
                  <Text color={"#4F4F4F"} fontSize={"md"}>
                    Clique para selecionar
                  </Text>
                </Pressable>

                {/* Back Side */}
                <Box
                  shadow={2}
                  width={"100%"}
                  bg={"white"}
                  borderRadius={4}
                  p={8}
                  alignItems={"center"}
                >
                  <Text color={"#4F4F4F"} bold fontSize={"md"}>
                    Pedir Ifood
                  </Text>
                </Box>
              </FlipCard>
            )}
          </>
        )}
        {finalResponse === null ? (
          <Pressable onPress={onFinalResponse}>
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
                Reveal
              </Text>
            </Box>
          </Pressable>
        ) : null}
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

const styles = StyleSheet.create({
  flipCard: {
    flex: 0.2,
  },

  face: {
    flex: 0.2,
  },

  back: {
    flex: 0.2,
  },
});