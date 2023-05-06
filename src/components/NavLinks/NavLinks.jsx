import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ page }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "white",
      }}
      to={page.toLowerCase().replace(" ", "-")}
    >
      <Typography
        sx={{
          height: "100%",
          bgcolor: "red",
          fontSize: { xs: 14, md: 18 },
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        {page}
      </Typography>
    </Link>
  );
};

export default NavLinks;
