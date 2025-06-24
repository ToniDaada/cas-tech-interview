import React from "react";
import StatsSummary from "./StatsSummary";

const BarChart = () => {
  const barData = [
    { value: 150, label: "0" },
    { value: 120, label: "50" },
    { value: 100, label: "100" },
    { value: 80, label: "150" },
    { value: 130, label: "200" },
    { value: 110, label: "250" },
    { value: 90, label: "300" },
    { value: 140, label: "350" },
    { value: 70, label: "400" },
    { value: 125, label: "450" },
    { value: 105, label: "500" },
  ];

  const maxBarHeight = 150;

  return (
    <>
      <div className="bg-gradient-to-br from-[#313860] to-[#151928] p-6 rounded-xl shadow-md w-full h-80 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-white text-lg font-semibold">Active Users</h3>
          <p className="text-gray-300 text-sm flex items-center">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
            <span className="font-bold">+23%</span>{" "}
            <span className="ml-1 opacity-75">than last week</span>
          </p>
        </div>

        <div className="relative flex-grow flex items-end pb-4 pl-8 pr-4">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-gray-400 text-xs py-2">
            {[0, 100, 200, 300, 400].map((val, index) => (
              <span key={index} className="text-right pr-2">
                {val}
              </span>
            ))}
          </div>

          <div className="flex items-end justify-around flex-grow h-full w-full">
            {barData.map((bar, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center mx-1"
                style={{
                  height: `${(bar.value / maxBarHeight) * 100}%`,
                  width: "5px",
                }}
              >
                <div className="animated-bar bg-[#FFFFFF] rounded-t-sm w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <StatsSummary />
      </div>

      <style jsx>{`
        @keyframes growUp {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        .animated-bar {
          animation: growUp 1s ease-out forwards;
          transform-origin: bottom;
        }
      `}</style>
    </>
  );
};

export default BarChart;
