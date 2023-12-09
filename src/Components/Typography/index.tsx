import styled from "styled-components";


export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
`;

export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
`;

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.typography.h4.fontFamily};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
`;

export const H5 = styled.h5`
  font-family: ${({ theme }) => theme.typography.h5.fontFamily};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
`;

export const H6 = styled.h6`
  font-family: ${({ theme }) => theme.typography.h6.fontFamily};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`;
