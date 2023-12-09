import React, { ButtonHTMLAttributes } from "react";
import * as S from "./index.style";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
