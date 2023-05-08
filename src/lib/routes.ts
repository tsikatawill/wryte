import { FaNewspaper, FaPenFancy, FaSignInAlt } from "react-icons/fa";
import { routeT } from "../types";

export const ROUTES: routeT[] = [
  {
    name: "Blog Posts",
    href: "/posts",
    protectedRoute: false,
    icon: FaNewspaper({ size: 20 }),
  },
  {
    name: "Create Post",
    href: "/create-post",
    protectedRoute: true,
    icon: FaPenFancy({ size: 20 }),
  },
  {
    name: "Login",
    href: "/login",
    protectedRoute: false,
    icon: FaSignInAlt({ size: 20 }),
  },
];
