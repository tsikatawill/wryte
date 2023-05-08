import { FC } from "react";
import { NavLink } from "react-router-dom";
import { routeT } from "../types";

type NavMenuLinkProps = {
  route: routeT;
};

export const NavMenuLink: FC<NavMenuLinkProps> = ({ route }) => {
  const { href, name } = route;
  const activeStyles =
    "border-black font-bold dark:border-white dark:hover:bg-slate-950 hover:bg-slate-300";
  const inactiveStyles =
    "border-transparent dark:hover:bg-slate-950 hover:bg-opacity-40 hover:bg-slate-200";
  const defaultStyles = "border-b font-semibold p-2 duration-300";

  return (
    <NavLink
      to={href}
      key={href}
      title={name}
      className={({ isActive }) => {
        return isActive
          ? activeStyles + " " + defaultStyles
          : inactiveStyles + " " + defaultStyles;
      }}
    >
      {name}
    </NavLink>
  );
};
