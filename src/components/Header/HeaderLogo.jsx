import { Box } from "@mui/material";
import React from "react";
import logolight from "../../assets/images/bakery-light-1.png";
import logoColor from "../../assets/images/bakery-color.png";

const HeaderLogo = ({ trigger }) => {
  return (
    <Box
      sx={{
        // display: { xs: "none", md: "flex" },

        img: { height: 36 },
      }}
    >
      <img src={trigger ? logoColor : logolight} alt="bakery" />
    </Box>
  );
};

export default HeaderLogo;
