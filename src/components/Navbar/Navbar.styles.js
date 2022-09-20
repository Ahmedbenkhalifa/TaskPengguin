import { Box, styled, Typography } from "@mui/material";
import AppBarMui from "@mui/material/AppBar";
import ToolbarMui from "@mui/material/Toolbar";
import { hexToRgba } from "utils/colors";

export const AppBar = styled(AppBarMui)(({ theme }) => ({
  background: hexToRgba(theme.palette.background.default, 0.9),
  transition: ".2s",
}));

export const Toolbar = styled(ToolbarMui)({
  display: "flex",
  justifyContent: "space-between",
  paddingX: "0px",
});
export const CenterBox = styled(Box)({
  width: "300px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
});

export const Logo = styled(Typography)({
  fontWeight: "550",
  textTransform: "uppercase",
  cursor: "pointer",
  fontFamily: "'Antonio','Poppins', sans-serif",
});

export const Hidden = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})(({ theme, isMobile }) => ({
  [theme.breakpoints.up("md")]: {
    display: isMobile ? "none" : "block",
  },
  [theme.breakpoints.down("md")]: {
    display: isMobile ? "block" : "none",
  },
}));
