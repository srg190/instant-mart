import styled from "styled-components";

export const FooterStyle = styled.footer`
  margin-bottom: 0%;
  height: 30vh;
  /* width: 100%; */
  background-color: black;
  color: ${({ theme }) => theme.color.text};
`;

