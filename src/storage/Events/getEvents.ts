import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageType } from "..";

export const getEventsFromAsync = async () => {
  const response = await AsyncStorage.getItem(StorageType.events);

  return response ? JSON.parse(response) : [];
};
