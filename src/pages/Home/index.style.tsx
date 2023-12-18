import FlexBetween from "Components/FlexBox";
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

`