import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const customNavBarLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  overflow: "hidden",
  display: "flex",
  margin: "0 auto",
  height: "auto",
  borderRadius: 6,
});

export const navBarLists = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  overflow: "auto hidden",
  overflowX: "auto",
  gap: 16,
  paddingTop: 8,
  paddingBottom: 8,

  selectors: {
    "&:nth-child(1)": {
      paddingLeft: "20px !important",
    },
    "&:last-child": {
      paddingRight: "20px !important",
    },
    "&::-webkit-scrollbar": {
      width: "6px", // 스크롤바의 너비를 얇게 설정
      height: "6px", // 가로 스크롤바의 높이도 얇게 설정
    },
    "&::-webkit-scrollbar-thumb": {
      background: vars.colors.gray000, // 스크롤바의 색상 설정
      borderRadius: "4px", // 스크롤바의 모서리를 둥글게 설정
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: vars.colors.gray300, // 스크롤바에 마우스를 올렸을 때 색상 변경
    },
  },

  '@media': {
    '(max-width: 767px)': {
      "::-webkit-scrollbar": {
        display: "none",
      },
      msOverflowStyle: "none", // IE 및 Edge
      scrollbarWidth: "none", // Firefox
    },
  },
});
