import { Box } from "@mui/system";
import green from "../img/drawings/color green-full.jpg";
import monster from "../img/drawings/color monster-full.jpg";
import judy from "../img/drawings/color judy-full.jpg";
import beasts from "../img/drawings/beasts.jpg";
import nik from "../img/drawings/color nik-full.jpg";
import prag from "../img/drawings/color prag-full.jpg";
import shadow from "../img/drawings/shadowEx.jpg";
import cat from "../img/drawings/color cat-full.jpg";
import spiritFarer from "../img/drawings/spiritfarerEx.jpg";
import redhood from "../img/drawings/red hood.jpg";
import roger from "../img/drawings/pencil rodger-full.jpg";
import matt from "../img/drawings/pencil matt-full.jpg";
import totoro from "../img/drawings/sketch totoro-full.jpg";
import man from "../img/drawings/sketch man-full.jpg";
import { Zoom } from "@mui/material";

type DrawingModalProps = {
  drawingIndexNum: number;
  setDrawingIndexNum: (value: number) => void;
};
const DrawingModal = ({
  drawingIndexNum,
  setDrawingIndexNum,
}: DrawingModalProps) => {
  const itemList = [
    beasts,
    green,
    monster,
    judy,
    roger,
    matt,
    prag,
    shadow,
    spiritFarer,
    redhood,
    nik,
    cat,
    totoro,
    man,
  ];
  return (
    <>
      {drawingIndexNum !== 100 && (
        <Box
          className="drawing-modal"
          onClick={() => {
            setDrawingIndexNum(100);
          }}
        >
          <Box className="drawing-box">
            <img src={itemList[drawingIndexNum]} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default DrawingModal;
