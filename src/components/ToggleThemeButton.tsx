"use client";

import { useState } from "react";
import { THEME_KEY } from "@/utils/theme";
import { IconButton } from "@/components/buttons/IconButton";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Props = {
  initialTheme: string;
};

export default function ToggleThemeButton({ initialTheme }: Props) {
  const [theme, setTheme] = useState(initialTheme);

  const handleChangeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    document.body.dataset.theme = nextTheme;

    const maxAge = 60 * 60 * 24 * 7;
    document.cookie = `${THEME_KEY}=${nextTheme}; max-age=${maxAge}; path=/`;
  };

  return (
    <IconButton onClick={handleChangeTheme}>
      {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </IconButton>
  );
}
