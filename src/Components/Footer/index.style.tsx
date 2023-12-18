import styled from "styled-components";

export const FooterStyle = styled.footer`
  /* position: fixed; */
  width: 100%;
  height: 30vh;
  /* margin-top: 70vh; */
  /* width: 100%; */
  background-color: black;
  color: ${({ theme }) => theme.color.text};
`;

