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

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSidebar = function () {
    setIsSideBarOpen((prev) => !prev);
  };
  return (
    <>
      {/* Embed global styles directly in the component for self-containment */}
      {/* <style>{globalStyles}</style> */}
      <div className="dashboard-container">
        {/* Sidebar Overlay for Mobile */}
        <div
          className={`${isSideBarOpen ? "block" : "hidden"}`}
          onClick={toggleSidebar}
        ></div>

        <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />

        <div className="main-content-area">
          <Header toggleSidebar={toggleSidebar} />
          <StatsCards />
          {/* Projects and Orders Grid */}

          <Dashboard />

          <div className="flex flex-wrap gap-6 m-5 mb-1  ">
            <div className="w-full md:w-[calc(50%-0.75rem)] ">
              <div className="h-full">
                <BarChart />
              </div>
            </div>
            <div className="w-full md:w-[calc(50%-0.75rem)]  h-180">
              <div className="h-full">
                <SalesOverview />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-5 mt-6">
            <div className="lg:col-span-2">
              <ProjectTable />
            </div>
            <div>
              <OrderOverview />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
