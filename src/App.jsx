import "./App.css";
import React from "react";
import { useMainContext } from "./context/MainContext";
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ButtonToTop from "./components/Buttons/ButtonToTop";
import { useColorModeContext } from "./context/ColorModeContext";

const App = () => {
  const { changeMainColor, theme, colorMode } = useColorModeContext();
  const {} = useMainContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box height={5000}>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/home"} element={<Home />}></Route>

            <Route path="*" element={<Notfound />}></Route>
          </Routes>
          <Button onClick={() => changeMainColor("#fff")}>test</Button>
          <Button onClick={() => colorMode.toggleColorMode("#fff")}>
            mode
          </Button>

          <ButtonToTop />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
