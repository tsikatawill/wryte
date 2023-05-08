import {
  Container,
  NavMenuLink,
  Sidebar,
  SidebarLink,
  ThemeToggle,
  UserButton,
} from ".";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/images/wryte-light.svg";
import { ROUTES } from "../lib/routes";
import { useState } from "react";
import { useUser } from "../hooks/useUser";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useUser();

  return (
    <nav>
      <Container>
        <div className="flex justify-between py-2 items-center">
          <Link to="/" className="logo w-24">
            <img src={Logo} width={400} height={200} alt="logo" />
          </Link>

          <ul className="nav-menu hidden gap-2 items-center md:flex ">
            {ROUTES.map((route) => {
              if (user && route.name !== "Login")
                return <NavMenuLink key={route.href} route={route} />;

              if (!user && !route.protectedRoute)
                return <NavMenuLink key={route.href} route={route} />;
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden block hover:scale-110 duration-75"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars size={20} className="rotate-180" />
            </button>

            <ThemeToggle />

            {user && <UserButton user={user} />}
          </div>
        </div>
      </Container>

      <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)}>
        <div className="flex flex-col gap-4 text-xl">
          {ROUTES.map((route) => {
            if (user && route.name !== "Login")
              return <SidebarLink key={route.href} route={route} />;

            if (!user && !route.protectedRoute)
              return <SidebarLink key={route.href} route={route} />;
          })}
        </div>
      </Sidebar>
    </nav>
  );
};
