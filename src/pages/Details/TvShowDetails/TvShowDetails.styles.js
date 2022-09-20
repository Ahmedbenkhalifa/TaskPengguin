import { Button, Grid, Paper, styled, Typography } from "@mui/material";

export const TitleName = styled(Typography)({
  letterSpacing: "2px",
  textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
  color: "#fff",
});

export const Description = styled(Grid)({
  display: "flex",
  color: "#fff",
  alignItems: "center",
  textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
});
export const Overview = styled(Typography)({
  color: "#fff",
  textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
  fontSize: "18px",
});

export const Info = styled(Paper)(({ theme }) => ({
  padding: "5px 10px",
  marginRight: theme.spacing(1),
}));

export const WatchListBtn = styled(Button)(({ theme }) => ({
  fontWeight: 700,
  marginRight: theme.spacing(2),
  textTransform: "capitalize",
  width: "250px",
  height: "50px",
}));
