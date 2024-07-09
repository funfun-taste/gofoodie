import {CSSProperties} from "react";

export interface FlexProps {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: number | string;
  width?: string | number;
  height?: string | number;
}
