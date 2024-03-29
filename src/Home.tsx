import { Box, Typography } from "@mui/material";
import Project from "./components/Project";
import ImageListProject from "./components/ImageList";
import AboutMe from "./components/AboutMe";

const Home = () => {
  return (
    <>
      <Box className="home">
        <Box className="title">
          <Typography variant="h1" sx={{ fontFamily: 'Dosis', textAlign: 'center', pt: 10, color: '#fefff0', fontSize: { xs: '50px', xl: '80px' }, fontWeight: 'bold' }}>Portfolio</Typography>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 500"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150 wave"
          >
            <path
              d="M 0,500 C 0,500 0,250 0,250 C 47.58951620186323,233.9195883262295 95.17903240372647,217.839176652459 143,209 C 190.82096759627353,200.160823347541 238.87338658695745,198.56288171639346 277,226 C 315.12661341304255,253.43711828360654 343.32742124844395,309.9092964819671 381,321 C 418.67257875155605,332.0907035180329 465.8169284192669,297.799932355738 509,282 C 552.1830715807331,266.200067644262 591.4048650744884,268.890974095081 644,285 C 696.5951349255116,301.109025904919 762.5636112827796,330.6361712639383 803,320 C 843.4363887172204,309.3638287360617 858.3406897943934,258.5643408491657 898,219 C 937.6593102056066,179.43565915083428 1002.0736295396471,151.10646533939885 1050,181 C 1097.926370460353,210.89353466060115 1129.364792047018,299.0097977932388 1172,300 C 1214.635207952982,300.9902022067612 1268.4672022722805,214.85434348764608 1315,192 C 1361.5327977277195,169.14565651235392 1400.7663988638596,209.57282825617696 1440,250 C 1440,250 1440,500 1440,500 Z"
              stroke="none"
              strokeWidth="0"
              fill="#fefff0"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </Box>
        <Project />
        <ImageListProject />
        <AboutMe />
      </Box>
    </>
  );
};

export default Home;
