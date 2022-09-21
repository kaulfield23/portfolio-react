import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomText = styled(Typography, {
  shouldForwardProp: (props) => props !== "sx",
})(() => ({
  color: "black",
  fontSize: "15px",
  fontFamily: "Dosis",
  "&:hover": {
    color: "primary",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#primary",
    fontWeight: "bold",
  },
}));
