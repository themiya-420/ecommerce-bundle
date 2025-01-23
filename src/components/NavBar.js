import React, { useState } from "react";
import { CiUser, CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({
  whisList = "/wishlist",
  cart = "/cart",
  buttonColor = "bg-yellow-500",
  logo = "https://placehold.co/1000x200",
  isLoggedIn = false,
  user = { email: "hello@email.com", name: "Hello There" }, // User info when logged in
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    alert("Logged out!");
    // Add logout functionality here
  };

  return (
    <nav className="bg-white dark:bg-gray-900 font-extralight text-black dark:text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center w-full max-w-md mx-4">
          <input
            type="text"
            className="w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-l-lg focus:outline-none"
            placeholder="What are you looking for?"
          />
          <button
            className={`${buttonColor} text-white hover:opacity-90 px-4 py-2 rounded-r-lg`}
          >
            <CiSearch className="h-5 w-5" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Your Account with Dropdown */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <CiUser className="h-6 w-6" />
              <span className="hidden sm:block">
                {isLoggedIn ? user.name : "Account"}
              </span>
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 text-sm z-10">
                {!isLoggedIn ? (
                  <>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Login
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign Up
                    </a>
                  </>
                ) : (
                  <>
                    <p className="px-4 py-2 text-gray-700 dark:text-gray-300">
                      {user.email}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <a href={whisList}>
            <div className="flex items-center space-x-2 cursor-pointer">
              <CiHeart className="h-6 w-6" />
              <span className="hidden sm:block">Wishlist</span>
            </div>
          </a>

          {/* Cart */}
          <a href={cart}>
            <div className="flex items-center space-x-2 cursor-pointer">
              <CiShoppingCart className="h-6 w-6" />
              <span className="hidden sm:block">Cart</span>
            </div>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
