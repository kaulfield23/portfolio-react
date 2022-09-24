import React, { useState } from "react";
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

import { Box } from "@mui/material";
import DrawingModal from "./DrawingModal";

const ImageListProject = () => {
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
          <h1>My drawings</h1>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemList.map((item, index) => (
              <ImageListItem
                key={index}
                sx={{ cursor: "pointer" }}
                className="drawings"
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
