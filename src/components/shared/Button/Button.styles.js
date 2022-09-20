import { Button as ButtonMui, styled } from "@mui/material";

export const BtnWatchList = styled(ButtonMui)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  color: theme.palette.mode === "dark" ? "white" : "black",
}));
