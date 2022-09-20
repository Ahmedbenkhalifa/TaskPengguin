import { Box, Button, Divider, List } from "@mui/material";
import DarkModeSwitcher from "components/DarkModeSwitcher";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, ListItem } from "./DrawerMenu.styles";

export default function DrawerMenu({ open, onClose }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/watchlist");
  };
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <List sx={{ width: "auto", mt: 4 }}>
          <ListItem>
            <Button onClick={handleClick} variant="contained" sx={{ mr: 2 }}>
              Watch List
            </Button>
          </ListItem>
          <ListItem>
            <DarkModeSwitcher />
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Drawer>
  );
}
