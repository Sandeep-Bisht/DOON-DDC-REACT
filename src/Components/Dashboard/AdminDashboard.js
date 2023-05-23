import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../../Css/Dashboard.css";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <section>
        <div className="row g-0">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
