import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import Contact from "../Components/Contact/Contact";
import Homepage from "../Components/Homepage/Homepage"
import Services from "../Components/Services/Services";
import Training from "../Components/Training/Training";
import Patient from "../Components/Patient/Patient";
import ServiceDetail from "../ServiceDetails/ServiceDetail";

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

            
        </Routes>
        
        </>
    )

}

export default ApplicationRoutes