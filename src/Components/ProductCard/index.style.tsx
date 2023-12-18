import Box from "Components/Box";
import Button from "Components/Button";
import styled from "styled-components";

export const BoxContainer = styled(Box)`
  width: 20%;
  height: 30%;
`;
export const BoxItem = styled(Box)`
  width: 20vw;
  height: 30vw;
`;

export const CartButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary};
  width: 20%;
  height: 5%;
  color: ${({ theme }) => theme.color.text};
`;

export const AggregateButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.text};
  color: ${({ theme }) => theme.color.secondary};
  width: 5%;
`;
export const AggregateContainer = styled(Box)`
  width: 40% !important;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
