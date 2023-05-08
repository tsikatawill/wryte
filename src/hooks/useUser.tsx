import { getUser, logUserIn, logUserOut } from "../utils/userActions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userT } from "../types";

export const useUser = () => {
  const [user, setUser] = useState<userT | null>();
  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("Sure to logout?")) {
      logUserOut();
      toast.info("Logged out");
      navigate(0);
    }
  };

  const login: (user: userT) => void = (user) => {
    logUserIn(user);
    toast.success("Logged in");
    navigate("/");
  };

  useEffect(() => {
    setUser(getUser());
  }, []);

  return { user, logout, login };
};
