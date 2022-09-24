import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const menus = [
  { name: "Project", path: "/playlist" },
  { name: "Drawings", path: "/myProfile" },
];

const DrawerMUI = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={"right"}
      >
        <List>
          {menus.map((menu, index) => {
            return (
              <a href={menu.path} key={index} className="anchor">
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                  <ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "purple",
                        fontWeight: "bold",
                        fontFamily: "Nunito",
                        variant: "body2",
                        padding: "13px",
                      }}
                    >
                      {menu.name}
                    </ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </a>
            );
          })}
          <Divider />
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            key={Math.random()}
          >
            <a href="/aboutme" className="anchor">
              <ListItemText
                primaryTypographyProps={{
                  color: "#3a4172",
                  fontWeight: "bold",
                  fontFamily: "Nunito",
                  variant: "body2",
                  padding: "13px",
                }}
              >
                ABOUT ME
              </ListItemText>
            </a>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerMUI;
