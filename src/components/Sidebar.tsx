import { FC, ReactNode } from "react";
import { SidebarBgAnim, SidebarMenuAnim } from "../lib/animations";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  show: boolean;
  handleClose(): void;
  children: ReactNode;
};

export const Sidebar: FC<Props> = ({ show, handleClose, children }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-slate-950 bg-opacity-30 backdrop-blur-sm"
      variants={SidebarBgAnim}
      animate={show ? "show" : "hide"}
      onClick={handleClose}
    >
      <motion.aside
        onClick={(e) => e.stopPropagation()}
        variants={SidebarMenuAnim}
        className="bg-white text-black w-72 dark:bg-slate-800 dark:text-white absolute right-0 h-screen overflow-y-scroll scrollbar-hidden p-2 sm:p-5"
      >
        <div className="w-full relative">
          <div
            className="absolute -right-2 top-2 text-2xl cursor-pointer text-right -mt-5"
            onClick={handleClose}
          >
            <AiFillCloseCircle />
          </div>
        </div>

        {children}
      </motion.aside>
    </motion.div>
  );
};
