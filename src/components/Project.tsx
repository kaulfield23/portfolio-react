import { Box, Typography } from "@mui/material";
import wordle1 from "../img/window.png";
// type projectType = {
//   activateCarousel: (input: string) => void;
// };
const Project = () => {
  const activateCarousel = (input: string) => {
    console.log(input);
  };
  return (
    <>
      <Box className="aboutMe" sx={{ position: "absolute", zIndex: 1 }}>
        <span className="project-title">Project</span>
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
                  activateCarousel("wordle");
                }}
              >
                <img src={wordle1}></img>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Project;
