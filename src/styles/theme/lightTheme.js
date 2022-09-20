import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";

let lightTheme = createTheme({
  ...globalTheme("light"),
  palette: {
    mode: "light",
    ...globalTheme("light").palette,
    background: {
      default: "#fff",
    },
    primary: {
      main: "#9DBBC9",
      contrastText: "rgb(30,30,30)",
    },
    secondary: {
      main: "#AAB4BE",
      contrastText: "#ffffff",
    },
    tertiary: {
      main: "#14102D",
      contrastText: "#ffffff",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
