import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";

let darkTheme = createTheme({
  ...globalTheme("dark"),
  palette: {
    mode: "dark",
    ...globalTheme("dark").palette,
    background: {
      default: "#141414",
    },
    primary: {
      main: "#FF4C29",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2C394B",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
