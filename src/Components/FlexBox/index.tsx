import React from "react";
import styled from "styled-components";
import Box from "Components/Box";
import { HTMLAttributes } from "react";

interface FlexBetweenProps extends HTMLAttributes<HTMLDivElement> {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
}

const FlexBetween: React.FC<FlexBetweenProps> = styled(Box)`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  /* align-items: ${(props) => props.alignItems || "center"}; */
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

export default FlexBetween;
