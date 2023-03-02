import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Avatar, Box, FlatList, Pressable, Text, VStack } from "native-base";
import { Plus } from "phosphor-react-native";
import React, { useCallback, useState } from "react";

import { Layout } from "../../components/Layout";
import { Event } from "../../storage/DTOs/Event";
import { StackRoutesEnum } from "../../routes/stack.routes";
import { getEventsFromAsync } from "../../storage/Events/getEvents";
import { updateEvents } from "../../storage/Events/updateEvents";

export const CreateOptions = () => {
  const { goBack, navigate } = useNavigation();
  const [data, setData] = useState<Event[]>([]);

  const getEvents = async () => {
    const events = await getEventsFromAsync();

    setData(events);
  };

  useFocusEffect(
    useCallback(() => {
      getEvents();
    }, [])
  );

  const goToCreateEvent = () => {
    navigate(StackRoutesEnum.CREATE_EVENT);
  };

  const onDelete = async (title: string) => {
    const events = await getEventsFromAsync();

    const newData = events.filter((item: any) => item.title !== title);

    setData(newData);

    await updateEvents(newData);
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
