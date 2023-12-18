import styled from "styled-components";

export const BoxStyle = styled.div`
  padding: 16px;
  border-radius: 4px;
  text-align: center;
  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
