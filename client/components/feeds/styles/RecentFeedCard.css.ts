import {style} from "@vanilla-extract/css";

export const recentFeedCardLayout = style({
  width: 210,
  height: 220,
  backgroundColor: "#FFFFFF",
  borderRadius: 10,
  border: "1px solid #F4F4F4",
  padding: 20,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
});

export const recentFeedThumbnailImageBox = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFE4D1",
  borderRadius: 8,
  overflow: "hidden",
  marginBottom: 12,
});

export const thumbnailImage = style({
  display: "block",
  width: "100%",
  height: 96,
  objectFit: "cover",
});

export const thumbnailCardContentBox = style({
  width: "100%",
  backgroundColor: "#FFF5EC",
  padding: 10,
  borderRadius: 8,
  marginTop: 12,
});

export const thumbnailCardContent = style({
  color: "#333333",
  fontSize: "0.9em",
  lineHeight: "1.4em",
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
});

export const shopTitle = style({
  color: "#FF7101",
  fontWeight: "bold",
  fontSize: "1em",
  marginBottom: 4,
});

export const shopDetails = style({
  display: "flex",
  flexDirection: "row",
  gap: 4,
  fontSize: "0.8em",
  color: "#666666",
});

export const shopCategory = style({
  color: "#FF7101",
});
