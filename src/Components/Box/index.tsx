import React from "react";
import { BoxStyle } from "./index.style";

const BOX: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BoxStyle>{children}</BoxStyle>;
};

export default BOX;
