import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      element.classList.remove("light");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      element.classList.add("light");
    }
  }, [theme, element]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="group relative">
        <button
          onClick={toggleTheme}
          className="flex justify-center items-center"
        >
          {/* Icons based on the current theme */}
          <MdOutlineLightMode
            className={`${
              theme === "dark" ? "" : "hidden"
            } transition-all duration-200`}
          />
          <MdLightMode
            className={`${
              theme === "dark" ? "hidden" : ""
            } transition-all duration-200`}
          />
        </button>

        {/* This div will be displayed on button hover with a smooth opacity transition */}
        <div className="absolute right-[-105px] top-[-2px]  w-[100px] h-5 border-2 border-gray-200 dark:border-gray-400 rounded-md  opacity-0  group-hover:opacity-100 transition-color duration-200 text-[11px] flex items-center justify-center p-2 text-gray-400 ">
          Switch mode
        </div>
      </div>
    </>
  );
}

export default DarkMode;
