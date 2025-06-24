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
  const [isSideBarOpen, setIsSideBarOpen] = useState(true); // Start with sidebar open

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
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Sidebar Component (now inline) */}
          <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />

          {/* Main Content Area */}
          <div
            className={`flex-1 transition-all duration-300 ease-in-out
                      ${isSideBarOpen ? "ml-64" : "ml-0"}`} // Dynamic margin based on sidebar state
          >
            {/* Header */}
            <div className="main-content-area">
              <Header toggleSidebar={toggleSidebar} />
            </div>

            <main className="p-4">
              <StatsCards />

              <Dashboard />
              {/* BarChart and SalesOverview side-by-side */}

              <div className="flex flex-wrap gap-6 m-5 mb-1  ">
                <div className="w-full md:w-[calc(50%-0.75rem)] ">
                  <div className="h-full">
                    <BarChart />
                  </div>
                </div>
                <div className="w-full md:w-[calc(50%-0.75rem)]  h-150">
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
