import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.color.text};
`;
