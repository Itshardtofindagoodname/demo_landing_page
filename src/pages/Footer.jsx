import React from 'react';
import Logo from "../assets/RaenLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-black font-poppins py-8 px-4">
      <div className="mx-auto w-full flex flex-col md:flex-row justify-between">
        <div className="flex items-start flex-col mb-4 md:mb-0 gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-10"
          />
          <p className="text-gray-400 ml-2">Copyright © 2024 Okta. All rights reserved. Built by RAEN AI.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-0 md:ml-auto">
          <div className="text-gray-400 text-sm flex flex-row space-x-4">
            <a href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-black">
              Terms of Service
            </a>
            <a href="/" className="hover:text-black">
              © RAEN AI 2024
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
