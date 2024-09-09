import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const profileBoxLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  padding: "2em 20px",
  gap: 10,
  textAlign: "center",
});

export const profileInfoBox = style({});
