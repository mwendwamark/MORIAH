import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="relative flex justify-between items-center px-12 py-8 hidden lg:flex">
        {/* Left navigation links */}
        <div className="flex space-x-16">
          <a href="#" className="text-[#25442C] hover:opacity-70 transition-opacity">
            Offer
          </a>
          <a href="#" className="text-[#25442C] hover:opacity-70 transition-opacity">
            Services
          </a>
        </div>

        {/* Horizontal line that spans across the entire navbar */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-[#25442C] w-full"></div> */}

        {/* Logo positioned in the center, overlapping the line */}
        <div className=" text-3xl font-bold text-[#25442C] font-['Mirage']  px-6 bg-[#f6f1e7]">
          MORIAH
        </div>

        {/* Right navigation links */}
        <div className="flex space-x-16 items-center">
          <a href="#" className="text-[#25442C] hover:opacity-70 transition-opacity">
            Testimonials
          </a>
          <NavLink to="/menu" className="text-[#25442C] hover:opacity-70 transition-opacity flex items-center">
            Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="relative flex justify-between items-center px-6 py-6 lg:hidden">
        {/* Logo on the left for mobile */}
        <div className="text-2xl font-bold text-[#25442C] font-['Mirage']">
          MORIAH
        </div>

        {/* Hamburger menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-[#25442C] focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Horizontal line below the mobile navbar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#25442C] w-full"></div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#f6f1e7] z-50 py-6 px-6 border-b border-[#25442C] lg:hidden">
          <div className="flex flex-col space-y-6">
            <a href="#" className="text-[#25442C] hover:opacity-70 transition-opacity">
              Offer
            </a>
            <a href="#" className="text-[#25442C] hover:opacity-70 transition-opacity">
              Services
            </a>
            <a href="#" className="text-[#25442C] hover:opacity-70 transition-opacity">
              Testimonials
            </a>
            <NavLink to="/menu" className="text-[#25442C] hover:opacity-70 transition-opacity">
              Menu
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;