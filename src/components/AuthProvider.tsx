import { FC, ReactNode, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};
export const AuthProvider: FC<Props> = ({ children }) => {
  const { user } = useUser();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user) {
      setRedirect(true);
    } else {
      setRedirect(false);
    }
  }, [user]);

  return redirect ? <Navigate to="/" /> : <>{children}</>;
};
