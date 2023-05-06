import "./App.css";
import React from "react";
import { useMainContext } from "./context/mainContext";
import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

const App = () => {
  const { changeMainColor } = useMainContext();

  return (
    <>
      <div style={{ height: 1000 }}>
        <Header></Header>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </div>

      <Routes>
        <Route
          path={"/"}
          element={<Typography color="primary"></Typography>}
        ></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
};

export default App;
