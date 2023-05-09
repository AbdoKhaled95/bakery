import React, { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
