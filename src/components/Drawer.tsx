import React, { useContext, useEffect, useState } from "react";
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
import { MenuContext } from "./MenuContext";
import { Box } from "@mui/system";

const menus = ["Project", "Drawings"];

const DrawerMUI = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { changeSwitchMenuTo } = useContext(MenuContext);

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
              <Box
                onClick={() => {
                  changeSwitchMenuTo(menu);
                }}
                key={index}
              >
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
                      {menu}
                    </ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Box>
            );
          })}
          <Divider />
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false), changeSwitchMenuTo("About me");
            }}
            key={Math.random()}
          >
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
