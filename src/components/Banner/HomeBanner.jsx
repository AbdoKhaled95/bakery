import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import homeBannerImg from "../../assets/images/drew-coffman-1872.jpg";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const HomeBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${homeBannerImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "600px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Typography sx={{ fontSize: 22, color: "rgba(255,255,255, .92)" }}>
        Welcome to
      </Typography>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: 34, md: 76 }, color: "white" }}
      >
        Family Bakery
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 16, md: 24 },
          width: { xs: 350, md: 700 },
          textAlign: "center",
          color: "rgba(255,255,255, .92)",
        }}
      >
        We're the biggest, best equipped and most advanced Bakery in the greater
        Los Angeles area.
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Button
          sx={{
            color: "white",
            bgcolor: "primary.main",
            fontWeight: 700,
            fontSize: { xs: 14, md: 16 },
            py: { xs: "10px", md: "15px" },
            px: { xs: "17px", md: "28px" },
            ":hover": { color: "primary.main", bgcolor: "white" },
          }}
        >
          Learn More
        </Button>
        <Button
          sx={{
            color: "white",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "white",
            fontWeight: 700,
            fontSize: { xs: 14, md: 16 },
            py: { xs: "10px", md: "15px" },
            px: { xs: "17px", md: "28px" },
            ":hover": { color: "primary.main", bgcolor: "white" },
          }}
        >
          Contact Us
        </Button>
      </Stack>
      <IconButton sx={{ position: "absolute", bottom: 40, color: "white" }}>
        <ArrowCircleDownIcon sx={{ fontSize: 42 }} />
      </IconButton>
    </Box>
  );
};

export default HomeBanner;
