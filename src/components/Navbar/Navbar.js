import React from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { AppBar, CenterBox, Hidden, Logo, Toolbar } from "./Navbar.styles";
import SearchInput from "./SearchInput";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <AppBar position="fixed" elevation={8}>
      <Container maxWidth="xl">
        <Toolbar>
          <Logo onClick={handleClick} variant="h4" color="primary">
            Tv Show App
          </Logo>
          <CenterBox>
            <SearchInput />
          </CenterBox>
          <Hidden>
            <Menu />
          </Hidden>
          <Hidden isMobile>
            <HamburgerMenu color="black" />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
