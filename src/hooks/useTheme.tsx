import { useCallback, useEffect, useState } from "react";
import { themeT } from "../types";

export const useTheme = () => {
  const [theme, setTheme] = useState<themeT>("dark");

  const getLocalTheme = useCallback((): themeT => {
    if (!localStorage.theme) {
      localStorage.setItem("theme", theme);
      return theme;
    }
    return localStorage.theme;
  }, [theme]);

  const handleLocalTheme = useCallback(() => {
    const localTheme = getLocalTheme();

    if (
      localTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [getLocalTheme]);

  useEffect(() => {
    handleLocalTheme();
  }, [handleLocalTheme, theme]);

  const changeTheme = (theme: themeT) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return { theme, changeTheme };
};
