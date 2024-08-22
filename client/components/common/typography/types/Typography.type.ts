import React, {ComponentProps} from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "caption";
export type FontWeightType = 100 | 300 | 400 | 500 | 600 | 700;
export type FontColorType =
  | "black000"
  | "black100"
  | "white000"
  | "gray000"
  | "gray200"
  | "gray300"
  | "gray350"
  | "gray400"
  | 'gray500'
  | "primary"

export type LetterSpacing = "-2" | "-1.5" | "-1" | "-0.5" | "1";

export interface TypographyProps extends ComponentProps<"p"> {
  variant?: Variant;
  fontWeight?: FontWeightType;
  fontSize?: number;
  color?: FontColorType;
  letterSpacing?: LetterSpacing;
  lineHeight?: number;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
}
