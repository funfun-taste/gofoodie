import { style } from "@vanilla-extract/css";

export const managementPageLayout = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const managementPageContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  alignItems: "center",
});
