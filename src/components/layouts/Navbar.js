// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiUser, FiHome, FiUsers, FiSettings } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-white text-gray-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand/Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">CRUD</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-grow mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="ml-2 p-2 bg-blue-600 text-white hover:bg-blue-500 rounded-lg">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex items-center space-x-2">
            <FiHome />
            <a href="/" className="hover:text-blue-600">Home</a>
          </li>
          <li className="flex items-center space-x-2">
            <FiHome />
            <a href="/add-post" className="hover:text-blue-600">Add</a>
          </li>
         
          {/*<li className="flex items-center space-x-2">
            <FiUsers />
            <a href="/users" className="hover:text-blue-600">Edit</a>
          </li>
          <li className="flex items-center space-x-2">
            <FiSettings />
            <a href="/settings" className="hover:text-blue-600">Settings</a>
          </li>*/}
        </ul>


        {/* User Profile Icon */}
        <div className="relative">
          <button onClick={toggleProfileMenu} className="ml-6 flex items-center space-x-2">
            <FiUser size={24} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
              <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>
            {/*<li>
              <a href="/users" className="hover:text-blue-600">Users</a>
            </li>
            <li>
              <a href="/settings" className="hover:text-blue-600">Settings</a>
            </li>*/}
            <li>
              <a href="/add-book" className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg">
                + Create
              </a>
            </li>
          </ul>

          {/* Mobile Search Bar */}
          <div className="flex items-center p-4 bg-white shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="ml-2 p-2 bg-blue-600 text-white hover:bg-blue-500 rounded-lg">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
