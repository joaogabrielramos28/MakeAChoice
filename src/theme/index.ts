import { extendTheme } from "native-base";

const theme = extendTheme({
  fontConfig: {
    Nunito: {
      400: {
        normal: "Nunito_400Regular",
      },
      600: {
        normal: "Nunito_600SemiBold",
      },
      700: {
        normal: "Nunito_700Bold",
      },
    },
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
});

export { theme };
