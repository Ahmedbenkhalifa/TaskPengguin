import { InputBase as InputBaseMui, Paper, styled, Typography } from "@mui/material";

export const PaperSearch = styled(Paper)({
  position: "absolute",
  top: "45vh",
  border: "1px solid #C7C8CA",
  background: "#fff",
  borderRadius: "30px",
  display: "flex",
  overflow: "hidden",
  width: "100%",
  zIndex: "1000",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 2px",
});

export const InputBase = styled(InputBaseMui)({
  padding: "0 4px",
  flex: 1,
  display: "flex",
  color: "black",
});

export const WelcomeLabel = styled(Typography)({
  position: "absolute",
  fontFamily: "'Antonio','Poppins', sans-serif",
});
