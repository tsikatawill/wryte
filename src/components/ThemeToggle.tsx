import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { MotionProps, motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: FC = () => {
  const { changeTheme, theme } = useTheme();

  return (
    <>
      {theme === "dark" && (
        <AnimatedToggle key="dark" onClick={() => changeTheme("light")}>
          <FaSun />
        </AnimatedToggle>
      )}

      {theme === "light" && (
        <AnimatedToggle key="light" onClick={() => changeTheme("dark")}>
          <FaMoon />
        </AnimatedToggle>
      )}
    </>
  );
};

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const AnimatedToggle: FC<ButtonProps> = ({ children, ...rest }) => (
  <motion.button
    {...rest}
    initial={{ rotate: 360, opacity: 1 }}
    whileHover={{
      rotate: 720,
      transition: { duration: 0.8, ease: "easeOut" },
    }}
    animate={{
      opacity: [0, 1],
      transition: { duration: 0.2, ease: "easeOut" },
    }}
    whileTap={{
      background: "rgba(255,255,255,0.5)",
    }}
    className="w-8 h-8 grid text-xl place-content-center rounded-full"
  >
    {children}
  </motion.button>
);
