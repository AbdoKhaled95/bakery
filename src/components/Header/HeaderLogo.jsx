import { Box } from "@mui/material";
import React from "react";
import logolight from "../../assets/images/bakery-light-1.png";

const HeaderLogo = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },

        img: { height: 36 },
      }}
    >
      <img src={logolight} alt="bakery" />
    </Box>
  );
};

export default HeaderLogo;
