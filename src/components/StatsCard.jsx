import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const stats = [
  {
    title: "Today’s Money",
    amount: "$53,000",
    icon: "/statsicons/wallet.svg",

    change: "+55",
    isPositive: true,
  },
  {
    title: "Today’s Users",
    amount: "2,300",
    icon: "/statsicons/globe.svg",

    change: "+5",
    isPositive: true,
  },
  {
    title: "New Clients",
    amount: "+3,052",
    icon: "/statsicons/document.svg",

    change: "-14",
    isPositive: false,
  },
  {
    title: "Sales",
    amount: "$173,000",
    icon: "/statsicons/cart.svg",
    change: "8",
    isPositive: true,
  },
];

export default function StatsCards() {
  return (
    <section className="bg-white rounded-xl p-6 shadow-md w-full mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-xs text-gray-500 mt-3">{stat.title}</h1>
                <p className="text-base font-semibold text-gray-800">
                  {stat.amount}{" "}
                  <span
                    className={` text-center items-center text-xs font-medium ${
                      stat.isPositive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.isPositive ? (
                      <ArrowUpIcon className="w-3 h-3 mb-1 inline-block" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3 mb-1 inline-block" />
                    )}
                    {stat.change}%
                  </span>{" "}
                </p>
              </div>

              <div className="bg-[#4FD1C5]  p-3 items-center rounded-2xl">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
