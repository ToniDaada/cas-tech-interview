// "use client";

// import React from "react";
// import { useState } from "react";
// import {
//   HomeIcon,
//   TableCellsIcon,
//   CreditCardIcon,
//   DocumentTextIcon,
//   UserIcon,
//   ArrowRightOnRectangleIcon,
//   RocketLaunchIcon,
//   QuestionMarkCircleIcon,
// } from "@heroicons/react/24/outline";

// const navItems = [
//   { name: "Dashboard", icon: HomeIcon, href: "/" },
//   { name: "Tables", icon: TableCellsIcon, href: "/" },
//   { name: "Billing", icon: CreditCardIcon, href: "/" },
//   { name: "RTL", icon: DocumentTextIcon, href: "/" },
// ];

// const accountPages = [
//   { name: "Profile", icon: UserIcon, href: "/" },
//   { name: "Sign In", icon: ArrowRightOnRectangleIcon, href: "/" },
//   { name: "Sign Up", icon: UserIcon, href: "/" },
// ];

// export default function Sidebar({ isOpen, toggleSidebar }) {
//   return (
//     <>
//       {isOpen ? (
//         <aside
//           className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out z-40 p-4 flex flex-col
//       ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
//         >
//           <div className="pb-4 border-b border-gray-200 flex items-center justify-between">
//             <h1 className="text-xl font-bold text-gray-900">
//               Purity UI Dashboard
//             </h1>
//             {/* Toggle button for mobile */}
//             <button
//               onClick={toggleSidebar}
//               className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100"
//             >
//               {isOpen && (
//                 // 'X' icon when sidebar is open
//                 <svg
//                   className="w-6 h-6 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               )}
//             </button>
//           </div>

//           <nav className="mt-6 flex-grow">
//             <ul>
//               {navItems.map((item) => (
//                 <li key={item.name} className="mb-2">
//                   <a
//                     href={item.href}
//                     className="flex items-center p-3 rounded-xl text-gray-700 transition-all duration-300 ease-in-out
//                            hover:bg-gradient-to-br hover:from-green-400 hover:to-[#4fd1c5] hover:text-white group"
//                   >
//                     <item.icon
//                       className="w-5 h-5 mr-3
//                   text-[#4FD1C5]
//                 transition-colors duration-300 group-hover:text-white"
//                     />
//                     <span className="font-medium">{item.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             <h2 className="text-xs uppercase text-gray-400 font-semibold mt-8 mb-4">
//               Account Pages
//             </h2>
//             <ul>
//               {accountPages.map((item) => (
//                 <li key={item.name} className="mb-2">
//                   <a
//                     href={item.href}
//                     className="flex items-center p-3 rounded-xl text-gray-700 transition-all duration-300 ease-in-out
//                            hover:bg-gradient-to-br hover:from-green-400 hover:to-[#4fd1c5] hover:text-white group"
//                   >
//                     <item.icon className="w-5 h-5 mr-3 text-[#4FD1C5] transition-colors duration-300 group-hover:text-white" />
//                     <span className="font-medium">{item.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Need Help? section */}
//           <div className="bg-gradient-to-br from-green-400 to-[#4FD1C5] rounded-xl p-4 text-white text-center shadow-lg transition-transform duration-300 hover:scale-[1.05]">
//             <QuestionMarkCircleIcon className="w-10 h-10 mx-auto mb-3" />
//             <h3 className="font-bold text-lg mb-1">Need help?</h3>
//             <p className="text-sm opacity-90 mb-4">Please check our docs</p>
//             <button className="bg-white text-[#4FD1C5] font-semibold py-2 px-6 rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg">
//               DOCUMENTATION
//             </button>
//           </div>
//         </aside>
//       ) : (
//         <button onClick={toggleSidebar}>
//           <svg
//             className="w-6 h-6 text-gray-600"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       )}
//     </>
//   );
// }

"use client";

import React from "react";
import {
  HomeIcon,
  TableCellsIcon,
  CreditCardIcon,
  DocumentTextIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  RocketLaunchIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Dashboard", icon: HomeIcon, href: "#dashboard" }, // Using hash links for client-side demo
  { name: "Tables", icon: TableCellsIcon, href: "#tables" },
  { name: "Billing", icon: CreditCardIcon, href: "#billing" },
  { name: "RTL", icon: DocumentTextIcon, href: "#rtl" },
];

const accountPages = [
  { name: "Profile", icon: UserIcon, href: "#profile" },
  { name: "Sign In", icon: ArrowRightOnRectangleIcon, href: "#signin" },
  { name: "Sign Up", icon: UserIcon, href: "#signup" },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out z-40 p-4 flex flex-col
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="pb-3 border-b border-gray-200 flex items-center justify-between">
        {" "}
        {/* Adjusted padding */}
        <h1 className="text-sm font-bold text-gray-900">
          {" "}
          {/* Smaller text size */}
          Purity UI Dashboard
        </h1>
        {/* Toggle button inside sidebar - always shows 'X' for closing */}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-full transition-colors duration-200 hover:bg-gray-100" // Smaller padding
          aria-label="Close sidebar"
        >
          <svg
            className="w-5 h-5 text-gray-600" // Smaller icon size
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
      </div>

      <nav className="mt-4 flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-1">
              <a
                href={item.href}
                className="flex items-center p-2 rounded-xl text-xs text-gray-700 transition-all duration-300 ease-in-out
                           hover:bg-gradient-to-br hover:from-green-400 hover:to-[#4fd1c5] hover:text-white group"
              >
                <item.icon
                  className="w-4 h-4 mr-2
                  text-[#4FD1C5]
                transition-colors duration-300 group-hover:text-white"
                />
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-xxs uppercase text-gray-400 font-semibold mt-4 mb-2">
          {" "}
          Account Pages
        </h2>
        <ul>
          {accountPages.map((item) => (
            <li key={item.name} className="mb-1">
              {" "}
              <a
                href={item.href}
                className="flex items-center p-2 rounded-xl text-xs text-gray-700 transition-all duration-300 ease-in-out
                           hover:bg-gradient-to-br hover:from-green-400 hover:to-[#4fd1c5] hover:text-white group" // Smaller text and padding
              >
                <item.icon className="w-4 h-4 mr-2 text-[#4FD1C5] transition-colors duration-300 group-hover:text-white" />{" "}
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Need Help? section */}
      <div className="bg-gradient-to-br from-green-400 to-[#4FD1C5] rounded-xl p-3 text-white text-center shadow-lg transition-transform duration-300 hover:scale-[1.03]">
        <QuestionMarkCircleIcon className="w-8 h-8 mx-auto mb-2" />{" "}
        <h3 className="font-bold text-base mb-0">Need help?</h3>{" "}
        <p className="text-xs opacity-90 mb-3">Please check our docs</p>{" "}
        <button className="bg-white text-[#4FD1C5] font-semibold py-1.5 px-4 rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg text-xs">
          DOCUMENTATION
        </button>
      </div>
    </aside>
  );
}
