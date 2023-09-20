import React, { useEffect, useState, useRef } from "react";
import { signal, effect } from "@preact/signals";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";
import { useQuery } from "react-query";
import { Table } from "antd";
import { MdPlaylistAdd } from "react-icons/md";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useMutation } from "react-query";
import { url } from "../Util/url";
import * as Yup from "yup";
import "../Css/Schedule.css";

const ScheduleAppointments = () => {
  // const [currentDate, setCurrentDate] = useState(undefined);
  const currentDate = signal(undefined);
  const [holidayList, setHolidayList] = useState("");
  const [addHoliday, setAddHoliday] = useState(false);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [selectedDay, setSelectedDay] = useState(null);
  const disabledDays = [];
  const addHolidayRef = useRef()

  const options = { hour: "2-digit", minute: "2-digit", hour12: false };
  const [time] = useState(new Date().toLocaleTimeString([], options));
  const [timeSlots, setTimeSlots] = useState([]);


  useEffect(() => {
    const startTimeMorning1 = new Date();
    startTimeMorning1.setHours(10, 30, 0); // Set start time for the first morning range (10:30 am)
  
    const endTimeMorning1 = new Date();
    endTimeMorning1.setHours(14, 30, 0); // Set end time for the first morning range (2:30 pm)
  
    const startTimeMorning2 = new Date();
    startTimeMorning2.setHours(16, 30, 0); // Set start time for the second morning range (4:30 pm)
  
    const endTimeMorning2 = new Date();
    endTimeMorning2.setHours(19, 45, 0); // Set end time for the second morning range (7:45 pm)
  
    const timeSlots = [];
  
    // Generate first morning time slots
    let currentTime = startTimeMorning1;
    while (currentTime < endTimeMorning1) {
      const timeSlot = currentTime.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
  
      if (!timeSlots.includes(timeSlot)) {
        timeSlots.push(timeSlot);
      }
  
      currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
    }
  
    // Generate second morning time slots
    currentTime = startTimeMorning2;
    while (currentTime < endTimeMorning2) {
      const timeSlot = currentTime.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
  
      if (!timeSlots.includes(timeSlot)) {
        timeSlots.push(timeSlot);
      }
  
      currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
    }
  
    // Now, the timeSlots array contains the desired time slots
    console.log("time slots check",timeSlots)
    setTimeSlots(timeSlots)
  }, []);
  

  

  effect(() => {
    const date = new Date().toISOString().split("T")[0];
    currentDate.value = date;
  });

  useEffect(() => {
    // const date = new Date().toISOString().split("T")[0];
    getAllHolidays();
  }, []);

  useEffect(() => {
    if (currentDate) {
      refetch();
    }
  }, []);

  const getAllHolidays = async () => {
    const response = await axios.get(`${url}/holidayList/get_all_holidayList`);
    setHolidayList(response.data.data);
  };

  const handleHoliday = useMutation(
    async (data) => {
      const res = await fetch(`${url}/holidayList/mark_holiday`, {
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
        console.log(res, "res");
      },
      onError: (error) => {
        console.log(error, "error");
      },
    }
  );

  const holidaySchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.array().min(1, "Time is required").required("Time is required"),
    reason: Yup.string().required("Reason is required"),
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time Slots",
      dataIndex: "time",
      key: "time",
    },

    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
  ];

  const formatDate = async (dateObj) => {
    const year = dateObj.year;
    const month = dateObj.month.toString().padStart(2, "0");
    const day = dateObj.day.toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

 
  

  const CustomDatePicker = ({ field, form }) => {    
   
    const handleDateChange = async (date) => {
      
      form.setFieldValue(field.time, "");
      const formattedDate = await formatDate(date);
      // const getHoliday =  getSelectedDayHoliday(formattedDate)
      
      setSelectedDate(formattedDate);
      setSelectedDay(date);
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
      />
    );
  };

  //get upcoming holiday call

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

  // Event handler for the multiselect dropdown
  const handleTimeChange = (event, setFieldValue) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFieldValue("time", selectedOptions); // Update the 'time' field value
  };


  const handleAddHolidayClick = ()=> {
    setAddHoliday(true)
    if (addHolidayRef.current) {
      
      addHolidayRef.current.resetForm();
    }
  }

  return (
    <section className="container-fluid pt-5">
      {addHoliday ? (
        <>
          <div className="row">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
                <span className="bar one"></span>Schedule Holiday's
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="form-wrapper pt-lg-2">
                <Formik
                innerRef={addHolidayRef}
                  initialValues={{
                    date: "",
                    time: "",
                    reason: "",
                  }}
                  validationSchema={holidaySchema}
                  onSubmit={(values, { resetForm }) => {
                    handleHoliday.mutate(values, {
                      onSuccess: () => {
                        resetForm();
                        getAllHolidays();
                        setAddHoliday(false);
                      },
                    });
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={12}>
                          <div className="form-group pt-3">
                            <label htmlFor="date">Date:</label>
                          </div>
                          <div className="mx-auto">
                            <Field
                              name="date"
                              className="form-control"
                              min={currentDate && currentDate}
                              component={CustomDatePicker}
                            />

                            <ErrorMessage
                              name="date"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="form-group pt-3">
                            <label htmlFor="time">Select a time slot:</label>
                            <Field
                              name="time"
                              type="time"
                              as="select"
                              multiple // Add the 'multiple' attribute
                              // ref={timeRef}
                              value={values.time}
                              className="form-control"
                              onChange={(event) =>
                                handleTimeChange(event, setFieldValue)
                              }
                              onBlur={handleBlur}
                            >
                              <option value="" hidden>
                                Select a time
                              </option>
                              {selectedDate &&
                                selectedDate > currentDate.value && (
                                  <option value="fullday">Full Day</option>
                                )}

                              {selectedDate ? (
                                timeSlots.map((timeSlot, index) =>
                                  selectedDate > currentDate.value ? (
                                    <>
                                      <option value="" hidden>
                                        Select a time
                                      </option>

                                      <option key={index} value={timeSlot}>
                                        {timeSlot}
                                      </option>
                                    </>
                                  ) : (
                                    selectedDate &&
                                    timeSlot > time && (
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

                        <Col md={12}>
                          <div className="form-group pt-1">
                            <label htmlFor="date">Reason:</label>
                            <Field
                              name="reason"
                              as="textarea"
                              rows="2"
                              className="form-control"
                            />

                            <ErrorMessage
                              name="reason"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </Col>
                      </Row>

                      <button
                        type="submit"
                        className="common-submit  py-2 px-4 mt-4 border-0"
                        disabled={handleHoliday.isLoading}
                      >
                        {handleHoliday.isLoading ? "Loading..." : "Submit"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
                <span className="bar one"></span>Holiday List
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
          <div className="row px-0 dashboard-container">
            <div className="col-md-12">
              <div className="all-products-details-section">
                <div className="blog-header">
                  <div>
                    <button
                      className="common-add"
                      onClick={handleAddHolidayClick}
                      // onClick={() => setAddHoliday(true)}
                    >
                      <MdPlaylistAdd />
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <Table
                rowKey="name"
                dataSource={
                  holidayList && holidayList.length > 0 ? holidayList : ""
                }
                columns={columns}
                pagination={false}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ScheduleAppointments;
