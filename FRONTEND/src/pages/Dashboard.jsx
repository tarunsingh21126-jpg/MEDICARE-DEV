// import StatsCards from "../components/dashboard/StatsCards";
import React from "react";
import { Routes ,Route } from "react-router-dom";
import RecentActivity from "../components/dashboard/RecentActivity";

import Charts from "../components/dashboard/Charts";
// import { statsData } from "../data/dashboardData";
import Doctorgrid from "./Doctorgrid";
import Doctors from "./Doctors";
import DoctorDetail from "./DoctorDetail";



export default function Dashboard() {
  return (
    <div className="container ">
      <h2 className="fw-bold mb-4">Dashboard</h2>
        <Routes>
      <Route path="/" element={<Doctorgrid />} />
       <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetail />} />
      <Route path="/doctors" element={<Doctors />} />
    </Routes>
      

      <div className="row g-4 mt-2">
        <div className="col-md-7">
          <Charts />
        </div>

        <div className="col-md-5">
          <RecentActivity />
        </div>
      </div>
      
    </div>
  );
}