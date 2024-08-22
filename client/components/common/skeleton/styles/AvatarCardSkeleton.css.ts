import {keyframes, style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

const loading = keyframes({
  "100%": {
    backgroundPosition: "-100% 0",
  },
});

export const skeletonContainer = style({
  width: 144,
  height: 140,
  zIndex: 2,
  border: `1px solid ${vars.colors.gray300}`,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const avatar = style({
  width: 50,
  height: 50,
  borderRadius: "50%"
});

export const description = style({
  width: 110,
  height: 10,
  borderRadius: 20
});

export const skeletonOverlay = style({
  background:
    "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 20%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "100% 0",
  animation: `${loading} 1.2s infinite`,
});
