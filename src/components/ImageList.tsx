import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import greenThum from "../img/drawings/color green-thum.jpg";
import greenFull from "../img/drawings/color green-full.jpg";
import monsterThum from "../img/drawings/color monster-thumb.jpg";
import judyThum from "../img/drawings/color judy-thumb.jpg";
import beasts from "../img/drawings/beasts.jpg";
import banner from "../img/drawings/colorBanner.jpg";
import nikThum from "../img/drawings/color nik-thumb.jpg";
import pragThum from "../img/drawings/color prag-thumb.jpg";
import shadow from "../img/drawings/shadowEx.jpg";
import { Box } from "@mui/material";

export default function ImageListProject() {
  return (
    <>
      <Box
        className="drawing-title"
        sx={{ padding: { xs: "50px 0", sm: "200px 0" } }}
      >
        <h1>My drawings</h1>
        <img src={banner}></img>
      </Box>
      <Box
        sx={{
          width: { xs: 300, sm: 800 },
          height: 800,
          overflowY: "scroll",
          m: "50px auto",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

const itemData = [
  {
    img: beasts,
    title: "wordle2",
    author: "@bkristastucchio",
  },
  {
    img: greenThum,
    title: "wordle3",
    author: "@rollelflex_graphy726",
  },
  {
    img: monsterThum,
    title: "wordle3",
    author: "@rollelflex_graphy726",
  },
  {
    img: judyThum,
    title: "wordle3",
    author: "@rollelflex_graphy726",
  },
  {
    img: nikThum,
    title: "wordle3",
    author: "@rollelflex_graphy726",
  },
  {
    img: pragThum,
    title: "wordle3",
    author: "@rollelflex_graphy726",
  },
  {
    img: shadow,
    title: "wordle3",
    author: "@rollelflex_graphy726",
  },
];
