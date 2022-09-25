import { Box, Grow, Slide, Tooltip } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import wordle1 from "../img/wordle1.png";
import cinema1 from "../img/cinema1.png";
import esc1 from "../img/esc1.png";
import CarouselWithImg from "./CarouselWithImg";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import playlist from "../img/playlist1.png";
import myboard from "../img/myboard.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import ComputerIcon from "@mui/icons-material/Computer";
import { MenuContext } from "./MenuContext";

const Project = () => {
  const [inputImgIndex, setInputImgNumber] = useState<number>(100);
  const setText = (value: number) => {
    setInputImgNumber(value);
  };
  const projectRef = useRef<HTMLElement>(null);
  const { switchMenuTo } = useContext(MenuContext);

  useEffect(() => {
    if (switchMenuTo === "Project" && projectRef.current !== null) {
      projectRef.current.scrollIntoView();
    }
  }, [switchMenuTo]);
  return (
    <>
      <Box className="project" sx={{ backgroundColor: "#fefff0" }}>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 3000 }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <span className="project-title" ref={projectRef}>
              Project
            </span>
          </Box>
        </Grow>
        <Box
          sx={{
            marginTop: "30px",
            backgroundColor: "#fcfaea",
            border: "10px solid #b2e8c5",
            padding: "2% 20px",
          }}
        >
          <Box sx={{ border: "2px solid #b2e8c5", padding: "5px" }}>
            <Box
              className="project-imgs"
              sx={{ border: "2px solid #b2e8c5", height: "100%" }}
            >
              {imgList.map((item, idx) => {
                return (
                  <Box key={idx}>
                    <Box
                      onClick={() => {
                        if (item.indexNum === 4) {
                          return;
                        }
                        if (item.indexNum !== 2) {
                          setInputImgNumber(item.indexNum);
                        } else {
                          window.open(
                            "https://kaulfield23.github.io/ESC-CSS/",
                            "_blank"
                          );
                        }
                      }}
                      sx={{ cursor: "pointer" }}
                    >
                      <Tooltip title={item.tooltip} arrow>
                        <img src={item.img}></img>
                      </Tooltip>
                    </Box>
                    <span className="project-title">{item.text}</span>
                    {item.responsive && (
                      <SmartphoneIcon sx={{ mr: 1, color: "darkred" }} />
                    )}
                    <ComputerIcon sx={{ mr: 1, color: "darkblue" }} />
                    <GitHubIcon
                      className="darken"
                      sx={{ cursor: "pointer", color: "olive" }}
                      onClick={() => {
                        window.open(item.github, "_blank");
                      }}
                    />
                    <Box className="project-type" sx={{ mt: 1 }}>
                      {item.desc}
                      <Box className="project-box">
                        {item.used.map((text, index) => {
                          return <p key={index}>{text}</p>;
                        })}
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        {inputImgIndex !== 100 && (
          <CarouselWithImg inputIndex={inputImgIndex} setNumber={setText} />
        )}
      </Box>
    </>
  );
};

const imgList = [
  {
    img: wordle1,
    indexNum: 0,
    tooltip: "No demo",
    responsive: true,
    text: <h5>Wordle</h5>,
    used: [
      "Javascript",
      "React.js",
      "Material UI",
      "Express",
      "MongoDB",
      "Jest",
      "Handlebars",
    ],
    desc: (
      <span>
        A limitless word guess game
        <br />
        The server will only send result of the guessing word, so user won't be
        able to cheat
        <br />
        Users can see their scores in high score page
      </span>
    ),
    github: "https://github.com/kaulfield23/wordle-2",
  },
  {
    img: cinema1,
    indexNum: 1,
    tooltip: "No demo",
    responsive: false,
    text: <h5>Risbäck Cinema</h5>,
    used: ["Typescript", "Next.js", "Material UI", "Cypress", "MongoDB"],
    desc: (
      <span>
        Group project - A cinema website with log in function. Users can leave
        the reviews and check their information as well. Some pages are SSR.
        <br /> Used bycrypt for encoding the passwords. Database only saves hash
        from bcrypt for the password. Therefore it is secure at the same time.
      </span>
    ),
    github: "https://github.com/kaulfield23/Cinema-next",
  },
  {
    img: esc1,
    indexNum: 2,
    tooltip: "Check demo",
    responsive: true,
    text: <h5>ESC hacker escape rooms</h5>,
    used: ["Javascript", "SASS"],
    desc: (
      <span>
        Fully responsive website. Used SASS for CSS codes and 'Flickity' library
        for card carousel in mobile mode.
      </span>
    ),
    github: "https://github.com/kaulfield23/ESC-CSS",
  },
  {
    img: playlist,
    indexNum: 3,
    tooltip: "No demo",
    responsive: true,
    text: <h5>My playlist</h5>,
    used: ["Typescript", "Next.js", "SASS", "Material UI", "Spotify API"],
    desc: (
      <span>
        Music playing website that can check your playlist from Spotify API.
        Used intersection observer to load new song lists and songs. Token will
        be refreshed after certain amount of time. Used
        React-spotify-web-playback library for the player.
      </span>
    ),
    github: "https://github.com/kaulfield23/My-playlist-next-ts",
  },
  {
    img: myboard,
    indexNum: 4,
    tooltip: "No demo",
    responsive: true,
    text: <h5>My little board</h5>,
    used: ["Typescript", "Next.js", "Material UI", "Docker", "PostgreSQL"],
    desc: (
      <span>
        Working on mini SNS with login. Docker for using PostgreSQL locally.
        User would see their posts with their name that is saved in local
        database.
      </span>
    ),
    github: "https://github.com/kaulfield23/my-little-board",
  },
];
export default Project;
