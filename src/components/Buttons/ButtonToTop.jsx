import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fade, useScrollTrigger } from "@mui/material";
import scrollToSection from "../../utils/scrollToSection";

const ButtonToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  return (
    <Fade in={trigger}>
      <Fab
        onClick={() => scrollToSection()}
        size="small"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          color: "white",
          bgcolor: "secondary.main",

          ":hover": {
            bgcolor: "#333",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
};

export default ButtonToTop;
