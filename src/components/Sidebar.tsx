import { FC, ReactNode } from "react";
import { SidebarBgAnim, SidebarMenuAnim } from "../lib/animations";
import { AiFillCloseCircle } from "react-icons/ai";
import { UserButton } from ".";
import { motion } from "framer-motion";
import { useUser } from "../hooks/useUser";

type Props = {
  show: boolean;
  handleClose(): void;
  children: ReactNode;
};

export const Sidebar: FC<Props> = ({ show, handleClose, children }) => {
  const { user } = useUser();

  return (
    <motion.div
      className="fixed inset-0 bg-slate-950 bg-opacity-30 backdrop-blur-sm z-40"
      variants={SidebarBgAnim}
      animate={show ? "show" : "hide"}
      onClick={handleClose}
    >
      <motion.aside
        onClick={(e) => e.stopPropagation()}
        variants={SidebarMenuAnim}
        className="bg-white z-50 text-black w-72 sm:w-80 dark:bg-slate-800 dark:text-white absolute right-0 h-screen overflow-scroll scrollbar-hidden p-2 sm:p-5"
      >
        <div className="w-full relative">
          <div
            className="absolute -right-2 top-2 text-2xl cursor-pointer text-right -mt-5"
            onClick={handleClose}
          >
            <AiFillCloseCircle />
          </div>
        </div>

        <div className="flex justify-between gap-10 h-full flex-col">
          {children}

          {user && <UserButton user={user} type="wide" />}
        </div>
      </motion.aside>
    </motion.div>
  );
};
