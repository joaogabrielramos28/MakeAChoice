import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageType } from "..";

export const updateStep = async (step: number) => {
  try {
    await AsyncStorage.setItem(StorageType.step, JSON.stringify(step));
  } catch (e) {
    console.log(e);
  }
};
