import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageType } from "..";
import { Event } from "../DTOs/Event";

export const updateEvents = async (events: Event[]) => {
  try {
    await AsyncStorage.setItem(StorageType.events, JSON.stringify(events));
  } catch (e) {
    console.log(e);
  }
};
