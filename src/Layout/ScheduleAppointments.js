import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Table } from "antd";
import { MdPlaylistAdd } from "react-icons/md";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useMutation } from "react-query";
import { url } from "../Util/url";
import * as Yup from "yup";
import "../Css/Schedule.css";

const ScheduleAppointments = () => {
  const [currentDate, setCurrentDate] = useState(undefined);
  const [holidayList, setHolidayList] = useState("");
  const [addHoliday, setAddHoliday] = useState(false);

  
  useEffect(() => {
    const date = new Date().toISOString().split("T")[0];
    setCurrentDate(date);
    getAllHolidays();
  }, []);

  const getAllHolidays = async () => {
    const response = await axios.get(`${url}/holidayList/get_all_holidayList`);
    setHolidayList(response.data.data);
  };
  console.log(holidayList, "holiday list");


  const handleHoliday = useMutation(
    async (data) => {
      console.log("dataaaaaaa", data);
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
    reason: Yup.string().required("Reason is required"),
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
  ];

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
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                        <Col md={12}>
                          <div className="form-group pt-3">
                            <label htmlFor="date">Date:</label>
                            <Field
                              name="date"
                              type="date"
                              className="form-control"
                              min={currentDate && currentDate}
                              //value= {currentDate && currentDate}
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
