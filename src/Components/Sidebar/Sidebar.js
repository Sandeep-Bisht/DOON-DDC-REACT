import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import TokenContext from "../../ContextAPi/TokenContext";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";
import { BsPeople } from 'react-icons/bs'
import {RiLogoutCircleRLine} from "react-icons/ri"

import "../../Css/Sidebar.css";

const Sidebar = () => {

  const { token, setToken} =useContext(TokenContext)
  const handleLogout = () => {
    // Remove the token cookie
    setToken(undefined)
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
                  <Link to="/dashboard/patient">All Patient</Link>
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
                    <RxDashboard />
                  </span>
                  <Link to="/dashboard/test">Test</Link>
                </div>
                <div className="sidebar-nav">
                  <span className="px-3">
                    <RxDashboard />
                  </span>
                  <Link to="/dashboard/schedule-appointments">Schedule Holiday</Link>
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
