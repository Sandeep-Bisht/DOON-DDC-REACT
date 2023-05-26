import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";
import { BsPeople } from 'react-icons/bs'
import {RiLogoutCircleRLine} from "react-icons/ri"

import "../../Css/Sidebar.css";

const Sidebar = () => {
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
                <Link to="/dashboard/people">People</Link>
              </div>
              <div className="sidebar-nav">
                <span className="px-3">
                  <TbBrandBooking />
                </span>
                <Link to="/dashboard/booking">Bookings</Link>
              </div>
              <div className="sidebar-nav">
                <span className="px-3">
                  <RxDashboard />
                </span>
                <Link to="/dashboard/addbooking">Add Booking</Link>
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
                <Link>Logout</Link>
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
