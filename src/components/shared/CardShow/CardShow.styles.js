import { Grid as GridMui, Paper as PaperMui, styled } from "@mui/material";

export const Paper = styled(PaperMui)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  overflow: "hidden",
  height: "100%",
});

export const Grid = styled(GridMui)({
  overflow: "hidden",
  padding: 1,
});
export const Img = styled("img")({
  cursor: "pointer",
  objectFit: "cover",
  width: "100%",
  height: "250px",
});
