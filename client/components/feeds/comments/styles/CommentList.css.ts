import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const commentListLayout = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1em 0",
  backgroundColor: vars.colors.backgroundColor,
});

export const commentItem = style({
  display: "flex",
  padding: "1em",
  border: "1px solid transparent",
  borderRadius: 2,
  gap: 4,
  background: "white",
  boxShadow: "0 0 16px rgb(50, 50, 50 / 12%)",
  backgroundColor: vars.colors.white000,
  maxWidth: "428px",
  width: "100%",
});
