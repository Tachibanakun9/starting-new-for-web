"use client";

import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-75 backdrop-blur-md text-white fixed top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-4 py-2 shadow-lg">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-auto rounded-full"
            src="https://via.placeholder.com/150"
            alt="Web Prodigies"
          />
        </div>
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
          <a href="/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>
          <a href="/contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
        </div>
        <div className="hidden sm:flex sm:items-center">
          <a href="/checkout-product" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-sm font-medium">Get Pro</a>
        </div>
        <div className="sm:hidden">
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-black text-white mt-2 rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/blog" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Blog</a>
            <a href="/products" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="/contact-us" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <a href="/checkout-product" className="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-base font-medium">Get Pro</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
