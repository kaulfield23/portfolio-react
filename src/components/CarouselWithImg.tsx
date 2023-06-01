import { Box, Modal, IconButton } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import wordle2 from "../img/wordle2.png";
import wordle3 from "../img/wordle3.png";
import wordle4 from "../img/wordle4.png";
import cinema2 from "../img/cinema2.png";
import cinema3 from "../img/cinema3.png";
import cinema4 from "../img/cinema4.png";
import playlist2 from "../img/playlist2.png";
import playlist3 from "../img/playlist3.png";
import playlist4 from "../img/playlist4.png";
import frontway2 from "../img/frontway2.png";
import frontway3 from "../img/frontway3.png";
import board2 from "../img/board2.png";
import board3 from "../img/board3.png";
import board4 from "../img/board4.png";

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

type Props = {
  inputIndex: number;
  setNumber: (value: number) => void;
};

const CarouselWithImg = ({ inputIndex, setNumber }: Props) => {
  const imgList = [
    {
      file: [wordle2, wordle3, wordle4],
    },
    {
      file: [cinema2, cinema3, cinema4],
    },
    {
      file: [""],
    },
    {
      file: [playlist2, playlist3, playlist4],
    },
    {
      file: [board2, board3, board4],
    },
    {
      file: [frontway2, frontway3],
    },
  ];
  return (
    <>
      <Modal open={inputIndex !== 100} onClose={() => setNumber(100)}>
        <Box className="modal-box">
          <Carousel
            nextIcon={
              <IconButton sx={{ color: 'red' }}>
                <KeyboardArrowRight />
              </IconButton>
            }
            prevIcon={
              <IconButton sx={{ color: 'red' }}>
                <KeyboardArrowLeft />
              </IconButton>
            }
          >
            {imgList[inputIndex].file.map((item, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img className="d-block w-100" src={item} alt="First slide" />
                  <Carousel.Caption />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Box>
      </Modal>
    </>
  );
};

export default CarouselWithImg;
