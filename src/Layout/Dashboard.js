import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { url } from "../Util/url";
import '../Css/Dashboard.css'

const Dashboard = () => {

   const [allPatient, setAllPatient] = useState(undefined);
   const [appointments, setAppointments] = useState(undefined);
   const navigate = useNavigate()
   

   useEffect(() => {
      getAllPatient();
      getAllAppointments()
   }, [])

   const getAllPatient = async() => {
      const response = await axios.get(`${url}/patient/get_patient`)
      setAllPatient(response.data.data)
   }

 const getAllAppointments = async () => {
   const date = new Date().toISOString().split("T")[0];
   const response = await axios.get(`${url}/appointment/get_specific_date_appointment_list/${date}`)
   setAppointments(response.data.data)
 }


  return (
    <section className="dashboard-overview">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 class="common-heading d-flex align-items-center justify-content-center mb-4">
              <span class="bar one"></span>Overview<span class="bar two"></span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="dash-card" onClick={()=> navigate("/dashboard/patient")}>
              <div className="dash-card-inner">
                <div className="left">
                  <FaUsers />
                </div>
                <div className="right">
                  <p className="patient-number">{ allPatient?.length}</p>
                  <p className="dash-card-title">All Patient</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dash-card" onClick={()=> navigate("/dashboard/allbooking")}>
              <div className="dash-card-inner">
                <div className="left">
                  <FaUserFriends />
                </div>
                <div className="right">
                  <p className="patient-number">{appointments?.length}</p>
                  <p className="dash-card-title">Today Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
