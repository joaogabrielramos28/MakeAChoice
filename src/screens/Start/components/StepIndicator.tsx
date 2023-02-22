import { Coffee, Cookie, ForkKnife, ShoppingBag } from "phosphor-react-native";
import StepIndicator from "react-native-step-indicator";

const labels = ["BreakFast", "Lunch", "Shopping", "Desert"];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: "#FF1949",
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: "#FF1949",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#FF1949",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#FF1949",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#FF1949",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#FF1949",
};

type StepsProps = {
  currentPosition: number;
};

const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  const iconConfig = {
    name: <></>,
    color: stepStatus === "finished" ? "#ffffff" : "#FF1949",
    size: 18,
  };
  switch (position) {
    case 0: {
      iconConfig.name = (
        <Coffee color={iconConfig.color} size={iconConfig.size} />
      );
      break;
    }
    case 1: {
      iconConfig.name = (
        <ForkKnife color={iconConfig.color} size={iconConfig.size} />
      );
      break;
    }
    case 2: {
      iconConfig.name = (
        <ShoppingBag color={iconConfig.color} size={iconConfig.size} />
      );
      break;
    }
    case 3: {
      iconConfig.name = (
        <Cookie color={iconConfig.color} size={iconConfig.size} />
      );
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

const renderStepIndicator = (params: any) => {
  const { name } = getStepIndicatorIconConfig(params);
  return name;
};

export const Steps = ({ currentPosition }: StepsProps) => {
  return (
    <StepIndicator
      stepCount={4}
      customStyles={customStyles}
      currentPosition={currentPosition}
      renderStepIndicator={renderStepIndicator}
      labels={labels}
    />
  );
};
