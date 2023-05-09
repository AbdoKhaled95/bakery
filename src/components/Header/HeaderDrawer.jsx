import { Divider, List, ListItem, Drawer } from "@mui/material";
import React, { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";

const drawerWidth = 260;
const HeaderDrawer = ({ trigger, isDrawerOpened, pages }) => {
  const [anchor, setAnchor] = useState("left");
  return (
    <Drawer
      variant="persistent"
      open={isDrawerOpened}
      sx={{
        display: { xs: "block", md: "none" },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: 60,
          bgcolor: trigger ? "white" : "rgba(254,254,254,.09)",
          boxShadow: "0 0 7px rgba(0,0,0,0.15)",
        },
      }}
      anchor={anchor}
    >
      <Divider />
      <List>
        {pages.map((page, index) => (
          <ListItem key={index}>
            <NavLinks page={page} trigger={trigger} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default HeaderDrawer;
