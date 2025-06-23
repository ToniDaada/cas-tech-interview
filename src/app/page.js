"use client";

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ProjectTable from "@/components/ProjectTable";
import OrderOverview from "@/components/OrderOverview";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = function () {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      {/* Needs Work Done */}
      {/* <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} /> */}

      <Header />
      <Dashboard />

      <ProjectTable />
      <OrderOverview />

      <Footer />
    </div>
  );
}
