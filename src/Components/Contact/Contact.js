import React from "react";
import { useEffect } from "react";
import "../../Css/Contact.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import { url } from "../../Util/url";
import { signal, effect } from "@preact/signals";
import { useMutation } from "react-query";


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Number is required"),
  });

  const contactusHandler = useMutation(
    async (data) => {
     
    },
    {
      onSuccess: (res) => {
        responseMsg.value = res.msg;
        if (res.status === 200) {
        }
      },
      onError: (error) => {
        responseMsg.value = error.msg;
      },
    }
  );

  const responseMsg = signal(undefined);


  return (
    <>
      <div className="common-redirect-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Contact</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-single shop-description">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span> Contact Us
                <span className="bar two"></span>
              </h1>
              <p className="common-para-second">
                The Doon Digestive Diseases Center has top notch infrastructure
                with state-of-the-art and sophisticated technology. And apart
                from being equipped with the best medical facilities, it is
                Human Touch & Care by which the hospital has been able to gain
                trust of people.
              </p>
              <ul className="mt-5 ps-0 address-list">
                <li className="py-2 d-flex">
                  <div className="">
                    {/* <svg className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"></path></svg><!-- <i className="fal fa-map-marker-alt  fa-2x"></i> Font Awesome fontawesome.com --> */}
                  </div>
                  <div>
                    <h6 className="mb-0">Adress</h6>
                    <p className="color1">
                      Digestive Disease Centre, 2, Gms Road, Dehradun City,
                      dehradun - 248001 (2Ankit Puram, Near Chaudhary Farm
                      House)
                    </p>
                  </div>
                </li>
                <li className="py-2 d-flex">
                  <div className="">
                    {/* <svg className="svg-inline--fa fa-phone-alt fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z"></path></svg><!-- <i className="fal fa-phone-alt fa-2x"></i> Font Awesome fontawesome.com --> */}
                  </div>
                  <div>
                    <h6 className="mb-0">Phone</h6>
                    <p>
                      <a className=" color1 common-para" href="tel:85(0)225639">
                        Phone: 9997711444
                      </a>
                    </p>
                  </div>
                </li>
                <li className="py-2 d-flex">
                  <div className="">
                    {/* <svg className="svg-inline--fa fa-envelope fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg><!-- <i className="fal fa-envelope fa-2x"></i> Font Awesome fontawesome.com --> */}
                  </div>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <p>
                      <a
                        className="color1 common-para"
                        href="mailto:mayank@proponenttechnlogies.com"
                      >
                        {" "}
                        info@doonddc.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="contact-form-wrapper">
                <div className="mt-2">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      {/* <svg className="svg-inline--fa fa-envelope fa-w-16 fa-5x text-white" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg><!-- <i className="fal fa-envelope fa-5x text-white"></i> Font Awesome fontawesome.com --> */}
                      <h4 className="text-white text-uppercase mb-4 mt-2">
                        Send us a message
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 d-flex flex-column">
                    <Formik
                  initialValues={{
                    name: "",
                    email: "",
                     number: "",
                     message:""
                  }}
                  validationSchema={contactSchema}
                  onSubmit={(values, { resetForm }) => {
                    contactusHandler.mutate(values, {
                      onSuccess: () => {
                        resetForm();
                      },
                    });
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                      <div className="mb-3 cover">
                          <label htmlFor="name">Name:</label>
                          <Field
                            name="name"
                            className="form-control"
                            autoComplete="new-email" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        <div className="mb-3 cover">
                          <label htmlFor="email">Email:</label>
                          <Field
                            name="email"
                            className="form-control"
                            autoComplete="new-email" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        <div className="mb-3 cover">
                          <label htmlFor="number">Contact:</label>
                          <Field
                            name="number"
                            className="form-control"
                            autoComplete="new-email" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="number"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        <div className="mb-3 cover">
                          <label htmlFor="message">Message:</label>
                          <Field
                            name="message"
                            className="form-control"
                            autoComplete="new-email" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Row>

                      <button
                        type="submit"
                        className="common-submit  py-2 px-4 mt-4 border-0"
                        disabled={contactusHandler.isLoading}
                      >
                        {contactusHandler.isLoading ? "Loading..." : "Submit"}
                      </button>
                    </Form>
                  )}
                </Formik>    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
