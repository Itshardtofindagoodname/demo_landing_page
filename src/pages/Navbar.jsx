import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/RaenLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 font-poppins left-0 w-full bg-[#121212] bg-opacity-70 backdrop-blur z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="mr-2 h-14" />
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-400 hover:text-gray-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://raen.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-normal text-gray-300 hover:text-white"
          >
            About
          </a>
          <Link
            to="how-to-start"
            smooth={true}
            duration={700}
            className="cursor-pointer font-normal text-gray-300 hover:text-white"
          >
            How to Start
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={700}
            className="cursor-pointer font-normal text-gray-300 hover:text-white"
          >
            Pricing
          </Link>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 inset-x-0 bg-[#121212] bg-opacity-90 backdrop-blur p-4 z-40 rounded-md shadow-lg"
            >
              <a
                href="https://raen.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="block py-2 font-normal text-gray-500 hover:text-gray-900"
              >
                About
              </a>
              <Link
                to="how-to-start"
                smooth={true}
                duration={700}
                onClick={toggleMenu}
                className="block py-2 font-normal text-gray-500 hover:text-gray-900"
              >
                How to Start
              </Link>
              <Link
                to="pricing"
                smooth={true}
                duration={700}
                onClick={toggleMenu}
                className="block py-2 font-normal text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
