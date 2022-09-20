import {
  Box,
  FormControl as FormControlMui,
  Select as SelectMui,
  styled,
  Typography,
} from "@mui/material";

export const SelectorHeader = styled(Box)({
  display: "flex",
});
export const SelectorLabel = styled(Typography)({
  flexGrow: 1,
});
export const SelectorMenu = styled(SelectMui)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "rgba(0,0,0,.9)",
    border: "1px solid rgb(20,20,20)",
  },
}));

export const LabelMenu = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "black",
  fontWeight: "900",
}));

export const FormControl = styled(FormControlMui)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
}));
