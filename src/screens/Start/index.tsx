import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";
import { Layout } from "../../components/Layout";
import { Event } from "../../storage/DTOs/Event";
import { Steps } from "./components/StepIndicator";

import { CarouselCard } from "./components/CarouselCard";
import Carousel from "react-native-reanimated-carousel";
import { getEventsFromAsync } from "../../storage/Events/getEvents";
import { getStepFromAsync } from "../../storage/Steps/getStep";
import { updateEvents } from "../../storage/Events/updateEvents";
import { updateStep } from "../../storage/Steps/updateStep";

export const Start = () => {
  const { goBack } = useNavigation();

  const [optionSelected, setOptionSelected] = useState<string>(null);
  const [finalResponse, setFinalResponse] = useState<string>(null);

  const [events, setEvents] = React.useState<Event[]>();
  const [steps, setSteps] = React.useState(0);
  const getEvents = async () => {
    const data = await getEventsFromAsync();

    setEvents(data);
  };

  const getStep = async () => {
    const data = await getStepFromAsync();

    setSteps(Number(data));
  };

  const onFinalResponse = async () => {
    setFinalResponse(optionSelected);

    const data = await getEventsFromAsync();

    const selectedIndex = data[steps].options.findIndex(
      (item) => item.title === optionSelected
    );

    data[steps].optionSelectedIndex = String(selectedIndex);

    await updateEvents(data);
    setEvents(data);

    setOptionSelected(null);
  };

  const onReset = async () => {
    await updateStep(0);
    setOptionSelected(null);
    setFinalResponse(null);
    goBack();
  };

  const goToNextStep = async () => {
    await updateStep(steps + 1);

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
      <ScrollView flex={1} stickyHeaderIndices={[0]}>
        {events && steps <= events.length - 1 ? (
          <Box width={"100%"} bg={"white"} py={6}>
            <Steps currentPosition={steps} />
          </Box>
        ) : null}
        <VStack width={"100%"} flex={1} bg={"white"} px={4} py={6}>
          {events && steps <= events.length - 1 ? (
            <>
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
                <Pressable onPress={onFinalResponse} mt={2}>
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
                <Pressable onPress={goToNextStep} mt={2}>
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
              {events ? (
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
                    renderItem={({ item }) => (
                      <CarouselCard
                        image={item.urlImage}
                        title={
                          item.options[Number(item.optionSelectedIndex)].title
                        }
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
              ) : null}
            </>
          )}
        </VStack>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  flipCard: {
    flex: 0.6,
  },

  face: {
    flex: 0.6,
  },

  back: {
    flex: 0.6,
  },
});
