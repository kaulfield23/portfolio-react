import { Box, Grow, ImageList } from "@mui/material";
import { useState } from "react";
import wordle1 from "../img/wordle1.png";
import cinema1 from "../img/cinema1.png";
import esc1 from "../img/esc1.png";
import CarouselWithImg from "./CarouselWithImg";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
const Project = () => {
  const [inputImgIndex, setInputImgNumber] = useState<number>(100);
  const setText = (value: number) => {
    setInputImgNumber(value);
  };

  const imgList = [
    {
      img: wordle1,
      indexNum: 0,
      responsive: "✔️",
      text: <h5>Wordle</h5>,
      used: [
        "Javascript",
        "React.js",
        "Material UI",
        "Express",
        "MongoDB",
        "Jest",
      ],
      desc: (
        <span>
          A limitless word guess game
          <br />
          The server will only send result of the guessing word, so user won't
          be able to cheat
          <br />
          Users can see their scores in high score page
        </span>
      ),
    },
    {
      img: cinema1,
      indexNum: 1,
      responsive: "❌",
      text: <h5>Risbäck Cinema</h5>,
      used: ["Typescript", "Next.js", "Material UI", "Cypress", "MongoDB"],
      desc: (
        <span>
          A cinema website with log in function. Users can leave the reviews and
          check their information as well. Some pages are made of SSR.
          <br /> Used bycrypt for encoding the password. Database only saves
          hash from bcrypt for the password. Therefore it is secure at the same
          time.
        </span>
      ),
    },
    {
      img: esc1,
      indexNum: 2,
      responsive: "✔️",
      text: <h5>ESC hacker escape rooms</h5>,
      used: ["Javascript", "SASS"],
      desc: (
        <span>
          Fully responsive website. Used SASS for CSS codes and 'Flickity'
          library for card carousel in mobile mode.
        </span>
      ),
    },
  ];
  return (
    <>
      <Box
        className="project"
        sx={{ position: "absolute", zIndex: 1, backgroundColor: "#fefff0" }}
      >
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 3000 }}
        >
          <span className="project-title">Project</span>
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
                  <Box
                    key={idx}
                    onClick={() => {
                      setInputImgNumber(item.indexNum);
                    }}
                  >
                    <img src={item.img}></img>
                    <span>{item.text}</span>
                    <SmartphoneIcon />
                    {item.responsive}
                    <Box className="project-type" sx={{ mt: 1 }}>
                      {item.desc}
                      <Box className="project-box">
                        {item.used.map((text, index) => {
                          return <p>{text}</p>;
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

export default Project;
