import { Box } from "@mui/material";

import { CustomText } from "./customMUI/CustomText";

const AboutMe = () => {
  return (
    <>
      <Box
        className="aboutMe"
        sx={{
          // paddingTop: "2px",
          height: "500px",
          width: "900px",
          border: "2px solid black",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Box>
          <CustomText>
            I'm Haeju Eom and from South Korea. I like to experiment new things
            and draw.
            <br />
            I'm currently on my third semester of Lernia YH. Here you can find
            my projects from school and my own.
          </CustomText>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
