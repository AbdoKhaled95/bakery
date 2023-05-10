import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useMainThemeContext } from "../../context/MainThemeContext";

const colors = [
  "#8e7754",
  "#218fe6",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
];
const ColorPalette = () => {
  const { colorMode } = useMainThemeContext();

  return (
    <Box>
      <Typography sx={{ my: 2 }}>Choose Accent Color:</Typography>
      <Grid container columns={16}>
        {colors.map((color, i) => (
          <Grid key={i} item xs={2}>
            <Button
              onClick={() => colorMode.changeMainColor(color)}
              sx={{
                minWidth: "20px",
                height: "20px",
                width: "20px",
                bgcolor: color,
                transition: "all .3s",
                ":hover": {
                  bgcolor: color,
                  opacity: 0.9,
                },
              }}
            ></Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorPalette;
