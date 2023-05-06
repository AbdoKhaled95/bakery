import React, { useContext, useEffect, useState } from "react";

import mainTheme from "../assets/themes/mainTheme";
const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  /// change main color
  const [isMainColorChanged, setIsMainColorChanged] = useState(false);
  const changeMainColor = (color) => {
    isMainColorChanged
      ? setIsMainColorChanged(false)
      : setIsMainColorChanged(true);
    mainTheme.palette.primary.main = color;
    return;
  };
  /// end change main color

  return (
    <MainContext.Provider value={{ changeMainColor }}>
      {children}
    </MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
