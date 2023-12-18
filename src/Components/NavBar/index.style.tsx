import SearchBar from "Components/SearchBar";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 0%;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const Li = styled.li`
  float: left;
`;

export const commom = styled.a`
  display: block;
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const A = styled(commom)`
  &:hover:not(.active) {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  &.active {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

export const SearchBarContainer = styled(commom)``;
