import { useNavigation } from "@react-navigation/native";
import {
  Box,
  IconButton,
  Input,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageType } from "../../../../storage";
import { Layout } from "../../../../components/Layout";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const CreateEvent = () => {
  const { goBack, navigate } = useNavigation<any>();

  const [title, setTitle] = useState("");
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const onReset = () => {
    setTitle("");
    setFirstOption("");
    setSecondOption("");
    setUrlImage("");
  };

  const onCreateEvent = async () => {
    const payload = {
      title,
      urlImage,
      options: [
        {
          title: firstOption,
        },
        {
          title: secondOption,
        },
      ],
    };

    const response = await AsyncStorage.getItem(StorageType.events);

    const data = response ? JSON.parse(response) : [];

    await AsyncStorage.setItem(
      StorageType.events,
      JSON.stringify([...data, payload])
    );

    onReset();
  };

  const isValid = !!title && !!firstOption && !!secondOption && !!urlImage;

  const goToPreview = () => {
    navigate("PreviewEvents", {
      title,
      options: [
        {
          title: firstOption,
        },
        {
          title: secondOption,
        },
      ],
      urlImage,
    });
  };
  return (
    <Layout onBack={goBack}>
      <KeyboardAvoidingView behavior="padding" flex={1}>
        <ScrollView width={"100%"} flex={1} bg={"white"} px={4} py={6}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box>
              <Box mb={4}>
                <Text color={"#4F4F4F"} fontSize={"lg"}>
                  Title
                </Text>
                <Input
                  value={title}
                  onChangeText={setTitle}
                  placeholder="Type the title of event"
                  mt={2}
                />
              </Box>
              <Box mb={4}>
                <Text color={"#4F4F4F"} fontSize={"lg"}>
                  First Option
                </Text>
                <Input
                  value={firstOption}
                  onChangeText={setFirstOption}
                  placeholder="Type the first option"
                  mt={2}
                />
              </Box>

              <Box mb={4}>
                <Text color={"#4F4F4F"} fontSize={"lg"}>
                  Second Option
                </Text>
                <Input
                  value={secondOption}
                  onChangeText={setSecondOption}
                  placeholder="Type the second option"
                  mt={2}
                />
              </Box>
              <Box mb={4}>
                <Text color={"#4F4F4F"} fontSize={"lg"}>
                  URL Image
                </Text>
                <Input
                  value={urlImage}
                  onChangeText={setUrlImage}
                  placeholder="Type the image url"
                  mt={2}
                />
              </Box>
              <VStack space={2}>
                <Pressable
                  onPress={onCreateEvent}
                  isDisabled={!isValid}
                  _disabled={{
                    opacity: 0.4,
                  }}
                >
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
                  opacity={!isValid ? 0.4 : 1}
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
                    isDisabled={!isValid}
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
            </Box>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
};
