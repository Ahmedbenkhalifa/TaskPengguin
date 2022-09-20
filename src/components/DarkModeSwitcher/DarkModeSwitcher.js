import { FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setThemeMode } from "redux/theme.slice";
import { SwitchTheme } from "./DarkModeSwitcher.styles";

const DarkModeSwitcher = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      dispatch(setThemeMode("dark"));
    } else {
      dispatch(setThemeMode("light"));
    }
  };
  return (
    <FormControlLabel
      control={<SwitchTheme onChange={handleChange} sx={{ m: 1 }} defaultChecked />}
      label={checked ? "Dark" : "Light"}
    />
  );
};

export default DarkModeSwitcher;
