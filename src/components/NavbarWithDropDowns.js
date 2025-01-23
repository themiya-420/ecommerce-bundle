import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavbarWithDropdowns = ({
  menuItems = [],
  backgroundColor = "bg-yellow-500",
  activeColor = "bg-red-500",
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div
      className={`${backgroundColor} text-black text-sm dark:text-white shadow-lg`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* All Categories */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaBars className="h-6 w-6" />
          <span className="font-bold">ALL CATEGORIES</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(index)}
            >
              <button
                className={`px-4 py-2  hover:opacity-80 ${
                  activeDropdown === index && item.isActive ? activeColor : ""
                }`}
              >
                {item.title}
              </button>
              {/* Dropdown */}
              {activeDropdown === index && (
                <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-64 p-4 z-10">
                  {item.dropdownContent.map((content, i) => (
                    <div key={i} className="mb-4">
                      <a
                        href={content.link}
                        className="block font-bold hover:underline"
                      >
                        {content.title}
                      </a>
                      {content.image && (
                        <img
                          src={content.image}
                          alt={content.title}
                          className="mt-2 rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2 cursor-pointer">
          <FaBars className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default NavbarWithDropdowns;
