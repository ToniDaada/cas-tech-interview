import React from "react";
// Removed import Image from "next/image"; as it's causing the error.
// Using standard <img> tag instead for broader compatibility.

const data = [
  {
    icon: "/statsicons/cart.svg",
    title: "Users",
    text: "32,984",
    percentage: 60,
  },
  {
    icon: "/statsicons/cart.svg",
    title: "Clicks",
    text: "2,42m",
    percentage: 80,
  },
  {
    icon: "/statsicons/cart.svg",
    title: "Sales",
    text: "2400",
    percentage: 20,
  },
  {
    icon: "/statsicons/cart.svg",
    title: "Item",
    text: "320",
    percentage: 55,
  },
];

export default function StatsSummary() {
  return (
    <>
      <div className="mt-8 px-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
        <p className="text-sm text-gray-400">
          <span className="text-emerald-500 font-medium">(+23)</span> than last
          week
        </p>

        {/* Stats Row */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center animate-fade-in-up`}
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <div className="flex items-center  w-[100%] ">
                <div className="bg-[#4FD1C5] p-3 items-center rounded-2xl mr-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px] object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-1  w-[100%]">
                {item.text}
              </h3>
              {/* Progress bar track (white backdrop) and fill (teal) */}
              <div className="w-full h-1 bg-gray-200 rounded mt-2">
                {" "}
                {/* White/light gray backdrop */}
                <div
                  className="h-full bg-[#4FD1C5] rounded animate-grow-bar" // Teal fill color for the progress
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-grow-bar {
          animation: scale-grow 4s ease-out forwards;
          transform-origin: left;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 2s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
