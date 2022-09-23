import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import wordle2 from "../img/wordle2.png";
import wordle3 from "../img/wordle3.png";

export default function ImageListProject() {
  return (
    <ImageList sx={{ width: 500, height: 450, margin: "20px" }}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{ padding: "20px", display: "flex", flexWrap: "wrap" }}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: wordle2,
    title: "wordle2",
    author: "@bkristastucchio",
  },
  {
    img: wordle3,
    title: "wordle3",
    author: "@rollelflex_graphy726",
  },
];
