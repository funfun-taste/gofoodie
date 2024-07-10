import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const filterButton = style({
  border: `1px solid ${vars.colors.gray000}`,
  borderRadius: 20,
  padding: "0.25em 0.6em",
});