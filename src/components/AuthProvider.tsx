import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/userActions";

type Props = {
  children: ReactNode;
};
export const AuthProvider: FC<Props> = ({ children }) => {
  return !getUser() ? <Navigate to="/" /> : <>{children}</>;
};
