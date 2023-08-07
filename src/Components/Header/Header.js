import React, { useState, useRef, useEffect } from "react";
import { signal, effect } from "@preact/signals";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import TokenContext from "../../ContextAPi/TokenContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { FaBars, FaTimes } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../Css/Header.css";
import "../../Css/Common.css";
import Images from "../../Util/Images";
import { url } from "../../Util/url";
import { useContext } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";

const responseMsg = signal(undefined);
const allSlots = [];

const Header = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const appointmentFormRef = useRef();
  // const [allSlots, setAllSlots] = useState([])

  const disabledDays = [];

  const [activeLink, setActiveLink] = useState("/");
  const { token, setToken } = useContext(TokenContext);
  const currentDate = signal(undefined);
  const options = { hour: "2-digit", minute: "2-digit", hour12: false };
  const [time] = useState(new Date().toLocaleTimeString([], options));

  const [selectedDate, setSelectedDate] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();
  const loginModalRef = useRef(null);
  // const timeRef = useRef();
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(()=>{
    const startTimeMorning = new Date();
    startTimeMorning.setHours(9, 0, 0); // Set start time for the morning range (9 am)
    
    const endTimeMorning = new Date();
    endTimeMorning.setHours(13, 0, 0); // Set end time for the morning range (1 pm)
    
    const startTimeAfternoon = new Date();
    startTimeAfternoon.setHours(14, 0, 0); // Set start time for the afternoon range (2 pm)
    
    const endTimeAfternoon = new Date();
    endTimeAfternoon.setHours(18, 0, 0); // Set end time for the afternoon range (6 pm)
    
    // Generate morning time slots
    let currentTime = startTimeMorning;
    while (currentTime < endTimeMorning) {
      const timeSlot = currentTime.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      
      if (!allSlots.includes(timeSlot)) {
        allSlots.push(timeSlot);
      }
    
      currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
    }
    
    // Generate afternoon time slots
    currentTime = startTimeAfternoon;
    while (currentTime < endTimeAfternoon) {
      const timeSlot = currentTime.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    
      if (!allSlots.includes(timeSlot)) {
        allSlots.push(timeSlot);
      }
    
      currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
    }
  },[])


  const appointmentSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    contactNo: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]{10}$/, "Contact No must be a 10-digit number"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    description: Yup.string().required("Description is required"),
  });

  const loginSchema = Yup.object().shape({
    adminEmail: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  useEffect(() => {
    // Get the token from the cookie
    const token = Cookies.get("ddc_token");
    setToken(token);
    refetch();
  }, []);

  effect(() => {
    const date = new Date().toISOString().split("T")[0];
    currentDate.value = date;
  });

  effect(() => {
    setTimeout(() => {
      responseMsg.value = undefined;
    }, 2000);
  }, [responseMsg.value]);


  useEffect(() => {
    if (selectedDay) {   
        
      getSpecificDateAppointment.mutate(selectedDay);      
    }
  }, [selectedDay]);

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
        responseMsg.value = res.msg;
      },
      onError: (error) => {
        responseMsg.value = error.msg;
      },
    }
  );

  const getSpecificDateAppointment = useMutation(
    async (date) => {
      const formattedDate = await formatDate(date);
      setSelectedDate(formattedDate);
      const res = await fetch(
        `${url}/appointment/get_specific_date_appointment_list/${formattedDate}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await res.json();
    },
    {
      onSuccess: async(res) => {
        // setTimeSlots([]);
        let appointmentSlot = res.data;
        let timeSlotsCopy = [...allSlots]
        const availableSlots = timeSlotsCopy?.filter((slot) => {
          return !appointmentSlot?.some(
            (appointmentSlot) => appointmentSlot.time === slot
          );
        });       
         
        //  setTimeSlots(availableSlots);
         getSelectedDayHoliday(selectedDay,availableSlots);

      },
      onError: (error) => {
        responseMsg.value = error.msg;
      },
    }
  );

  const getSelectedDayHoliday = async (date,timeSlotsCopy) => {
    const formattedDate = await formatDate(date);
    const response = await fetch(
      `${url}/holidayList/get_currentday_schedule/?date=${formattedDate}`
    );
    if (response.ok) {
      const data = await response.json();
      const unavailableslot = data?.data[0]?.time;
      if(!unavailableslot){
        return setTimeSlots(timeSlotsCopy);
      }

      const availableSlots = timeSlotsCopy.filter(
        (slot) => !JSON.parse(unavailableslot).includes(slot)
      );

      return setTimeSlots(availableSlots); // Assuming setTimeSlots is a function to update the timeSlots state
      // Further processing of the response data
    } else {
      return console.log("Error fetching data:", response.status);
    }
  };
  

  const adminLoginHandler = useMutation(
    async (data) => {
      const res = await fetch(`${url}/authantication/login`, {
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
        responseMsg.value = res.msg;
        if (res.status === 200) {
          loginModalRef.current.click();
          setToken(res.token);
          Cookies.set("ddc_token", res.token, { expires: 7 }); // 'expires' sets the expiration time in days
          navigate("/dashboard");
        }
      },
      onError: (error) => {
        responseMsg.value = error.msg;
      },
    }
  );

  const fetchData = async (date) => {
    const response = await fetch(
      `${url}/holidayList/get_upcoming_holidays/?date=${date}`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data, refetch } = useQuery(
    ["holidayList", currentDate],
    () => fetchData(currentDate),
    {
      enabled: false,
    }
  );
  // const disabledDates = data?.data.map((item) => item.date);

  data?.data.map((item) => {
    const timeArray = JSON.parse(item.time);

    if (timeArray?.includes("fullday")) {
      const dateCopy = item.date.split("-");
      disabledDays.push({
        year: Number(dateCopy[0]),
        month: Number(dateCopy[1]),
        day: Number(dateCopy[2]),
      });
    }
  });

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Select Date"
      value={
        selectedDay
          ? `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`
          : ""
      }
      className="form-control" // a styling class
    />
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const formatDate = async (dateObj) => {
    const year = dateObj.year;
    const month = dateObj.month.toString().padStart(2, "0");
    const day = dateObj.day.toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const CustomDatePicker = ({ field, form }) => {
    const handleDateChange = async (date) => {
      const formattedDate = await formatDate(date);
      setSelectedDay(date);
      setSelectedDate(formattedDate);      
      form.setFieldValue(field.name, formattedDate);
      form.setFieldValue("time", null);
    };

    

    return (
      <DatePicker
        selected={field.value}
        onChange={handleDateChange}
        onBlur={field.onBlur}
        value={selectedDay}
        name="date"
        disabledDays={disabledDays}
        renderInput={renderCustomInput} // render a custom input
        calendarPopperPosition="bottom"
        minimumDate={utils().getToday()}
        // shouldHighlightWeekends
      />
    );
  };
  
  const handleBookAppointmentClick = () => {
    if (appointmentFormRef.current) {
      appointmentFormRef.current.resetForm();
    }
  };
  return (
    <>
      <header>
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg ">
                <Link className="navbar-brand" to="/">
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
                    <FaBars />
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
                      <div className="dropdown">
                        <Link
                        to="/patient-corner"
                        onClick={() => setActiveLink("/patient-corner")}
                        className={`nav-link dropdown-toggle ${
                          activeLink === "/patient-corner" ? "current" : ""
                        }`}
                        type="button" data-bs-toggle="dropdown" aria-expanded="false"
                      >
                        Patient corner
                         </Link>
                          <ul className="dropdown-menu common-dropdown">
                             <li><Link className="dropdown-item nav-link" to='/'>Clinical</Link></li>
                             <li><Link className="dropdown-item nav-link" to='/'>Ongoing Clinical Trial</Link></li>
                             <li><Link className="dropdown-item nav-link" to='/patient-corner' >Blogs</Link></li>
                             <li><Link className="dropdown-item nav-link" to='/'>Recent Activities </Link></li>
                          </ul>

                      </div>
                     
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
                      onClick={handleBookAppointmentClick}
                        className="btn book-now nav-link"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Book Appointment
                      </button>
                    </li>
                    {token == null ? (
                      <li className="nav-item">
                        <button
                          className="btn book-now nav-link"
                          data-bs-toggle="modal"
                          data-bs-target="#loginModal"
                        >
                          Login
                        </button>
                      </li>
                    ) : (
                      location &&
                      location.pathname !== "/dashboard" && (
                        <li className="nav-item">
                          <Link
                            className="btn book-now nav-link"
                            to="/dashboard"
                          >
                            Dashboard
                          </Link>
                        </li>
                      )
                    )}
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
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Formik
                  innerRef={appointmentFormRef}
                  initialValues={{
                    name: "",
                    contactNo: "",
                    email: "",
                    date: "",
                    time: "",
                    description: "",
                  }}
                  validationSchema={appointmentSchema}
                  onSubmit={(values, { resetForm }) => {
                    createAppointment.mutate(values, {
                      onSuccess: () => {
                        resetForm();
                        setSelectedDay(null);
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
                            <Field
                              name="contactNo"
                              className="form-control"
                              maxLength={10}
                              onKeyPress={(e) => {
                                const onlyDigits = /[0-9]/;
                                const keyPressed = String.fromCharCode(
                                  e.charCode
                                );
                                if (!onlyDigits.test(keyPressed)) {
                                  e.preventDefault();
                                }
                              }}
                            />
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
                             <div>
                              <Field name="date" component={CustomDatePicker} />
                            </div>
                            <ErrorMessage
                              name="date"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="time">Select a time slot:</label>
                            <Field
                              name="time"
                              type="time"
                              as="select"
                              // ref={timeRef}
                              className="form-control"
                            >
                              <option value="" hidden>
                                Select a time
                              </option>
                              {selectedDate ? (
                                timeSlots.map((timeSlot, index) =>
                                  selectedDate > currentDate.value ?
                                   (
                                    <option key={index} value={timeSlot}>
                                      {timeSlot}
                                    </option>
                                  ) : (
                                    selectedDate &&
                                    timeSlot > time &&
                                     (
                                      <>
                                        <option key={index} value={timeSlot}>
                                          {timeSlot}
                                        </option>
                                      </>
                                    )
                                  )
                                )
                              ) : (
                                <option value="">Select a Date First</option>
                              )}
                            </Field>
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
                      <button
                        type="submit"
                        className="common-submit  py-2 px-4 mt-4 border-0"
                        disabled={createAppointment.isLoading}
                      >
                        {createAppointment.isLoading ? "Loading..." : "Submit"}
                      </button>
                    </Form>
                  )}
                </Formik>

                {responseMsg && responseMsg.value ? (
                  <div className="text-success mt-3">
                    <p>{responseMsg.value}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------Login Modal -------------------------- */}
      <div
        className="modal fade common-booking-modal"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 py-0">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Admin Login
              </h1>
              <button
                ref={loginModalRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Formik
                  initialValues={{
                    adminEmail: "",
                    password: "",
                  }}
                  validationSchema={loginSchema}
                  onSubmit={(values, { resetForm }) => {
                    adminLoginHandler.mutate(values, {
                      onSuccess: () => {
                        resetForm();
                      },
                    });
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                        <div className="form-group">
                          <label htmlFor="adminEmail">Email:</label>
                          <Field
                            name="adminEmail"
                            className="form-control"
                            autoComplete="new-email" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="adminEmail"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="name">Password:</label>
                          <Field
                            name="password"
                            className="form-control"
                            type="password"
                            autoComplete="new-password" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Row>

                      <button
                        type="submit"
                        className="common-submit  py-2 px-4 mt-4 border-0"
                        disabled={adminLoginHandler.isLoading}
                      >
                        {adminLoginHandler.isLoading ? "Loading..." : "Submit"}
                      </button>
                    </Form>
                  )}
                </Formik>
                {responseMsg && responseMsg.value ? (
                  <p>{responseMsg.value}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
