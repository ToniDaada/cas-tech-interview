import React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-wrap gap-6 m-5 mt-6 items-stretch">
      {/* Left Card */}
      <div className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-xl shadow p-6 sm:flex justify-between items-center">
        {/* Flex container for text content: flex-col to stack items vertically, h-full to take full height */}
        <div className=" md:flex-1 md:flex md:flex-col h-full">
          <div>
            {" "}
            {/* Group top content together to push 'Read more' down */}
            <p className="text-sm text-gray-500 mb-1">Built by Developers</p>
            <h2 className="text-lg font-semibold">Purity UI Dashboard</h2>
            <p className="text-sm text-gray-500 mt-2">
              From simple cards, typography to complex elements, you will find
              the full documentation.
            </p>
          </div>
          {/* 'Read more' link pushed to the bottom using mt-auto */}
          <a
            href="#"
            className="mt-auto inline-block text-sm font-medium text-black-500 hover:underline"
          >
            Read more →
          </a>
        </div>

        {/* Image Section */}
        <div className="ml-4 flex-shrink-0 w-28 sm:w-36 md:w-44">
          <img
            src="https://placehold.co/150x150/ffffff/000000?text=Chakra" // Placeholder for /chakra.svg
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
                     transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0  bg-opacity-40 p-6 flex flex-col text-white rounded-xl">
          {" "}
          <div>
            <h2 className="text-lg font-semibold">Work with the Rockets</h2>
            <p className="text-sm text-gray-200 mt-2">
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who takes the opportunity first.
            </p>
          </div>
          <a
            href="#"
            className="mt-auto inline-block text-sm font-medium text-white underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}
