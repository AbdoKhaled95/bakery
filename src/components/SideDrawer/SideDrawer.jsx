import {
  Drawer,
  IconButton,
  Box,
  Container,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ColorPalette from "../ColorPalette/ColorPalette";

const drawerWidth = 290;
const SideDrawer = () => {
  const PrimaryMainColor = useTheme().palette.primary.main;
  const [anchor, setAnchor] = useState("right");
  const [position, setPosition] = useState(0);
  const [isOpend, setIsOpend] = useState(false);

  const drawerOpen = () => {
    if (isOpend) {
      setPosition(0);
      setIsOpend(false);
    } else {
      setPosition(drawerWidth - 1);
      setIsOpend(true);
    }
  };
  return (
    <>
      <Box
        sx={{
          px: 0.5,
          borderRadius: "4px 0 0 4px",
          transition: "all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
          position: "fixed",
          top: "200px",
          right: position,
          zIndex: 1600,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          bgcolor: "primary.contrastText",
          boxShadow: "0 -1px 17px 1px rgba(0,0,0,.09)",
        }}
      >
        <IconButton
          onClick={() => drawerOpen()}
          sx={{ ":hover": { bgcolor: "transparent", color: "primary.main" } }}
        >
          <SettingsIcon fontSize="small" />
        </IconButton>
        <IconButton
          sx={{ ":hover": { bgcolor: "transparent", color: "primary.main" } }}
        >
          <ShoppingCartIcon fontSize="small" />
        </IconButton>
      </Box>

      <Drawer
        variant="persistent"
        open={isOpend}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: "0 0 7px rgba(0,0,0,0.15)",
          },
        }}
        anchor={anchor}
      >
        <Container disableGutters sx={{ p: "24px" }}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "56px",
              boxShadow: "none",
              fontSize: 16,
              fontWeight: 700,

              ":hover": {
                opacity: 0.9,
                boxShadow: "none",
                bgcolor: PrimaryMainColor,
              },
            }}
          >
            Buy Engage Now!
          </Button>
          <ColorPalette />
        </Container>
      </Drawer>
    </>
  );
};

export default SideDrawer;
