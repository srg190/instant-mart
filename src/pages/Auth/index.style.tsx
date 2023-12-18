import { H1 } from "Components/Typography";
import styled from "styled-components";

export const Input = styled.input`
  padding: 1em;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  margin: 0.5em;
  color: ${({ theme }) => theme.color.text};
`;
export const Button = styled.button`
  padding: 0.9em;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  margin: 0.5em;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Add a transition effect */

  &:hover {
    background-color: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0%;
`;

export const ErrorPara = styled.p`
  font-size: small;
  color: red;
`;
