"use client";

import React from "react";
import Image from "next/image";

const projectData = [
  {
    icon: "/icons/chakra.svg",
    company: "Chakra Soft UI Version",
    members: [
      "/membericons/avatar1.svg",
      "/membericons/avatar2.svg",
      "/membericons/avatar3.svg",
    ],
    budget: "$14,000",
    completion: 60,
  },
  {
    icon: "/icons/progresstrack.svg",
    company: "Add Progress Track",
    members: [
      "/membericons/avatar1.svg",
      "/membericons/avatar2.svg",
      "/membericons/avatar3.svg",
      "/membericons/avatar4.svg",
    ],
    budget: "$3,000",
    completion: 10,
  },
  {
    icon: "/icons/fixplatformerrors.svg",
    company: "Fix Platform Errors",
    members: ["/membericons/avatar1.svg", "/membericons/avatar2.svg"],
    budget: "Not set",
    completion: 100,
  },
  {
    icon: "/icons/spotify.svg",
    company: "Launch our Mobile App",
    members: [
      "/membericons/avatar1.svg",
      "/membericons/avatar2.svg",
      "/membericons/avatar3.svg",
      "/membericons/avatar4.svg",
      "/membericons/avatar5.svg",
    ],
    budget: "$20,000",
    completion: 100,
  },
  {
    icon: "/icons/addnewpricing.svg",
    company: "Add the New Pricing Page",
    members: [
      "/membericons/avatar1.svg",
      "/membericons/avatar2.svg",
      "/membericons/avatar3.svg",
    ],
    budget: "$500",
    completion: 25,
  },
  {
    icon: "/icons/invision 1.svg",
    company: "Redesign New Online Shop",
    members: [
      "/membericons/avatar1.svg",
      "/membericons/avatar2.svg",
      "/membericons/avatar3.svg",
      "/membericons/avatar4.svg",
    ],
    budget: "$7,600",
    completion: 40,
  },
];

export default function ProjectTable() {
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-lg animate-fadeInUp h-full transition-transform duration-300 hover:scale-[1.01]">
        <div className="items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Projects</h3>
          <button className="text-gray-600 text-sm flex items-center text-center">
            <Image
              src="/icons/circle.svg"
              alt="circle"
              width={15}
              height={15}
            />
            {"   "}
            30 done this month
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Companies
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Members
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Completion
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {projectData.map((project, index) => (
                <tr
                  key={index}
                  className="transition-colors duration-150 hover:bg-gray-50"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                    <Image
                      src={project.icon}
                      alt={`${project.company} logo`}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    {project.company}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex -space-x-2">
                      {project.members.map((avatarUrl, i) => (
                        <Image
                          key={i}
                          src={avatarUrl}
                          alt={`Member ${i + 1}`}
                          width={24}
                          height={24}
                          className="h-6 w-6 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                    {project.budget}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 w-48">
                    <span className="ml-2">{project.completion}%</span>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-1 overflow-hidden">
                      <div
                        className="h-1 rounded-full bg-[#4FD1C5] animate-scale-grow"
                        style={{
                          width: `${project.completion}%`,
                          transformOrigin: "left",
                        }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom JSX for the animation */}
      <style jsx>{`
        @keyframes scale-grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-scale-grow {
          animation: scale-grow 3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
