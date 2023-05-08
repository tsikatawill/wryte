import { userT } from "../types";

export const getUser: () => userT | null = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);

  if (!user) return null;
  return user;
};

export const logUserIn: (user: userT) => void = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const logUserOut = () => {
  localStorage.removeItem("user");
};
