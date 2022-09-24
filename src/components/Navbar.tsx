import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Drawer from "./Drawer";

const CustomTab = styled(Tab, {
  shouldForwardProp: (props) => props !== "sx",
})(() => ({
  fontWeight: "bold",
  fontSize: "16px",
  margin: "0 18px",
  color: "white",
  fontFamily: "Dosis",
  opacity: 1,
  "&:hover": {
    color: "#500950",
  },
  "&.Mui-selected": {
    color: "#500950",
    fontWeight: "bold",
  },
}));

const Navbar = () => {
  const [value, setValue] = useState<number>(0);
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("md"));

  const menus = [
    { name: "Project", path: "/myProfile" },
    { name: "Drawings", path: "/aboutme" },
  ];

  //   useEffect(() => {
  //     const pathMenu = ["/playlist", "/myProfile", "/aboutme"];
  //     const currentPath = pathMenu.findIndex((item) => item === path);
  //     if (currentPath === -1) {
  //       return;
  //     }
  //     setValue(currentPath);
  //   }, []);

  return (
    <>
      <AppBar sx={{ backgroundColor: "#88cba0" }} position="sticky">
        <Toolbar>
          {isMobileSize ? (
            <>
              <a href="/" className="anchor">
                <Typography
                  sx={{
                    marginLeft: "20px",
                    fontFamily: "Dosis",
                    fontWeight: "bold",
                    color: "#3c6149",
                    cursor: "pointer",
                  }}
                >
                  Haeju Eom
                </Typography>
              </a>
              <Drawer />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
                textColor="primary"
              >
                {menus.map((menu, index) => {
                  return (
                    <a href={menu.path} key={index}>
                      <Box onClick={() => setValue(index)}>
                        <CustomTab label={menu.name} />
                      </Box>
                    </a>
                  );
                })}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
