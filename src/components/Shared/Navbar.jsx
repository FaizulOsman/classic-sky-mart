import React, { useState } from "react";
import TeamLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { FaCartPlus, FaUsers } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-[#1d1836]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative py-3">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  className="w-8 h-8 rounded-full"
                  src={TeamLogo}
                  alt="Your Company"
                />
              </Link>
            </div>
            {
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-3">
                  <Link
                    to="/"
                    className="flex gap-2 items-center bg-gray-900 text-white hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    <IoHomeOutline /> Home
                  </Link>
                  <Link
                    to="/products"
                    className="flex gap-2 items-center bg-gray-900 text-white hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    <FaCartFlatbedSuitcase /> Products
                  </Link>
                  <Link
                    to="/dashboard/products/create-product"
                    className="flex gap-2 items-center bg-green-700 hover:bg-green-500 text-white rounded-md px-3 py-2 text-sm"
                  >
                    <FaCartPlus /> Create Product
                  </Link>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      {showDropdown && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="flex gap-2 items-center hover:bg-gray-700 text-white hover:text-white rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <IoHomeOutline /> Home
            </Link>
            <Link
              to="/products"
              className="flex gap-2 items-center hover:bg-gray-700 text-white hover:text-white rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <FaCartFlatbedSuitcase /> Products
            </Link>
            <Link
              to="/dashboard/products/create-product"
              className="flex gap-2 items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
            >
              <FaCartPlus /> Create Product
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
