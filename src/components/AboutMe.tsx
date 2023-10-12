import { Box } from "@mui/material";
import me from "../img/drawings/me.png";
import {Email, Smartphone, Cake,Favorite,LocationOn,GitHub,Facebook,Person} from "@mui/icons-material"
import { useContext, useEffect, useRef } from "react";
import { MenuContext } from "./MenuContext";

const AboutMe = () => {
  const aboutmeList = [
    {
      icon: <Person sx={{ mr: 1, color: "darkgrey" }} />,
      desc: ": Haeju Eom",
    },
    {
      icon: <Cake sx={{ mr: 1, color: "#a5d6aa" }} />,
      desc: ": 1991.08.23",
    },
    {
      icon: <Favorite sx={{ mr: 1, color: "#ff7878" }} />,
      desc: ": Drawing, Playing game",
    },
    {
      icon: <LocationOn sx={{ mr: 1, color: "#a178ff" }} />,
      desc: ": Linköping, Sweden",
    },
    {
      icon: <Email sx={{ mr: 1, color: "#f2d467" }} />,
      desc: ": kaulfield23@gmail.com",
    },

    {
      icon: <Smartphone sx={{ mr: 1, color: "#a18161" }} />,
      desc: ": 0721509466",
    },
  ];
  const aboutmeRef = useRef<HTMLElement>(null);
  const { switchMenuTo } = useContext(MenuContext);
  useEffect(() => {
    if (switchMenuTo === "About me" && aboutmeRef.current !== null) {
      aboutmeRef.current.scrollIntoView();
    }
  }, [switchMenuTo]);
  return (
    <>
      <Box
        className="aboutme"
        sx={{
          textAlign: "center",
          paddingBottom: "100px",
          marginTop: { xs: "200px", sm: "400px" },
        }}
        ref={aboutmeRef}
      >
        <h1>About Me</h1>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="aboutme"
        >
          <img src={me} alt="me"/>
          <Box>
            {aboutmeList.map((item, index) => {
              return (
                <Box
                  sx={{
                    color: "grey",
                    fontSize: { xs: "1rem", sm: "1.23rem" },
                    textAlign: "start",
                  }}
                  key={index}
                >
                  <p>
                    {item.icon}
                    {item.desc}
                  </p>
                </Box>
              );
            })}
            <Box>
              <GitHub
                sx={{ mr: 1, color: "black", cursor: "pointer" }}
                className="darken"
                onClick={() => {
                  window.open("https://github.com/kaulfield23", "_blank");
                }}
              />
              <Facebook
                sx={{ color: "#5555b9", cursor: "pointer" }}
                className="darken"
                onClick={() => {
                  window.open("https://www.facebook.com/haeju.eom", "_blank");
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
