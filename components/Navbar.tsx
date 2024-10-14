'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent bg-opacity-75 backdrop-blur-md text-white fixed top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-4 py-2 shadow-lg">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            src=""
            alt="Web Prodigies"
            width={32}
            height={32}
          />
        </div>
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link href="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
          <Link href="/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
          <Link href="/contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
        </div>
        <div className="hidden sm:flex sm:items-center">
          <Link href="/checkout-product" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-sm font-medium">Get Pro</Link>
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
            <Link href="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/blog" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link href="/products" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Products</Link>
            <Link href="/contact-us" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
            <Link href="/checkout-product" className="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-base font-medium">Get Pro</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;