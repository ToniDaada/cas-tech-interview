import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
export default function OrdersOverview() {
  const orders = [
    {
      id: "S2400",
      icon: "/ordericon/bell.svg",
      title: "$2400 Design changes",
      time: "22 DEC 7:20 PM",
    },
    {
      id: "S2401",
      icon: "/ordericon/html.svg",
      title: "New order #G201422",
      time: "21 DEC 11:15 PM",
    },
    {
      id: "S2402",
      icon: "/ordericon/cart.svg",
      title: "Server Payments for April",
      time: "21 DEC 9:00 PM",
    },
    {
      id: "S2403",
      icon: "/ordericon/card.svg",
      title: "New card added for #210145",
      time: "20 DEC 2:00 AM",
    },
    {
      id: "S2404",
      icon: "/ordericon/dropbox.svg",
      title: "Unlock packages for Development",
      time: "18 DEC 4:54 PM",
    },
    {
      id: "S2405",
      icon: "/icons/chakra.svg",
      title: "New order #G012356",
      time: "18 DEC 4:00 AM",
    },
  ];

  // const OrderItem = ({ title, time, icon }) => (
  //   <div className="flex items-start mb-4 h-full ">
  //     <div
  //       className={`w-3 h-2 rounded-full mr-2

  //       `}
  //     >
  //       <Image src={icon} alt={title} width={15} height={15} className="transition-transform duration-300 hover:scale-[1.03]" />
  //     </div>
  //     <div className="flex-grow">
  //       <h4
  //         className={`text-gray-900
  //         `}
  //       >
  //         {title}
  //       </h4>
  //       <p className="text-xs text-gray-400">{time}</p>
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md font-sans  transition-transform duration-300 hover:scale-[1.03]">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Orders overview</h3>
      <p className="text-sm text-gray-500 flex items-center mb-6">
        <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
        <span className="text-green-500 font-semibold">+30%</span>
        <span className="ml-1">this month</span>
      </p>

      <div className="relative pl-8">
        {orders.map((order, index) => (
          <div key={index} className="relative flex items-start gap-3 mb-6">
            {/* Line above the icon */}
            {index !== 0 && (
              <div className="absolute left-2.5 top-0 w-px h-[50%] bg-gray-200 z-0" />
            )}
            {/* Line below the icon */}
            {index !== order.length - 1 && (
              <div className="absolute left-2.5 top-[50%] w-px h-[calc(100%-0.75rem)] bg-gray-200 z-0" />
            )}

            {/* Centered Line */}
            <div className="relative z-10 w-5 h-4 rounded-full bg-white  flex items-center justify-center shrink-0">
              <Image
                src={order.icon}
                alt=""
                width={15}
                height={15}
                className="object-contain mb-2 "
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {order.title}
              </p>
              <p className="text-xs text-gray-500">{order.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
