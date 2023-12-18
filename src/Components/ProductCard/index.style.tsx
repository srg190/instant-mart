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

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  width: 40%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

export const Text = styled.p`
  margin: 0;
  color: #666;
`;

export const Rate = styled.p`
  margin: 0;
  font-weight: bold;
  color: #008000;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
