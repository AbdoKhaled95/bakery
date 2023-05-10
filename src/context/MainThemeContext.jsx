import { createTheme, darkScrollbar, useTheme } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import mainTheme from "../assets/themes/mainTheme";

import darkPalette from "../assets/themes/darkPalette";
import lightPalette from "../assets/themes/lightPalette";

const MainThemeContext = createContext();

const MainThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");
  const [isPrimaryColorChanged, setIsPrimaryColorChanged] = useState(false);

  const theme = React.useMemo(
    () =>
      createTheme(
        {
          palette: mode === "light" ? lightPalette : darkPalette,
        },

        mainTheme
      ),
    [mode]
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      changeMainColor: (color) => {
        theme.palette.primary.main = color;
        setIsPrimaryColorChanged((current) => !current);
      },
    }),
    [theme]
  );

  return (
    <MainThemeContext.Provider value={{ colorMode, theme }}>
      {children}
    </MainThemeContext.Provider>
  );
};

export default MainThemeProvider;
export const useMainThemeContext = () => {
  return useContext(MainThemeContext);
};
