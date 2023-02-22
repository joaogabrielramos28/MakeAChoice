import { Box, IconButton, useSafeArea } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

type LayoutProps = {
  onBack: () => void;
  children: React.ReactNode;
};

export const Layout = ({ onBack, children }: LayoutProps) => {
  const { height } = useWindowDimensions();

  const isIphoneSmall = height <= 670;

  return (
    <>
      <Box
        safeAreaY
        py={isIphoneSmall ? 8 : null}
        px={6}
        alignItems={"flex-start"}
        width={"100%"}
        bgColor={{
          linearGradient: {
            colors: ["#FF8E77", "#FF1949"],
            start: [0, 0],
            end: [0, 1.1],
          },
        }}
      >
        <IconButton
          p={0}
          icon={<ArrowLeft size={24} color={"white"} weight={"bold"} />}
          onPress={onBack}
          _pressed={{
            opacity: 0.5,
            backgroundColor: "transparent",
          }}
        />
      </Box>
      {children}

      <Box
        safeAreaY
        py={isIphoneSmall ? 8 : null}
        alignItems={"flex-start"}
        width={"100%"}
        bgColor={{
          linearGradient: {
            colors: ["#FF8E77", "#FF1949"],
            start: [0, 0],
            end: [0, 1.1],
          },
        }}
      ></Box>
    </>
  );
};
