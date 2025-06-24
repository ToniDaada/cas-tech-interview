// components/Footer.jsx
import React from "react";
// Removed: import Link from 'next/link';

const textColor = "text-[#4FD1C5]";

export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-sm text-gray-400 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center md:flex-row">
        <p className="mb-2 md:mb-0">
          &copy; {2021}, Made with ❤️ by{" "}
          <a href="#" className={`font-bold hover:underline ${textColor}`}>
            Creative Tim
          </a>{" "}
          &{" "}
          <a href="#" className={`font-bold  ${textColor}  hover:underline`}>
            Simmmple
          </a>{" "}
          for a better web.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-[#4FD1C5] hover:underline"
          >
            Creative Tim
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#4FD1C5] hover:underline"
          >
            Simmple
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#4FD1C5] hover:underline"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#4FD1C5] hover:underline"
          >
            License
          </a>
        </div>
      </div>
    </footer>
  );
}
