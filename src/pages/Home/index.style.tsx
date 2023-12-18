import Box from "Components/Box";
import FlexBetween from "Components/FlexBox";
import { H4, H6 } from "Components/Typography";
import styled from "styled-components";

export const LeftBox = styled(FlexBetween)`
  width: 30%;
`;
export const RightBox = styled(FlexBetween)`
  width: 50%;
`;
export const Div = styled.div`
  height: 50%;
  width: 50%;
  background-color: red;
  color: white;
`;
export const FlexJustify = styled(FlexBetween)`
  display: flex !important;
`;

export const CategoryBox = styled(Box)`
  padding: 8px;
  border-radius: 20px;
  text-align: center;
  width: 80%;
  margin: 7px;
  display: block;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.text};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CategoryContainer = styled(Box)`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ProductContainer = styled(Box)`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SubCatText = styled(H6)`
  margin-top: 5px;
  margin-bottom: 10px;
`;
