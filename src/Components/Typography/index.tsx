import styled from "styled-components";

interface Style {
  width?: string;
  marginTop?: string;
  marginDown?: string;
}

export const H1 = styled.h1<Style>`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  width: ${({ width }) => width || ""};
`;

export const H2 = styled.h2<Style>`
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
`;

export const H3 = styled.h3<Style>`
  font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
`;

export const H4 = styled.h4<Style>`
  font-family: ${({ theme }) => theme.typography.h4.fontFamily};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  margin-top: ${({ marginTop }) => marginTop || "5px"};
  margin-bottom: ${({ marginDown }) => marginDown || "5px"};
`;

export const H5 = styled.h5<Style>`
  font-family: ${({ theme }) => theme.typography.h5.fontFamily};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
`;

export const H6 = styled.h6<Style>`
  font-family: ${({ theme }) => theme.typography.h6.fontFamily};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  margin-top: ${({ marginTop }) => marginTop || "5px"};
  margin-bottom: ${({ marginDown }) => marginDown || "5px"};
`;
