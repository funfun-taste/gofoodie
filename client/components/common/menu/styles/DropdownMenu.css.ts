import {style, styleVariants } from "@vanilla-extract/css";

export const dropdownMenuLayout = style({
  position: 'relative',
  width: 'auto',
  display: 'inline-block',
});

// variant에 따라 다른 버튼 스타일 정의
const baseButton = style({
  border: 'none',
  borderRadius: 4,
  padding: '0.6em 1em',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  transition: 'background-color 0.3s ease',

  selectors: {
    '&:focus': {
      outline: "none",
    },
  }
});

export const dropdownMenu = style({
  listStyle: 'none',
  padding: '0.5em 0',
  margin: 0,
  position: 'absolute',
  top: 'calc(100% + 0.5em)',
  left: 0,
  width: '100%',
  backgroundColor: 'white',
  border: '1xp solid rgba(0,0,0,0.1)',
  borderRadius: 8,
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  zIndex: 1
})

export const dropdownItem = style({
  padding: '0.6em 1em',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  selectors: {
    '&:hover': {
      backgroundColor: '#f5f5f5'
    }
  }
})

export const dropdownButtonVariants = styleVariants({
  default: [
    baseButton,
    {
      width: '100%',
      height: 40,
      backgroundColor: "#1976d2",
      color: 'white',
      fontSize: '1em',

      selectors: {
        '&:hover': {
          backgroundColor: '#115293'
        },
      }
    },
  ],
  icon: [
    baseButton,
    {
      width: 'fit-content',
      height: 'auto',
      backgroundColor: 'transparent',
      padding: 0,
      color: '#989898',

      selectors: {
        '&:hover': {
          backgroundColor: 'transparent'
        },
      }
    },
  ],
});