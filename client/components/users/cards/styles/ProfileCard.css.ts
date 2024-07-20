import {vars} from "@styles/theme.css";
import {style} from "@vanilla-extract/css";

export const profileCardLayout = style({
  width: 144,
  height: 140,
  backgroundColor: vars.colors.white000,
  padding: 16,
  border: `1px solid ${vars.colors.gray300}`,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const thumbnailImageBox = style({
  width: 50,
  height: 50,
  borderRadius: "50%"
});

export const profileDescription = style({
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  lineHeight: "1.2em",
  width: 110,
  height: 10,
  borderRadius: 20
});
