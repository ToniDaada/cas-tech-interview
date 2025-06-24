import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 bg-white  rounded-xl mx-6 mt-1">
      {/* Left Section: Pages / Dashboard */}
      <div className="flex flex-col">
        <h2 className="text-sm  text-gray-800 inline">
          {" "}
          <span className="text-gray-500 text-sm">Pages / </span>
          Dashboard
        </h2>
        <h2>Dashboard</h2>
      </div>

      {/* Right Section: Search, Notifications, Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative hidden md:block cursor-pointer">
          {" "}
          {/* Hide on small screens, show on medium and up */}
          <Image
            src="/dashboardicons/search.svg"
            alt="name"
            width={15}
            height={15}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Type here..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-64 text-sm"
          />
        </div>

        {/* User Sign In */}
        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
          <Image
            src="/dashboardicons/profile.svg"
            alt="name"
            width={15}
            height={15}
            className="text-xl"
          />
          <span className=" hidden sm:block">Sign In</span>{" "}
          {/* Hide on extra small screens */}
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
    </header>
  );
};

export default Header;
