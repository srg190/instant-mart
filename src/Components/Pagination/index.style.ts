import styled from "styled-components";

export const Select = styled.select`
  border: none;
  width: 80%;
  height: 60%;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 4px;
`;
