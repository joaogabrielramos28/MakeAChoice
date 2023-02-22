import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Box,
  FlatList,
  IconButton,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { ArrowLeft, Plus } from "phosphor-react-native";
import React, { useCallback, useState } from "react";
import { StorageType } from "../../storage";

import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Layout } from "../../components/Layout";
import { Event } from "../../storage/DTOs/Event";

export const CreateOptions = () => {
  const { goBack, navigate } = useNavigation<any>();
  const [data, setData] = useState<Event[]>([]);

  const getEvents = async () => {
    const events = await AsyncStorage.getItem(StorageType.events);

    const data = JSON.parse(events);

    setData(data);
  };

  useFocusEffect(
    useCallback(() => {
      getEvents();
    }, [])
  );

  const goToCreateEvent = () => {
    navigate("CreateEvent");
  };

  const onDelete = async (title: string) => {
    const events = await AsyncStorage.getItem(StorageType.events);

    const data = JSON.parse(events);

    const newData = data.filter((item: any) => item.title !== title);

    setData(newData);

    await AsyncStorage.setItem(StorageType.events, JSON.stringify(newData));
  };

  return (
    <>
      <Layout onBack={goBack}>
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

          <FlatList
            style={{
              marginTop: 4,
            }}
            keyExtractor={(item, index) => `draggable-item-${item.title}`}
            data={data}
            renderItem={({ item }) => (
              <Pressable
                mt={2}
                bg={"white"}
                p={4}
                shadow={2}
                borderRadius={32}
                flexDirection={"row"}
                alignItems={"center"}
                _pressed={{
                  opacity: 0.5,
                }}
                onLongPress={() => onDelete(item.title)}
              >
                <Avatar
                  source={{
                    uri: item.urlImage,
                  }}
                />
                <Text color={"#4F4F4F"} bold marginLeft={4} fontSize={"md"}>
                  {item.title}
                </Text>
              </Pressable>
            )}
          />
        </VStack>
      </Layout>
    </>
  );
};
