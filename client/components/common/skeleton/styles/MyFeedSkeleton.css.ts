import {keyframes, style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

const loading = keyframes({
  "100%": {
    backgroundPosition: "-100% 0",
  },
});

export const myFeedSkeletonContainer = style({
  width: 200,
  height: 200,
  zIndex: 2,
  border: `1px solid ${vars.colors.gray300}`,
  borderRadius: 4
})

export const thumbnail = style({
  width: '100%',
  height: 100,
  borderRadius: '4px 4px 0 0px'
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6
});

export const content = style({
  width: 170,
  borderRadius: 20,
  height: 10,
})

export const skeletonOverlay = style({
  background:
    "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 20%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "100% 0",
  animation: `${loading} 1.2s infinite`,
});
