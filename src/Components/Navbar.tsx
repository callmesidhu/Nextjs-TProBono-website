"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="text-white p-3 px-4">
      <div className="flex justify-between items-center max-w-7xl mx-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Image 
            src="/Images/logo.png" 
            alt="TProBono Logo" 
            width={100} 
            height={100} 
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#intro" className="text-2xl hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-2xl hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="text-2xl hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-2xl hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-2xl hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          id="menu-btn"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`z-50 justify-center items-center flex-col space-y-4 md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm  ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
        id="mobile-menu"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={closeMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <li>
          <a href="#intro" className="block text-center hover:text-gray-300" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="block text-center hover:text-gray-300" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#services" className="block text-center hover:text-gray-300" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="block text-center hover:text-gray-300" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="block text-center hover:text-gray-300" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
