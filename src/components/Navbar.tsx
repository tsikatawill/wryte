import { Container, Sidebar, ThemeToggle } from ".";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "/images/wryte-light.svg";
import { ROUTES } from "../lib/routes";
import { useState } from "react";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <nav>
      <Container>
        <div className="flex justify-between py-2 items-center">
          <Link to="/" className="logo w-24">
            <img src={Logo} width={400} height={200} alt="logo" />
          </Link>

          <ul className="nav-menu hidden gap-2 items-center md:flex ">
            {ROUTES.map(({ href, name }) => (
              <NavLink
                to={href}
                key={href}
                title={name}
                className={({ isActive }) => {
                  return isActive
                    ? `border-b border-black font-bold  dark:border-white dark:hover:bg-slate-950 hover:bg-slate-300 p-2 duration-300`
                    : `dark:hover:bg-slate-950 hover:bg-opacity-40 font-semibold hover:bg-slate-200 border-transparent p-2 duration-300`;
                }}
              >
                {name}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center gap-2 hover:scale-105 duration-75">
            <button
              className="md:hidden block"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars size={20} className="rotate-180" />
            </button>

            <ThemeToggle />
          </div>
        </div>
      </Container>

      <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)}>
        <div className="flex flex-col gap-4 text-xl">
          {ROUTES.map(({ href, name }) => (
            <NavLink
              to={href}
              key={href}
              title={name}
              className={({ isActive }) => {
                return isActive
                  ? `border-l border-white font-bold dark:hover:bg-slate-900 bg-slate-200 dark:bg-slate-900  hover:bg-slate-300 p-2 hover:pl-3 duration-300`
                  : `dark:hover:bg-slate-900 font-semibold hover:bg-slate-200 p-2 hover:pl-3 duration-300`;
              }}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </Sidebar>
    </nav>
  );
};
