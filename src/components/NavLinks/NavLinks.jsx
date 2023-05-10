import { Box, Link, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link as routerLink } from "react-router-dom";
import { useMainThemeContext } from "../../context/MainThemeContext";

const NavLinks = ({ page, trigger, urlPathname }) => {
  // const {  } = useMainThemeContext();
  const PrimaryMainColor = useTheme().palette.primary.main;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: { sx: "auto", md: 60 },
        borderTop: {
          md:
            urlPathname?.replace("/", "").toLowerCase() === page?.toLowerCase()
              ? `${PrimaryMainColor} solid 3px`
              : page === "Home" &&
                urlPathname === "/" &&
                `${PrimaryMainColor} solid 3px`,
          sx: "none",
        },
      }}
    >
      <Link
        component={routerLink}
        sx={{
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
