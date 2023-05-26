import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../../Css/Dashboard.css";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <section className="dashboard-area">
        <div className="row g-0">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10 outlet-wrapper">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
