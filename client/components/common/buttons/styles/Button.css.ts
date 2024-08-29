import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

/**
 * =======================
 * @description 버튼 유형
 * =======================
 */

export const primary = style({
  borderRadius: 50,
  backgroundColor: vars.colors.primary,
  padding: "4px 8px",
});

export const icon = style({
  backgroundColor: "transparent",
  width: "fit-content",
  height: "auto",
});
