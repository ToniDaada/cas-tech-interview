"use client";

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ProjectTable from "@/components/ProjectTable";
import OrderOverview from "@/components/OrderOverview";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { useState } from "react";
import BarChart from "@/components/BarChart";
import SalesOverview from "@/components/SalesOverView";
import StatsCards from "@/components/StatsCard";
import LazyLoadSection from "@/components/LazyLoadSection";

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true); // I am starting with sidebar open

  const toggleSidebar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <LazyLoadSection>
        <div className="flex min-h-screen bg-gray-100 font-inter">
          {/* Sidebar Overlay for Mobile */}
          {isSideBarOpen && (
            <div
              className="fixed inset-0
                          bg-[rgba(0, 0, 0, 0.4)]
  backdrop-blur-xl z-[40]
  transition-all duration-[4000]
              lg:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Sidebar Component */}
          <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />

          {/* Main Content Area */}
          <div
            className={`flex-1 transition-all duration-300 ease-in-out
                      ${isSideBarOpen ? "ml-64" : "ml-0"}`}
          >
            {/* Header */}
            <div className="main-content-area  w-full z-999">
              <Header toggleSidebar={toggleSidebar} />
            </div>

            <main className="p-4">
              <StatsCards />

              <Dashboard />
              {/* BarChart and SalesOverview side-by-side */}

              <div className="flex flex-wrap gap-6 m-5 mb-15  ">
                <div className="w-full md:w-[calc(50%-0.75rem)] ">
                  <div className="h-full">
                    <BarChart />
                  </div>
                </div>
                <div className="w-full md:w-[calc(50%-0.75rem)]">
                  <div className="h-full">
                    <SalesOverview />
                  </div>
                </div>
              </div>

              {/* ProjectTable and OrderOverview Grid */}
              <LazyLoadSection>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-5 mt-6">
                  <div className="lg:col-span-2">
                    <ProjectTable />
                  </div>
                  <div>
                    <OrderOverview />
                  </div>
                </div>
              </LazyLoadSection>
            </main>

            {/* Footer */}

            <Footer />
          </div>
        </div>
      </LazyLoadSection>
    </>
  );
}
