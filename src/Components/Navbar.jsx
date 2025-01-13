import React, { useState, useRef } from "react";
import { IoMenu, IoLocationOutline } from "react-icons/io5";
import { FaHome, FaMotorcycle, FaBolt, FaCalculator } from "react-icons/fa";
import { MdSell, MdReviews, MdElectricScooter } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import logo from '../Images/bikewale-logo-new-header.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-2 shadow-md bg-white">
        {/* Left Section: Menu and Logo */}
        <div className="flex items-center space-x-2">
          {/* Hamburger menu */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            <IoMenu className="h-6 w-6 text-gray-600" />
          </div>
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-32"
            />
          </div>
        </div>

        {/* Right Section: Search, Location, Login */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-full max-w-sm">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoLocationOutline className="ml-2 h-6 w-6 text-gray-600" />
          </div>

          {/* Login Button */}
          <button className="flex items-center space-x-1 text-gray-800 text-sm font-medium">
            <p>Login</p>
          </button>
        </div>
      </header>

      {/* Mobile Responsive Search Section */}
      <div className="flex md:hidden items-center w-full p-4 bg-gray-50">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <IoLocationOutline className="ml-2 h-6 w-6 text-gray-600" />
      </div>

      {/* Sidebar Navigation Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <div
            ref={menuRef}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg overflow-y-auto"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <FaHome className="h-5 w-5" />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <FaMotorcycle className="h-5 w-5" />
                <span>New Bikes</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <MdElectricScooter className="h-5 w-5" />
                <span>New Scooters</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <FaBolt className="h-5 w-5" />
                <span>Electric Bikes</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <MdSell className="h-5 w-5" />
                <span>Sell Bikes</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <MdReviews className="h-5 w-5" />
                <span>Reviews</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <BsFileEarmarkText className="h-5 w-5" />
                <span>News, Videos & Tips</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-500">
                <FaCalculator className="h-5 w-5" />
                <span>EMI Calculator</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
