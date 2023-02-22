import {
  Box,
  AspectRatio,
  Center,
  Stack,
  Heading,
  HStack,
  Image,
  Text,
} from "native-base";
import React from "react";

type CarouselCardProps = {
  title: string;
  image: string;
};

export const CarouselCard = ({ image, title }: CarouselCardProps) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: `${image}`,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="#FF1949"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {title}
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
