import { Box, Grow } from "@mui/material";
import { useState } from "react";
import wordle1 from "../img/window.png";
import CarouselWithImg from "./CarouselWithImg";

const Project = () => {
  const [inputImgTxt, setInputImg] = useState<string>("");
  const setText = (value: string) => {
    setInputImg(value);
  };
  return (
    <>
      <Box className="aboutMe" sx={{ position: "absolute", zIndex: 1 }}>
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
            height: "500px",
            backgroundColor: "#fcfaea",
            border: "10px solid #b2e8c5",
            padding: "2% 20px",
          }}
        >
          <Box
            sx={{ border: "2px solid #b2e8c5", height: "100%", padding: "5px" }}
          >
            <Box
              className="project-imgs"
              sx={{ border: "2px solid #b2e8c5", height: "100%" }}
            >
              <Box
                onClick={() => {
                  setInputImg("wordle");
                }}
              >
                <img src={wordle1}></img>
              </Box>
            </Box>
          </Box>
        </Box>
        {inputImgTxt !== "" && (
          <CarouselWithImg input={inputImgTxt} setText={setText} />
        )}
      </Box>
    </>
  );
};

export default Project;
