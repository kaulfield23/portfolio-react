import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import wordle2 from "../img/wordle2.png";
import wordle3 from "../img/wordle3.png";
import wordle4 from "../img/wordle4.png";
import cinema2 from "../img/cinema2.png";
import cinema3 from "../img/cinema3.png";
import cinema4 from "../img/cinema4.png";

type Props = {
  inputIndex: number;
  setNumber: (value: number) => void;
};

const CarouselWithImg = ({ inputIndex, setNumber }: Props) => {
  const imgList = [
    {
      file: [wordle2, wordle3, wordle4],
      text: `A limitless word guess game ${(
        <br />
      )}. The server will only send result of the guessing word, so user won't be able to cheat ${(
        <br />
      )} Users can see their scores in high score page.`,
    },
    {
      file: [cinema2, cinema3, cinema4],
      text: "Group project : cinema website",
    },
  ];
  return (
    <>
      <Modal open={inputIndex !== 100} onClose={() => setNumber(100)}>
        <Box className="modal-box">
          <Carousel>
            {imgList[inputIndex].file.map((item, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img className="d-block w-100" src={item} alt="First slide" />
                  <Carousel.Caption>
                    {/* <p>{imgList[inputIndex].text}</p> */}
                  </Carousel.Caption>
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
