import { CssBaseline, ThemeProvider } from "@mui/material";
import RouterConfig from "./routing/RouterConfig";
import { darkTheme, lightTheme } from "styles/theme";
import { useDispatch, useSelector } from "react-redux";
import "styles/globalStyles.css";
import Toast from "components/Toast";
import { setToasts } from "redux/toasts.slice";

function App() {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { toasts } = useSelector((state) => state.toasts);
  return (
    <ThemeProvider theme={handleTheme(mode)}>
      <CssBaseline /> <Toast toasts={toasts} setToasts={(elems) => dispatch(setToasts(elems))} />
      <RouterConfig />
    </ThemeProvider>
  );
}

const handleTheme = (mode) => {
  switch (mode) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    case "browser":
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? darkTheme
        : lightTheme;

    default:
      return darkTheme;
  }
};

export default App;
