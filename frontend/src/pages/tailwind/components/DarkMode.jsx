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
        <div className="absolute top-full mt-2 w-4 h-4 bg-black opacity-0  group-hover:opacity-100 transition-opacity duration-500">
        </div>
      </div>
    </>
  );
}

export default DarkMode;
