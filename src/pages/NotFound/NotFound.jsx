import { Typography } from "@mui/material";
import React, { useEffect } from "react";
const Notfound = () => {
  useEffect(() => {
    document.title = "Notfound";
  });
  return (
    <>
      <Typography>Not Found</Typography>
    </>
  );
};

export default Notfound;
