import { Stack } from "expo-router";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

export default function RootLayout() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
      ...DefaultTheme.colors,
      primary: "#E9781C",
      secondary: "#3D4B4C",
      secondaryContainer: "#FFB378",
      background: "#FFF5EA",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="send" options={{ headerShown: false }} />
        <Stack.Screen name="scanner" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}

/*
{
  "colors": {
    "primary": "#E9781C",
    "primaryContainer": "#FFAB5E",
    "onPrimary": "#FFFFFF",
    "secondary": "#C46619",
    "secondaryContainer": "#FFB378",
    "onSecondary": "#000000",
    "tertiary": "#B35617",
    "tertiaryContainer": "#FF7F34",
    "onTertiary": "#FFFFFF",
    "background": "#FFFFFF",
    "surface": "#FFFFFF",
    "onSurface": "#000000",
    "error": "#B00020",
    "onError": "#FFFFFF",
    "monoChromaticColors": {
      "shade50": "#F8E3D0",
      "shade100": "#F1C8A2",
      "shade200": "#E9AC73",
      "shade300": "#E18F44",
      "shade400": "#DA771E",
      "shade500": "#C66A18",
      "shade600": "#AD5A14",
      "shade700": "#8E4910",
      "shade800": "#70390D",
      "shade900": "#522A0A"
    }
  }
}
*/
