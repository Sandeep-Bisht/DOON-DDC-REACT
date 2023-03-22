import React, { useEffect, useState } from "react";
import { signal, effect } from "@preact/signals";
import { ReactComponent as Logo } from "../../Images/ddcLogo.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation, QueryClient, QueryClientProvider } from "react-query";
import {FaBars,FaTimes} from "react-icons/fa"
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Css/Header.css";
import "../../Css/Common.css";
import Images from "../../Util/Images";
import { url } from "../../Util/url";

const responseMsg = signal(undefined);

const Header = () => {

 //const msg = responseMsg.value;
  const [activeLink, setActiveLink] = useState("/");
  const currentDate = signal(undefined)

  const appointmentSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    contactNo: Yup.string().required("Contact number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    description: Yup.string().required("Description is required"),
  });

  effect(() => {
    const date = new Date().toISOString().split('T')[0];          
      currentDate.value = date;
  });

  effect(() => {
      setTimeout(() => {
        responseMsg.value = undefined;
        console.log(responseMsg.value,"inside set time out")
      }, 2000)

  }, [responseMsg.value])

   

    
  

 

  const createAppointment = useMutation(
    async (data) => {
      const res = await fetch(`${url}/appointment/add_appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    },
    {
      onSuccess: (res) => {
        responseMsg.value = res.msg  
        //clearMsg()     
      },
      onError: (error) => {
        responseMsg.value = error.msg       
      },
    }
  );
  console.log(responseMsg.value, "msgegeege")

  return (
    <>
      <header>
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg ">
                <Link className="navbar-brand" to="/">
                  {/* <Logo className="img-fluid" /> */}
                  <img src={Images.logo} alt="" className="img-fluid" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <FaBars/>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav justify-content-end w-100">
                    <li className="nav-item">
                      <Link
                        to="/"
                        onClick={() => setActiveLink("/")}
                        className={`nav-link ${
                          activeLink === "/" ? "current" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/about-us"
                        onClick={() => setActiveLink("/about-us")}
                        className={`nav-link ${
                          activeLink === "/about-us" ? "current" : ""
                        }`}
                      >
                        About us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/our-services"
                        onClick={() => setActiveLink("/our-services")}
                        className={`nav-link ${
                          activeLink === "/our-services" ? "current" : ""
                        }`}
                      >
                        Our services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/training"
                        onClick={() => setActiveLink("/training")}
                        className={`nav-link ${
                          activeLink === "/training" ? "current" : ""
                        }`}
                      >
                        Training
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/patient-corner"
                        onClick={() => setActiveLink("/patient-corner")}
                        className={`nav-link ${
                          activeLink === "/patient-corner" ? "current" : ""
                        }`}
                      >
                        Patient corner
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contact-us"
                        onClick={() => setActiveLink("/contact-us")}
                        className={`nav-link ${
                          activeLink === "/contact-us" ? "current" : ""
                        }`}
                      >
                        Contact us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn book-now nav-link"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Book Appointment
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
        {/* -----------------Appointment Modal -------------------------- */}
        <div
        className="modal fade common-booking-modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 py-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Appointment Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
               <FaTimes/>

              </button>
            </div>
            <div className="modal-body">
              <div>
              
                <Formik
                  initialValues={{
                    name: "",
                    contactNo: "",
                    email: "",
                    date: "",
                    time: "",
                    description: "",
                  }}
                  validationSchema={appointmentSchema}                 
                  onSubmit={(values, {resetForm}) => {
                    createAppointment.mutate(values, {
                      onSuccess: () => {
                        resetForm();
                      },
                    });
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <Field name="name" className="form-control" />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="contactNo">Contact No:</label>
                            <Field name="contactNo" className="form-control" />
                            <ErrorMessage
                              name="contactNo"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field name="email" className="form-control" />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <Row>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <Field
                              name="date"
                              type="date"
                              className="form-control"
                              min={currentDate.value}
                            />
                            <ErrorMessage
                              name="date"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <Field
                              name="time"
                              type="time"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="time"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <Field
                          name="description"
                          as="textarea"
                          rows="3"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="description"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <button  type="submit" className=" common-submit  py-2 px-4 mt-4 border-0">
                        Submit
                      </button>
                      
                      
                    </Form>
                  )}
                </Formik>
                {responseMsg && responseMsg.value ? <p>{responseMsg.value}</p> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
