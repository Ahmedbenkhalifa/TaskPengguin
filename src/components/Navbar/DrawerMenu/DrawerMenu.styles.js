import { Drawer as DrawerMui, ListItem as ListItemMui, styled } from "@mui/material";

export const Drawer = styled(DrawerMui)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const ListItem = styled(ListItemMui)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(1),
}));
