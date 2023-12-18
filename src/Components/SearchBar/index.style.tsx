import styled from "styled-components";

export const Input = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: none;
  background-color: ${({ theme }) => theme.color.secondary};
  height: 1rem;
  color: ${({ theme }) => theme.color.text};
  padding-left: 15px;
`;
