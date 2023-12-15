import styled from "styled-components";
import { HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  display?: string;
  color?: string;
  bgColor?: string;
  margin?: string;
  gap?: string;
  flexGrow?: string;
  flexWrap?: string;
  top?: string;
  flexDirection?: string;
}

export const BoxStyle: React.FC<BoxProps> = styled.div`
  padding: 16px;
  border-radius: 4px;
  text-align: center;
  color: ${({ theme, color }) => color || theme.color.primary};
  font-weight: 700;
  background-color: ${({ theme, bgColor }) => bgColor || theme.color.text};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  width: ${(props) => props.width || "10%"};
  height: ${(props) => props.height || "10%"};
  margin: ${(props) => props.gap || props.margin || "0.5%"};
  flex-grow: ${(props) => props.flexGrow || "0"};
  display: ${(props) => props.display || "block"};
  flex-wrap: ${(props) => props.flexWrap || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  top: ${({ top }) => top || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
`;
