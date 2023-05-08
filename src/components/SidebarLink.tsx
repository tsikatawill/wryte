import { FC } from "react";
import { NavLink } from "react-router-dom";
import { routeT } from "../types";

type SidebarLinkProps = {
  route: routeT;
};

export const SidebarLink: FC<SidebarLinkProps> = ({ route }) => {
  const { href, name, icon } = route;
  const activeStyles =
    "border-blue-500 font-bold dark:hover:bg-slate-950 bg-slate-200 dark:bg-slate-900  hover:bg-slate-300";
  const inactiveStyles =
    "border-transparent font-semibold dark:hover:bg-slate-900 hover:bg-slate-200";
  const defaultStyles =
    "border-l-2 font-semibold p-2 duration-300 p-2 hover:pl-5 flex items-center";

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
      <span className="w-10 text-blue-500">{icon && icon}</span>

      <span>{name}</span>
    </NavLink>
  );
};
