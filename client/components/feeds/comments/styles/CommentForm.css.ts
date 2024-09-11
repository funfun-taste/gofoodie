import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const commentFormLayout = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundColor: vars.colors.backgroundColor,
  height: 100,
});

export const commentBox = style({
  position: "fixed",
  bottom: 64,
  backgroundColor: vars.colors.white000,
  width: 428,
  height: 116,
  padding: "1em",
  borderTop: `1px solid ${vars.colors.gray000}`,
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  paddingTop: 30,
});

export const commentInputText = style({
  height: 38,
  boxSizing: "border-box",
  width: "100%",
  padding: "0.2em 0.8em",
  backgroundColor: vars.colors.backgroundColor,
  outline: "none",
  borderRadius: 10,
  border: `1px solid ${vars.colors.gray000}`,
  color: vars.colors.black500,

  selectors: {
    "&:focus": {
      borderColor: vars.colors.primary,
      backgroundColor: vars.colors.white000,
    },
    "&::-webkit-search-cancel-button": {
      position: "relative",
      WebkitAppearance: "none",
      height: 16,
      width: 16,
      borderRadius: 10,
      color: vars.colors.white000,
      background: "url('/images/x-icon.png') center center no-repeat",
      backgroundSize: "50%",
      backgroundColor: vars.colors.backgroundColor,
      cursor: "pointer",
    },
  },
});

export const commentSubmitButton = style({
  width: 50,
  height: 38,

  backgroundColor: vars.colors.primary,
  borderRadius: 10,
  color: vars.colors.white000,
});
