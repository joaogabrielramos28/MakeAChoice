import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageType } from "..";
import { updateStep } from "./updateStep";

export const getStepFromAsync = async () => {
  try {
    const value = await AsyncStorage.getItem(StorageType.step);
    if (value !== null) {
      return value;
    } else {
      updateStep(0);
      return 0;
    }
  } catch (e) {
    console.log(e);
  }
};
