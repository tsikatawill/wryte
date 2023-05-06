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

export const SidebarMenuAnim: Variants = {
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

export const DrawPathAnim: Variants = {
  animate: {
    pathLength: [0, 1],
    fillOpacity: [0, 0.1, 0.2, 0.5, 0.8, 1],
    transition: { duration: 2 },
  },
  animatePath: (custom: number) => ({
    pathLength: [0, 1],
    transition: { duration: custom * 1 },
  }),
};

export const PathAppearAnim: Variants = {
  animate: (custom: number) => ({
    opacity: [0, 0.38],
    transition: { duration: 1, delay: custom },
  }),
};
