// theme.js
import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ADD8E6", // Light blue
    onPrimary: "#FFFFFF", // Text color on primary
    background: "#FFFFFF", // White background
    onBackground: "#000000", // Text color on background
    surface: "#FFFFFF",
    onSurface: "#000000",
    // Add other color overrides as needed
  },
};

export default customLightTheme;
