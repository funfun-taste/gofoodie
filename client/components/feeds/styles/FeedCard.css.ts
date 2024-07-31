import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const feedCardLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  padding: "1em",
  borderRadius: 2,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
});

export const feedUserBox = style({
  width: "100%",
});

export const profileBox = style({
  width: 44,
  height: 44,
  borderRadius: "50%",
  overflow: "hidden",
});

export const contentBox = style({
  margin: "16px auto",
  width: "100%",
  height: "auto",
  padding: "0.6em 0",
  borderRadius: 8,
});

export const imageBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px auto",
  borderRadius: 4,
});

export const images = style({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 4,
});

export const storeInfoBox = style({
  backgroundColor: "#FFF5EC",
  borderRadius: 8,
  border: "1px solid #ededed",
  padding: "1em",
  margin: "10px auto",
});

export const storeOptions = style({
  padding: "1em 0",
});

export const feedOptionList = style({
  position: "absolute",
  right: 22,
  border: `1px solid ${vars.colors.gray000}`,
  padding: "0.5em 0",
  borderRadius: 4,
  width: 100,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  backgroundColor: vars.colors.white000,
});
