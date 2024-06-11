import React, { useState } from "react";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";

const ThemeFrame = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handlerChangeTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <button
      className={`absolute right-10 top-5 w-8 h-8 p-1 rounded-full bg-gradient-to-tl from-primary-400 to-secondary-400 text-slate-200`}
      onClick={handlerChangeTheme}
    >
      <WiMoonAltWaningCrescent1 className={`w-full h-full transition-all duration-300 ${isDarkTheme ? "rotate-180" : ""}`} />
    </button>
  );
};

export default ThemeFrame;
