import Image from "next/image";
const data = [{}];

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
          {/* Users */}
          <div className="flex flex-col items-center animate-fade-in-up delay-100">
            <Image
              src="/icons/chakra.svg"
              width={25}
              height={25}
              className="text-teal-400 text-xl mb-1"
            />
            <p className="text-sm text-gray-500">Users</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-1">32,984</h3>
            <div className="w-8 h-1 bg-teal-400 rounded mt-2 animate-grow-bar" />
          </div>

          {/* Clicks */}
          <div className="flex flex-col items-center animate-fade-in-up delay-200">
            <Image
              src="/icons/chakra"
              width={25}
              height={25}
              className="text-teal-400 text-xl mb-1"
            />
            <p className="text-sm text-gray-500">Clicks</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-1">2,42m</h3>
            <div className="w-8 h-1 bg-teal-400 rounded mt-2 animate-grow-bar" />
          </div>

          {/* Sales */}
          <div className="flex flex-col items-center animate-fade-in-up delay-300">
            <Image
              src="/icons/chakra"
              width={25}
              height={25}
              className="text-teal-400 text-xl mb-1"
            />
            <p className="text-sm text-gray-500">Sales</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-1">2,400$</h3>
            <div className="w-8 h-1 bg-teal-400 rounded mt-2 animate-grow-bar" />
          </div>

          {/* Items */}
          <div className="flex flex-col items-center animate-fade-in-up delay-400">
            <Image
              src="/icons/chakra"
              width={25}
              height={25}
              className="text-teal-400 text-xl mb-1"
            />
            <p className="text-sm text-gray-500">Items</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-1">320</h3>
            <div className="w-8 h-1 bg-teal-400 rounded mt-2 animate-grow-bar" />
          </div>
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
          animation: scale-grow 3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
