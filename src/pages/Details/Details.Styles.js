import { Box, styled } from "@mui/material";

export const BackgroundContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
});

export const Background = styled(Box)({
  position: "relative",
  width: "100%",
});

export const BackdropPath = styled("img")({
  width: "100%",
  filter: "brightness(50%) blur(4px)",
});

export const Vignette = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  transform: "translateY(10px)",
  background: `linear-gradient(180deg,transparent 20%,${
    theme.palette.mode === "dark" ? "rgb(20, 20, 20)" : "#fff"
  } 80%)`,
  width: "100%",
  height: "500px",
}));
