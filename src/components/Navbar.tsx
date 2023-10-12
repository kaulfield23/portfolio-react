import { useContext, useState } from "react";
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
import Drawer from "./Drawer";
import { MenuContext } from "./MenuContext";

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
    color: "#2f4433",
  },
  "&.Mui-selected": {
    color: "#e2da6a",
    fontWeight: "bold",
  },
}));

const Navbar = () => {
  const [value, setValue] = useState<number>(0);
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("md"));
  const { changeSwitchMenuTo } = useContext(MenuContext);
  const menus = ["Project", "Drawings", "About me"];

  return (
    <>
      <AppBar sx={{ backgroundColor: "#685ea0" }} elevation={0} position="sticky">
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
                sx={{
                  marginLeft: "auto",
                }}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#D97D54",
                  }
                }}

                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {menus.map((menu, index) => {
                  return (
                    <CustomTab
                      label={menu}
                      onClick={() => {
                        setValue(index);
                        changeSwitchMenuTo(menu);
                      }}
                      key={index}
                    />
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
