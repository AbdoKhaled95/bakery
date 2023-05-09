import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderLogo from "./HeaderLogo";
import NavLinks from "../NavLinks/NavLinks";
import { useScrollTrigger } from "@mui/material";
import HeaderDrawer from "./HeaderDrawer";
import { useLocation } from "react-router-dom";

const pages = ["Home", "About", "Our Offer", "Gallery", "Blog", "Contact"];

const Header = () => {
  const urlPathname = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  useEffect(() => {
    setIsDrawerOpened(false);
  }, [urlPathname?.pathname]);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          height: 60,
          backgroundColor: trigger ? "white" : "transparent",
          boxShadow: "0 0 7px rgba(0,0,0,0.09)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="dense"
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between", md: "space-around" },
            }}
          >
            <IconButton
              onClick={() => setIsDrawerOpened(!isDrawerOpened)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: trigger ? "#595959" : "white",
                ":hover": {
                  bgcolor: "transparent",
                  color: "primary.main",
                },
              }}
            >
              {isDrawerOpened ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <HeaderLogo trigger={trigger} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              {pages.map((page, i) => (
                <NavLinks
                  key={i}
                  page={page}
                  trigger={trigger}
                  urlPathname={urlPathname?.pathname}
                />
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <HeaderDrawer
        trigger={trigger}
        setIsDrawerOpened={setIsDrawerOpened}
        isDrawerOpened={isDrawerOpened}
        pages={pages}
      />
    </>
  );
};

export default Header;
