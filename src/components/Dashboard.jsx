import React from "react";

const IRocketsPlaceholderImage =
  "https://placehold.co/600x400/3498db/ffffff?text=Team+Work";

const Dashboard = () => {
  return (
    // Main container for the two cards, centered and responsive
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-3 lg:flex-row gap-6 w-full max-w-6xl">
        {/* Card 1: Purity UI Dashboard */}
        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row relative">
          {/* Text content area */}
          <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
            <div>
              <p className="text-xs  text-gray-500  mb-1">
                Built by developers
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Purity UI Dashboard
              </h2>
              <p className="text-sm sm:text-base text-gray-600  mb-6">
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center font-semibold text-sm transition-colors duration-200"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Chakra UI logo/box on the right (or bottom on small screens) */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
