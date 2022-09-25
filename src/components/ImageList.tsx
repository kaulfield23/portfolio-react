import React, { useContext, useEffect, useRef, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import greenThum from "../img/drawings/color green-thum.jpg";
import monsterThum from "../img/drawings/color monster-thumb.jpg";
import judyThum from "../img/drawings/color judy-thumb.jpg";
import beasts from "../img/drawings/beasts.jpg";
import nikThum from "../img/drawings/color nik-thumb.jpg";
import pragThum from "../img/drawings/color prag-thumb.jpg";
import shadow from "../img/drawings/shadowEx.jpg";
import catThum from "../img/drawings/color cat-thumb.jpg";
import spiritFarer from "../img/drawings/spiritfarerEx.jpg";
import redhoodThum from "../img/drawings/red hood-thumb.jpg";
import rogerThum from "../img/drawings/pencil rodger-thumb.jpg";
import mattThum from "../img/drawings/pencil matt-thumb.jpg";
import totoroThum from "../img/drawings/sketch totoro-thumb.jpg";
import manThum from "../img/drawings/sketch man-thumb.jpg";

import { Box, Zoom } from "@mui/material";
import DrawingModal from "./DrawingModal";
import { MenuContext } from "./MenuContext";

const ImageListProject = () => {
  const [open, setOpen] = useState(false);
  const drawingRef = useRef<HTMLDivElement>(null);
  const [drawingIndexNum, setDrawingIndexNum] = useState(100);
  const itemList = [
    beasts,
    greenThum,
    monsterThum,
    judyThum,
    rogerThum,
    mattThum,
    pragThum,
    shadow,
    spiritFarer,
    redhoodThum,
    nikThum,
    catThum,
    totoroThum,
    manThum,
  ];
  const { switchMenuTo } = useContext(MenuContext);

  useEffect(() => {
    if (switchMenuTo === "Drawings" && drawingRef.current !== null) {
      drawingRef.current.scrollIntoView();
    }
    //intersection observer
    const observer = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setOpen(true);
      }
    });
    const currentObserver = drawingRef.current;
    if (drawingRef.current !== null) {
      observer.observe(drawingRef.current);
    }
    return () => {
      if (currentObserver) {
        observer.unobserve(currentObserver);
      }
    };
  }, [drawingRef, switchMenuTo]);
  return (
    <>
      <Box className="drawings">
        <Box
          sx={{
            width: { xs: 300, sm: 500, md: 800, lg: 1000, xl: 1200 },
            margin: {
              xs: "50px auto",
              sm: "200px auto",
            },
          }}
        >
          <h1 ref={drawingRef}>My drawings</h1>

          <ImageList variant="masonry" cols={3} gap={8}>
            {itemList.map((item, index) => (
              <Zoom
                in={open}
                style={{ transitionDelay: open ? `${index}00ms` : "0ms" }}
                key={index}
              >
                <ImageListItem
                  sx={{ cursor: "pointer" }}
                  className="drawings darken"
                  onClick={() => {
                    setDrawingIndexNum(index);
                  }}
                >
                  <img
                    src={`${item}?w=248&fit=crop&auto=format`}
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                  />
                </ImageListItem>
              </Zoom>
            ))}
          </ImageList>
        </Box>
      </Box>
      <DrawingModal
        drawingIndexNum={drawingIndexNum}
        setDrawingIndexNum={setDrawingIndexNum}
      />
    </>
  );
};

export default ImageListProject;
