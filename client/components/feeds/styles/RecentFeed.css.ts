import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const recentFeedLayout = style({
  marginTop: 10,
  backgroundColor: vars.colors.white000,
})
export const recentFeedTitleWrapper = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px 20px",
  position: "relative",
});

export const recentFeedTitle = style({
  fontSize: "1.8em",
  fontWeight: 700,
  color: vars.colors.primary,
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
});

export const recentFeedListLayout = style({
  marginBottom: '1.25em',
});

