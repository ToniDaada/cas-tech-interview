import React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-wrap gap-6 m-5 mt-6 items-stretch">
      {/* Left Card */}
      <div className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-xl shadow p-6 sm:flex justify-between items-center">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">Built by Developers</p>
          <h2 className="text-lg font-semibold">Purity UI Dashboard</h2>
          <p className="text-sm text-gray-500 mt-2">
            From simple cards, typography to complex elements, you will find the
            full documentation.
          </p>
          <a
            href="#"
            className="mt-3 inline-block text-sm font-medium text-blue-500 hover:underline"
          >
            Read more →
          </a>
        </div>

        <div className="ml-4 flex-shrink-0 w-28 sm:w-36 md:w-44">
          <img
            src="/chakra.svg"
            alt="Chakra Logo"
            className="w-full h-auto animate-pulse"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Card */}
      <div className="w-full md:w-[calc(50%-0.75rem)] relative rounded-xl overflow-hidden shadow min-h-[250px] group cursor-pointer">
        <img
          src="/background.jpg"
          alt="Team Working"
          className="absolute inset-0 w-full h-full object-cover rounded-xl
                     transition-transform duration-500 group-hover:scale-105" // Animation on hover
          loading="lazy"
        />
        <div className="absolute inset-0  bg-opacity-40 p-6 flex flex-col text-white rounded-xl">
          {" "}
          {/* Removed justify-end */}
          {/* Title and paragraph at the top */}
          <div>
            <h2 className="text-lg font-semibold">Work with the Rockets</h2>
            <p className="text-sm text-gray-200 mt-2">
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who takes the opportunity first.
            </p>
          </div>
          {/* Read more link pushed to the bottom */}
          <a
            href="#"
            className="mt-auto inline-block text-sm font-medium text-white underline" // Added mt-auto
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}
