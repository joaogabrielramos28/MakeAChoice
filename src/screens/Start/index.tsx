import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Box, Heading, Image, Pressable, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";
import { Layout } from "../../components/Layout";
import { StorageType } from "../../storage";
import { Event } from "../../storage/DTOs/Event";
import { Steps } from "./components/StepIndicator";

import { CarouselCard } from "./components/CarouselCard";
import Carousel from "react-native-reanimated-carousel";

export const Start = () => {
  const { goBack } = useNavigation<any>();

  const [optionSelected, setOptionSelected] = useState<string>(null);
  const [finalResponse, setFinalResponse] = useState<string>(null);

  const [events, setEvents] = React.useState<Event[]>();
  const [steps, setSteps] = React.useState(0);
  const getEvents = async () => {
    const response = await AsyncStorage.getItem(StorageType.events);

    const data = response ? JSON.parse(response) : [];

    setEvents(data);
  };

  const getStep = async () => {
    const response = await AsyncStorage.getItem(StorageType.step);

    if (response === null) {
      await AsyncStorage.setItem(StorageType.step, JSON.stringify(0));
    }

    const data = JSON.parse(response);

    setSteps(data);
  };

  const onFinalResponse = async () => {
    setFinalResponse(optionSelected);

    const response = await AsyncStorage.getItem(StorageType.events);

    const data: Event[] = response ? JSON.parse(response) : [];

    const selectedIndex = data[steps].options.findIndex(
      (item) => item.title === optionSelected
    );

    data[steps].optionSelectedIndex = String(selectedIndex);

    await AsyncStorage.setItem(StorageType.events, JSON.stringify(data));

    setOptionSelected(null);
  };

  const onReset = async () => {
    await AsyncStorage.setItem(StorageType.step, JSON.stringify(0));
    setOptionSelected(null);
    setFinalResponse(null);
    goBack();
  };

  const goToNextStep = async () => {
    await AsyncStorage.setItem(StorageType.step, JSON.stringify(steps + 1));
    setOptionSelected(null);
    setFinalResponse(null);
    getStep();
  };

  useEffect(() => {
    getEvents();
    getStep();
  }, []);

  const width = Dimensions.get("window").width;

  return (
    <Layout onBack={goBack}>
      <VStack width={"100%"} flex={1} bg={"white"} px={4} py={6}>
        {steps <= 3 ? (
          <>
            <Steps currentPosition={steps} />

            {events && events[steps] ? (
              <>
                <Image
                  marginY={4}
                  width={"100%"}
                  height={200}
                  source={{
                    uri: events[steps]?.urlImage,
                  }}
                  alt="Alternate Text"
                />
                <Box mt={4} flex={1}>
                  {events[steps].options.map((event, index) => (
                    <FlipCard
                      key={event.title}
                      style={(styles.face, styles.back, styles.flipCard)}
                      useNativeDriver={true}
                      flip={
                        finalResponse === event.title ||
                        Number(events[steps].optionSelectedIndex) === index
                      }
                      clickable={false}
                      alignHeight={true}
                      alignWidth={true}
                    >
                      <Pressable
                        onPress={
                          !finalResponse && !events[steps].optionSelectedIndex
                            ? () => setOptionSelected(event.title)
                            : () => {}
                        }
                        opacity={finalResponse ? 0.5 : 1}
                        borderColor={
                          optionSelected === event.title ? "#FF8E77" : "white"
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

                      <Box
                        shadow={2}
                        width={"100%"}
                        bg={"white"}
                        borderRadius={4}
                        p={8}
                        alignItems={"center"}
                      >
                        <Text color={"#4F4F4F"} bold fontSize={"md"}>
                          {event.title}
                        </Text>
                      </Box>
                    </FlipCard>
                  ))}
                </Box>
              </>
            ) : null}

            {finalResponse === null &&
            events &&
            !events[steps]?.optionSelectedIndex ? (
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
            ) : (
              <Pressable onPress={goToNextStep}>
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
                    Next Step
                  </Text>
                </Box>
              </Pressable>
            )}
          </>
        ) : (
          <>
            <Heading textAlign={"center"} fontSize="xl">
              Resume
            </Heading>
            <Carousel
              loop
              width={width}
              height={width / 2}
              data={events}
              mode={"parallax"}
              modeConfig={{
                parallaxAdjacentItemScale: 0.85,
              }}
              scrollAnimationDuration={2000}
              onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ item }) => (
                <CarouselCard
                  image={item.urlImage}
                  title={item.options[item.optionSelectedIndex].title}
                />
              )}
            />

            <Pressable onPress={onReset}>
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
                  Reset
                </Text>
              </Box>
            </Pressable>
          </>
        )}
      </VStack>
    </Layout>
  );
};

const styles = StyleSheet.create({
  flipCard: {
    flex: 0.5,
  },

  face: {
    flex: 0.5,
  },

  back: {
    flex: 0.5,
  },
});
