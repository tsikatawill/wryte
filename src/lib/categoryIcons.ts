import { FaBriefcase, FaCogs, FaGlobeAfrica, FaPenFancy } from "react-icons/fa";
import { ReactNode } from "react";
import { postCategoryT } from "../types";

export const CATEGORYICONS: {
  category: postCategoryT;
  icon: ReactNode;
  color: string;
}[] = [
  {
    category: "Frontend",
    icon: FaGlobeAfrica({ size: 20 }),
    color: "bg-cyan-500",
  },
  {
    category: "Backend",
    icon: FaCogs({ size: 20 }),
    color: "bg-red-500",
  },
  { category: "UI/UX", icon: FaPenFancy({ size: 20 }), color: "bg-slate-500" },
  {
    category: "Product Management",
    icon: FaBriefcase({ size: 20 }),
    color: "bg-purple-500",
  },
];
