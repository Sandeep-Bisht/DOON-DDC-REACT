import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";
import { BsPeople } from 'react-icons/bs'
import {RiLogoutCircleRLine} from "react-icons/ri"

import "../../Css/Sidebar.css";

const Sidebar = () => {
  const handleLogout = () => {
    // Remove the token cookie
    Cookies.remove("ddc_token");
  };
  return (
    <section>
      <div className="container-fluid px-0">
        <div className="sidebar">
          <div className="row">
            <div className="col-md-12">
              <div className="sidebar-nav-wrapper">
                <div className="sidebar-nav">
                  <span className="px-3">
                    <RxDashboard />
                  </span>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="sidebar-nav">
                  <span className="px-3">
                    <BsPeople />
                  </span>
                  <Link to="/dashboard/people">All Patient</Link>
                </div>
                <div className="sidebar-nav">
                  <span className="px-3">
                    <TbBrandBooking />
                  </span>
                  <Link to="/dashboard/addblog">Blog</Link>
                </div>                
                <div className="sidebar-nav">
                  <span className="px-3">
                    <RxDashboard />
                  </span>
                  <Link to="/dashboard/allbooking">All Booking</Link>
                </div>
                <div className="sidebar-nav">
                  <span className="px-3">
                    <RiLogoutCircleRLine />
                  </span>
                  <Link to="/" onClick={() => handleLogout()}>
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
