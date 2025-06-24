import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for the sales overview chart, approximating the visual in the screenshot.
// 'name' represents the month, 'year1Sales' is for the darker area, and 'year2Sales' for the teal area.
const data = [
  { name: "Jan", year1Sales: 500, year2Sales: 180 },
  { name: "Feb", year1Sales: 150, year2Sales: 220 },
  { name: "Mar", year1Sales: 150, year2Sales: 350 },
  { name: "Apr", year1Sales: 250, year2Sales: 360 },
  { name: "May", year1Sales: 200, year2Sales: 400 },
  { name: "Jun", year1Sales: 220, year2Sales: 450 },
  { name: "Jul", year1Sales: 250, year2Sales: 400 },
  { name: "Aug", year1Sales: 200, year2Sales: 300 },
  { name: "Sep", year1Sales: 100, year2Sales: 330 },
  { name: "Oct", year1Sales: 150, year2Sales: 220 },
  { name: "Nov", year1Sales: 180, year2Sales: 300 },
  { name: "Dec", year1Sales: 120, year2Sales: 420 },
];

const SalesOverView = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 font-inter">
      {/* Card-like container for the chart */}
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl">
        {/* Chart Header */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Sales overview
          </h2>
          <p className="text-green-500 text-sm md:text-base">
            (+5) more in 2021
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e0e0e0"
            />
            {/* X-Axis for months */}
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              className="text-xs sm:text-sm text-gray-600"
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              className="text-xs sm:text-sm text-gray-600"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="year2Sales"
              stroke="#4FD1C5"
              fillOpacity={0.8}
              fill="#4FD1C5"
              strokeWidth={2}
              name="Year 2 Sales" // Label for the tooltip
            />

            <Area
              type="monotone"
              dataKey="year1Sales"
              stroke="#2D3748"
              fillOpacity={0.6}
              fill="#2D3748" // Darker color
              strokeWidth={2}
              name="Year 1 Sales"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverView;
