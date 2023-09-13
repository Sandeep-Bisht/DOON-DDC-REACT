import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import Contact from "../Components/Contact/Contact";
import Homepage from "../Components/Homepage/Homepage"
import Services from "../Components/Services/Services";
import Training from "../Components/Training/Training";
import Patient from "../Components/Patient/Patient";
import BlogDetail from "../Components/BlogDetail/BlogDetail";
import ServiceDetail from "../ServiceDetails/ServiceDetail";
import AdminDashboard from "../Components/Dashboard/AdminDashboard"
import Booking from "../Layout/Booking";
import AllBooking from "../Layout/AllBooking";
import AddBooking from "../Layout/AddBooking";
import People from "../Layout/People"
import Dashboard from "../Layout/Dashboard";
import Cookies from "js-cookie";
import TimeSlotSelection from "../Components/TimeSlot/TimeSlot";
import AddBlog from "../Layout/AddBlog";
import ScheduleAppointments from "../Layout/ScheduleAppointments";
import CoreValueDetail from "../Components/CoreValueDetail/CoreValueDetail"
import Clinical from "../Components/Clinical/Clinical";
import OngoingClinicalTrial from "../Components/OngoingClinicalTrial/OngoingClinicalTrial";
import  RecentActivities  from "../Components/RecentActivities/RecentActivities"
import Error from "../Components/ErrorPage/Error";

const Authanticated = (props) => {
     let token = Cookies.get("ddc_token");

     if(!token) {
        return <Navigate to="/" replace />
     }

     return props.component
}
const ApplicationRoutes = () => {

    return(
        <>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/patient-corner" element={<Patient />} />
            <Route path="/training" element={<Training />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/service-details" element={< ServiceDetail/>} />
            <Route path="/blog-detail" element={<BlogDetail/>}/>
            <Route path="*" element={<Error />} />
            <Route path="/dashboard"  element={<Authanticated component= {<AdminDashboard />} /> } >
                <Route index element={< Dashboard/>} />
                <Route path="/dashboard/patient" element={< People/>} />
                <Route path="/dashboard/addbooking" element={< AddBooking />} />
                <Route path="/dashboard/allbooking" element={< AllBooking />} />
                <Route path="/dashboard/booking" element={< Booking/>} />
                <Route path="/dashboard/addblog" element={< AddBlog />} />
                <Route path="/dashboard/schedule-appointments" element={< ScheduleAppointments/>} />
                </Route>
            <Route path="book-appointment" element={<TimeSlotSelection />} /> 
            <Route path="/core-value-detail" element={<CoreValueDetail/>}></Route>
            <Route path="/clinical" element={<Clinical/>}></Route>
            
            <Route path="/ongoing-clinical-trial" element={<OngoingClinicalTrial/>}></Route>
            
            <Route path="/recent-activities" element={< RecentActivities/>}></Route>
        </Routes>
        
        </>
    )

}

export default ApplicationRoutes