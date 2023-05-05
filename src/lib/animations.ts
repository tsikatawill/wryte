import { Variants } from "framer-motion";

export const SidebarBgAnim: Variants = {
  show: {
    opacity: 1,
    pointerEvents: "all",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hide: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      duration: 0.25,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
};

export const SidebarMenuAnim = {
  show: {
    x: 0,
    transition: {
      delay: 0.25,
      ease: "easeOut",
    },
  },
  hide: {
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
