import { Box, Button } from "@mui/material";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import testImg from "../img/testImg.png";
import wordleImg from "../img/window.png";

type Props = {
  input: string;
  setText: (value: string) => void;
};

const CarouselWithImg = ({ input, setText }: Props) => {
  return (
    <>
      <Box>
        <Box sx={{ margin: "0 auto" }}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={testImg} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wordleImg}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Box>
      </Box>

      <Button variant="contained" color="primary" onClick={() => setText("")}>
        close
      </Button>
    </>
  );
};

export default CarouselWithImg;
