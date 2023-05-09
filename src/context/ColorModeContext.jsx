import { createTheme } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import mainTheme from "../assets/themes/mainTheme";
import { useTheme } from "@emotion/react";
import darkPalette from "../assets/themes/darkPalette";
import lightPalette from "../assets/themes/lightPalette";

const ColorModeContext = createContext();

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme(
        { palette: mode === "light" ? lightPalette : darkPalette },

        mainTheme
      ),
    [mode]
  );
  const [PrimaryMainColor, setPrimaryMainColor] = useState(
    theme.palette.primary.main
  );
  const changeMainColor = (color) => {
    setPrimaryMainColor((theme.palette.primary.main = color));
    return;
  };
  /// end change main color

  return (
    <ColorModeContext.Provider
      value={{ changeMainColor, PrimaryMainColor, colorMode, theme }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
export const useColorModeContext = () => {
  return useContext(ColorModeContext);
};
