import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { WithChildrenProps } from "Components/Type/generalTypes";
import { Navigate } from "react-router-dom";

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = useAppSelector((state) => state.user.isAutenticated);

  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default RequireAuth;
