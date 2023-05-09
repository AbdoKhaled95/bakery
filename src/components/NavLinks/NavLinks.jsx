import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useColorModeContext } from "../../context/ColorModeContext";

const NavLinks = ({ page, trigger, urlPathname }) => {
  const { PrimaryMainColor } = useColorModeContext();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: { sx: "auto", md: 60 },
        borderTop: {
          md:
            urlPathname?.replace("/", "").toLowerCase() ===
              page?.toLowerCase() && `${PrimaryMainColor} solid 3px`,
          sx: "none",
        },
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: trigger ? "#595959" : "white",
        }}
        to={page.toLowerCase().replace(" ", "-")}
      >
        <Typography
          variant="body2"
          sx={{
            transition: "all .4s",
            mx: { xs: 2, md: 1 },
            fontSize: { xs: 16, md: 18 },
            fontWeight: 500,
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {page}
        </Typography>
      </Link>
    </Box>
  );
};

export default NavLinks;
