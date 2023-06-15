import React, { useEffect, useState, useMemo } from "react";
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

  const options = { hour: "2-digit", minute: "2-digit", hour12: false };
  const [time] = useState(new Date().toLocaleTimeString([], options));

  console.log(time, "timeeeeeeeeeeee");

  const startTimeMorning = new Date();
  startTimeMorning.setHours(9, 0, 0); // Set start time for the morning range (9 am)

  const endTimeMorning = new Date();
  endTimeMorning.setHours(13, 0, 0); // Set end time for the morning range (1 pm)

  const startTimeAfternoon = new Date();
  startTimeAfternoon.setHours(14, 0, 0); // Set start time for the afternoon range (2 pm)

  const endTimeAfternoon = new Date();
  endTimeAfternoon.setHours(18, 0, 0); // Set end time for the afternoon range (6 pm)

  const [timeSlots, setTimeSlots] = useState([]);

  // Generate morning time slots
  let currentTime = startTimeMorning;
  while (currentTime < endTimeMorning) {
    timeSlots.push(
      currentTime.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
  }

  // Generate afternoon time slots
  currentTime = startTimeAfternoon;
  while (currentTime < endTimeAfternoon) {
    timeSlots.push(
      currentTime.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
  }

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
      setSelectedDate(formattedDate);
      setSelectedDay(date);
      form.setFieldValue(field.name, formattedDate);
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

  //get upcoming holiday call

  const fetchData = async (date) => {
    console.log(date, "current date");
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
  console.log(data, "dataaaaaaaaaaaaaaaaaa");

  data?.data.map((item) => {
    console.log(JSON.parse(item.time), "time in parse");
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
  console.log(disabledDays, "disabledDays");

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
              <div className="form-wrapper">
                <Formik
                  initialValues={{
                    date: "",
                    time: "",
                    reason: "",
                  }}
                  validationSchema={holidaySchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values, "valuesss");
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
                              {selectedDate &&  selectedDate > currentDate.value &&
                              <option value="fullday">
                                          Full Day
                              </option> 
                                }
                              

                              {selectedDate ? (
                                timeSlots.map((timeSlot, index) =>
                                  selectedDate > currentDate.value &&
                                  
                                  index <= 31 ? (
                                    <>
                                      <option value="" hidden>
                                        Select a time
                                      </option>                                    

                                      <option key={index} value={timeSlot}>
                                        {timeSlot}
                                      </option>
                                    </>
                                    
                                  )  : (
                                    
                                    selectedDate &&
                                    timeSlot > time &&
                                    index <= 31 && (
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
                          <div className="form-group pt-3">
                            <label htmlFor="date">Reason:</label>
                            <Field
                              name="reason"
                              as="textarea"
                              rows="3"
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
                      onClick={() => setAddHoliday(true)}
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
