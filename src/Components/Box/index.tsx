import React from "react";
import { BoxStyle } from "./index.style";

interface BoxProps {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  display?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
  bgColor?: string;
  margin?: string;
  gap?: string;
  flexGrow?: string;
  flexWrap?: string;
}

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <BoxStyle {...rest}>{children}</BoxStyle>;
};

export default Box;
