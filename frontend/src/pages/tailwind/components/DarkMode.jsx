import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

function DarkMode() {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Reference to the root HTML element
  const element = document.documentElement;

  // Apply the theme to the document on component mount or when the theme changes
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

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
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
    </>
  );
}

export default DarkMode;
