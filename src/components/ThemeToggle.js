import React, { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all`}
    >
      {/* Icons */}
      <div
        className={`${
          theme === "light" ? "translate-x-0" : "translate-x-6"
        } flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md transform transition-transform`}
      >
        {theme === "light" ? (
          <CiLight className="w-4 h-4 text-gray-800" />
        ) : (
          <CiDark className="w-4 h-4 text-gray-800" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
