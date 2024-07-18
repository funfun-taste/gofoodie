import {vars} from "@styles/theme.css";
import {style} from "@vanilla-extract/css";

export const postLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  height: "100%",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const postBodyContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  padding: "1em",
});

export const postOptionContainer = style({
  height: "60px !important",
  padding: "0.5em 1.25em",
  backgroundColor: vars.colors.white000,
  borderTop: "1px solid #f5f5f5",
});

export const locationItemContainer = style({
  width: "100%",
  padding: "0 1em",
  margin: "10px auto",
});

export const locationItemBox = style({
  width: "100%",
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 4,
  border: "1px solid #ededed",
  padding: "1em",
  margin: "10px auto",
});

export const removeLocationButton = style({
  width: '40px !important',
  height: '36px !important',
  borderRadius: '4px !important',
  border: '1px solid #d3d3d3'
})

export const avatarWrapper = style({
  width: 44,
  height: 44,
});

export const imagesContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyItems: "center",
  gap: 6,
  marginBottom: 40,
  padding: '0.2em 0.6em'
});

export const images = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

export const feedListsTitle = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #f5f5f5",
  padding: "0 2em",
});
