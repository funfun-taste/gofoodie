import {style} from "@vanilla-extract/css";

export const KeywordListLayout = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 16
});

export const KeywordLists = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 4,
  padding: '10px 0'
});

export const Keyword = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
})
