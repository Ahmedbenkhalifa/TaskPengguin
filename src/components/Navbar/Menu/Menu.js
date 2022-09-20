import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DarkModeSwitcher from "components/DarkModeSwitcher";

const Menu = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/watchlist");
  };
  return (
    <Box>
      <Button onClick={handleClick} variant="contained" sx={{ mr: 2 }}>
        Watch List
      </Button>
      <DarkModeSwitcher />
    </Box>
  );
};

export default Menu;
