import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { WithChildrenProps } from "Components/Type/generalTypes";
import { Navigate } from "react-router-dom";

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const isAutenticated = useAppSelector((state) => state.user.isAutenticated);

  return isAutenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default RequireAuth;
