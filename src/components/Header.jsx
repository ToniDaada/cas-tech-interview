"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
const Header = ({ toggleSidebar }) => {
  // Now accepts toggleSidebar prop
  const [query, setQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false); // State for mobile search input visibility

  const onSubmit = function (e) {
    e.preventDefault();
    setQuery("");
    setShowSearchInput(false); // Hide search input after submission on mobile
  };

  const toggleSearch = () => {
    setShowSearchInput((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-2.5 bg-white rounded-xs mx-6 shadow-sm">
      {/* Left Section: Pages / Dashboard - Hidden when search is active on mobile */}
      <div
        className={`flex flex-col ${
          showSearchInput ? "hidden" : "flex"
        } md:flex`}
      >
        {" "}
        {/* Conditionally hide on mobile when search is active */}
        <h2 className="text-xs text-gray-800 inline" onClick={toggleSidebar}>
          {" "}
          <span className="text-gray-500 text-xxs">Pages / </span>
          Dashboard
        </h2>
        <h2 className="text-base font-bold text-gray-800">Dashboard</h2>
      </div>

      {/* Right Section: Mobile vs Desktop Views */}
      <div
        className={`flex items-center space-x-3 ${
          showSearchInput ? "flex-grow justify-end" : ""
        } md:flex-grow-0`}
      >
        {" "}
        {!showSearchInput && ( // Hide these elements when search is active on mobile
          <div className="flex items-center md:hidden">
            {/* Hamburger button for sidebar toggle (only visible when search is NOT active on mobile) */}
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-full transition-colors duration-200 hover:bg-gray-100"
              aria-label="Toggle sidebar"
            >
              <svg
                className="w-5 h-5 text-gray-600"
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

            {/* Mobile Search Toggle Button (visible when search input is not active) */}
            <button
              onClick={toggleSearch}
              className="p-1 rounded-full transition-colors duration-200 hover:bg-gray-100 ml-3"
              aria-label="Toggle search input"
            >
              <Image
                src="/dashboardicons/search.svg"
                alt="name"
                width={15}
                height={15}
                className=" text-gray-400"
              />
            </button>
          </div>
        )}
        {/* Search input when active on mobile, with a close button (and always on desktop) */}
        <form
          className={`relative ${
            showSearchInput ? "flex items-center flex-grow" : "hidden"
          } md:flex md:flex-grow-0`}
          onSubmit={onSubmit}
        >
          <Image
            src="/dashboardicons/search.svg"
            alt="name"
            width={15}
            height={15}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type here..."
            className="pl-9 pr-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 w-full text-xs"
          />
          {showSearchInput && ( // Only show close button when search is active on mobile
            <button
              type="button"
              onClick={() => setShowSearchInput(false)}
              className="ml-2 p-1 rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close search"
            >
              <svg
                className="w-5 h-5"
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
                ></path>
              </svg>
            </button>
          )}
        </form>
        {/* Desktop View */}
        <div className="hidden md:flex items-center space-x-3">
          {/* User Sign In */}
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs">
            <Image
              src="/dashboardicons/profile.svg"
              alt="name"
              width={15}
              height={15}
              className="text-xl"
            />
            <span>Sign In</span>{" "}
          </button>

          {/* Notifications */}
          <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <Image
              src="/dashboardicons/bell.svg"
              alt="name"
              width={15}
              height={15}
              className="text-xl"
            />
          </button>

          {/* Settings */}
          <button className="text-gray-600 hover:text-gray-900">
            <Image
              src="/dashboardicons/settings.svg"
              alt="name"
              width={15}
              height={15}
              className="text-xl"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
