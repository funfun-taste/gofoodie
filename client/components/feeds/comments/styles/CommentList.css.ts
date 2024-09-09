import { style } from "@vanilla-extract/css";

export const commentListLayout = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: "1em 0",
});

export const commentItem = style({
  display: "flex",
  padding: "1em",
  border: "1px solid black",
});
