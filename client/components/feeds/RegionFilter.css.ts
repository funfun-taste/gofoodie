import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const regionFilterContainer = style({
  position: "sticky",
  width: "100%",
  height: 48,
  top: 60,
  backgroundColor: vars.colors.white000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 20px",
  zIndex: 99,
  borderBottom: "1px solid transparent",
});

export const filterButton = style({
  border: `1px solid ${vars.colors.gray000}`,
  borderRadius: 20,
  padding: "0.25em 0.6em",
});

export const filterLists = style({
  position: "sticky",
  top: 108,
  borderBottom: "1px solid transparent",
  zIndex: 99,
});
