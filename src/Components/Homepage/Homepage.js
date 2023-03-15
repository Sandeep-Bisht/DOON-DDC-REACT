import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {BsGlobe} from "react-icons/bs"

import "../../Css/Homepage.css";
import "../../Css/Common.css";

import Images from "../../Util/Images";

const Homepage = () => {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="home-appointment">
        <div className="container-fluid common-container-fluid-adjust-padding h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-6">
              <div className="home-appointment-appointment">
                <p className="home-title f2">
                  Book online for
                  <br /> doctor’s appointment
                </p>
                <p className="common-para">
                  Lorem ipsum dolor sit amet consectetur. Aliquet mollis commodo
                  non facilisis venenatis justo viverra duis viverra. Fringilla
                  mattis cursus ornare tristique aliquam. Lacinia dictum lectus
                  nulla rutrum in convallis ipsum. Velit mattis id nibh nisl
                  nulla. Purus non etiam senectus risus.
                </p>
                <a
                  href="#"
                  className="common-btn mt-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Book Appointment
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={Images.single} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-about">
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span> About us
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="about-us-card-wrapper">
                <li className="about-us-single-card">
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="about-us-single-card-title f1">
                        Our Vision
                      </p>
                    </div>
                    <div className="col-lg-10">
                      <div className="direction-wrapper">
                        <p className="common-para">
                        To Be a Centre of Excellence for various Gastrointestinal and Liver Disorders, Affordable and Quality Healthcare Centre.
                        </p>
                        <span className="direction">
                          <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 1.07538e-05C12.3247 -0.000694661 12.151 0.0333113 11.9889 0.100068C11.8268 0.166824 11.6796 0.26501 11.5556 0.388962C11.4317 0.512915 11.3335 0.66018 11.2667 0.822266C11.2 0.984352 11.166 1.15805 11.1667 1.33334V4.74534C5.16667 5.40934 0.5 10.4907 0.5 16.6667V18C3.49333 13.436 7.5 12.7733 11.1667 12.6813V16C11.1661 16.264 11.2439 16.5221 11.3903 16.7418C11.5367 16.9614 11.7451 17.1326 11.989 17.2336C12.2328 17.3346 12.5012 17.3609 12.76 17.3091C13.0188 17.2573 13.2564 17.1297 13.4427 16.9427L21.8333 8.66668L13.4427 0.389344C13.3189 0.265528 13.172 0.167391 13.0102 0.100574C12.8484 0.0337583 12.675 -0.000418113 12.5 1.07538e-05Z"
                              fill="#009DCE"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="about-us-single-card">
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="about-us-single-card-title f1">
                        Our Mission
                      </p>
                    </div>
                    <div className="col-lg-10">
                      <div className="direction-wrapper">
                        <p className="common-para">
                        To Achieve our Vision through Constant Technology Upgradation, Research and Innovations, Compassionate Patient Care, and Dissemination of Information.
                        </p>
                        <span className="direction">
                          <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 1.07538e-05C12.3247 -0.000694661 12.151 0.0333113 11.9889 0.100068C11.8268 0.166824 11.6796 0.26501 11.5556 0.388962C11.4317 0.512915 11.3335 0.66018 11.2667 0.822266C11.2 0.984352 11.166 1.15805 11.1667 1.33334V4.74534C5.16667 5.40934 0.5 10.4907 0.5 16.6667V18C3.49333 13.436 7.5 12.7733 11.1667 12.6813V16C11.1661 16.264 11.2439 16.5221 11.3903 16.7418C11.5367 16.9614 11.7451 17.1326 11.989 17.2336C12.2328 17.3346 12.5012 17.3609 12.76 17.3091C13.0188 17.2573 13.2564 17.1297 13.4427 16.9427L21.8333 8.66668L13.4427 0.389344C13.3189 0.265528 13.172 0.167391 13.0102 0.100574C12.8484 0.0337583 12.675 -0.000418113 12.5 1.07538e-05Z"
                              fill="#009DCE"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="about-us-single-card d-none">
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="about-us-single-card-title f1">
                        Our Core Value
                      </p>
                    </div>
                    <div className="col-lg-10">
                      <div className="direction-wrapper">
                        <p className="common-para">
                          Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                          commodo non facilisis venenatis justo viverra duis
                          viverra. Fringilla mattis cursus ornare tristique
                          aliquam. Lacinia dictum lectus nulla rutrum in
                          convallis ipsum. Velit mattis id nibh nisl nulla.
                          Purus non etiam senectus risus.
                        </p>
                        <span className="direction">
                          <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 1.07538e-05C12.3247 -0.000694661 12.151 0.0333113 11.9889 0.100068C11.8268 0.166824 11.6796 0.26501 11.5556 0.388962C11.4317 0.512915 11.3335 0.66018 11.2667 0.822266C11.2 0.984352 11.166 1.15805 11.1667 1.33334V4.74534C5.16667 5.40934 0.5 10.4907 0.5 16.6667V18C3.49333 13.436 7.5 12.7733 11.1667 12.6813V16C11.1661 16.264 11.2439 16.5221 11.3903 16.7418C11.5367 16.9614 11.7451 17.1326 11.989 17.2336C12.2328 17.3346 12.5012 17.3609 12.76 17.3091C13.0188 17.2573 13.2564 17.1297 13.4427 16.9427L21.8333 8.66668L13.4427 0.389344C13.3189 0.265528 13.172 0.167391 13.0102 0.100574C12.8484 0.0337583 12.675 -0.000418113 12.5 1.07538e-05Z"
                              fill="#009DCE"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="common-core-values">
        <div className="container-fluid common-container-fluid-adjust-padding">
           <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span> Core Values
                <span className="bar two"></span>
              </h1>
              </div>
             </div>  
             <div className="row g-0">
                <div className="col-md-12">
                     <ul className="core-value-card-wrapper">
                        <li className="core-value-card one">
                           <div className="core-value-pic">
                           <img src={Images.globe} className="img-fluid" alt="" />
                           </div>
                           <div className="core-value-title">
                               <p>Responsibility</p>
                           </div>
                        </li>
                        
                        <li className="core-value-card three">
                           <div className="core-value-pic">
                           <img src={Images.user} className="img-fluid" alt="" />
                           </div>
                           <div className="core-value-title">
                               <p>Coaching</p>
                           </div>
                        </li>
                        <li className="core-value-card four">
                           <div className="core-value-pic">
                           <img src={Images.bulb} className="img-fluid" alt="" />
                           </div>
                           <div className="core-value-title">
                               <p>Innovation</p>
                           </div>
                        </li>
                        <li className="core-value-card two">
                           <div className="core-value-pic"> <img src={Images.balance} className="img-fluid" alt="" /></div>
                           <div className="core-value-title">
                               <p>Ethics</p>
                           </div>
                        </li>
                     </ul>
                </div>
                <div className="col-md-12">
                    <p className="core-value-heading">
                      Core Values
                    </p>
                </div>
                <div className="col-md-12">
                     <ul className="core-value-card-wrapper invert">
                        <li className="core-value-card one">
                           <div className="core-value-pic">
                           <img src={Images.honesty} className="img-fluid" alt="" />
                           </div>
                           <div className="core-value-title">
                               <p>Trust</p>
                           </div>
                        </li>
                        
                        <li className="core-value-card three">
                           <div className="core-value-pic">
                           <img src={Images.group} className="img-fluid" alt="" />
                           </div>
                           <div className="core-value-title">
                               <p>Customers</p>
                           </div>
                        </li>
                        <li className="core-value-card four">
                           <div className="core-value-pic">
                           <img src={Images.team} className="img-fluid" alt="" />
                           </div>
                           <div className="core-value-title">
                               <p>Teamwork</p>
                           </div>
                        </li>
                        <li className="core-value-card two">
                           <div className="core-value-pic"> <img src={Images. target} className="img-fluid" alt="" /></div>
                           <div className="core-value-title">
                               <p>Goals</p>
                           </div>
                        </li>
                     </ul>
                </div>
              </div> 
        </div> 
      </section>
      <section className="home-faculty">
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span>Faculty
                <span className="bar two"></span>
              </h1>
            </div>
            <div className="col-md-10 col-lg-10 mx-auto">
              <p className="common-para text-center">
                Lorem ipsum dolor sit amet consectetur. Aliquet mollis commodo
                non facilisis venenatis justo viverra duis viverra. Fringilla
                mattis cursus ornare tristique aliquam. Lacinia dictum lectus
                nulla rutrum in convallis ipsum. Velit mattis id nibh nisl
                nulla. Purus non etiam senectus risus.
              </p>
            </div>
          </div>
          <div className="row card-row">
            <div className="col-lg-6 mx-auto">
              <div className="home-faculty-card">
                <div className="upper">
                  <div className="pic">
                    <img
                      src={Images.doctor1}
                      className="img-fluid"
                      alt="doctor-pic"
                    />
                  </div>
                </div>
                <div className="middle">
                  <p className="name">Dr. Sanjay Gupta</p>
                  <p className="designation">D.M (Gastroenterology)</p>
                  <p className="common-para">
                    Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                    commodo non facilisis venenatis justo viverra duis viverra.
                  </p>
                </div>
                <div className="lower">
                  <ul className="social-links ps-0 list-unstyled">
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="25"
                          viewBox="0 0 30 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 2.99517C28.8725 3.49589 27.6801 3.8269 26.46 3.9779C27.7473 3.19067 28.7119 1.95222 29.175 0.492285C27.9653 1.22943 26.6411 1.74879 25.26 2.0278C24.3368 1.00295 23.1075 0.320763 21.7647 0.0882177C20.422 -0.144328 19.0418 0.0859252 17.8407 0.742864C16.6396 1.3998 15.6854 2.44627 15.1279 3.71814C14.5703 4.99001 14.4409 6.41535 14.76 7.77061C12.3141 7.64397 9.92166 6.99203 7.73798 5.85715C5.5543 4.72226 3.62827 3.12982 2.085 1.18326C1.54371 2.1509 1.25928 3.24672 1.26 4.36177C1.25808 5.39729 1.50633 6.41723 1.98263 7.33078C2.45894 8.24433 3.14853 9.02314 3.99 9.59787C3.01197 9.57063 2.05483 9.30197 1.2 8.81475V8.89153C1.20733 10.3424 1.70399 11.7462 2.60597 12.8654C3.50795 13.9846 4.75988 14.7505 6.15 15.0336C5.61488 15.2003 5.05931 15.2882 4.5 15.2946C4.11284 15.29 3.72663 15.254 3.345 15.1871C3.74086 16.4352 4.50693 17.5259 5.53661 18.3075C6.56629 19.0891 7.80836 19.5227 9.09 19.548C6.9258 21.2912 4.25383 22.2426 1.5 22.2505C0.998603 22.2522 0.497603 22.2214 0 22.1583C2.81164 24.0167 6.08822 25.0032 9.435 24.999C11.7445 25.0236 14.0357 24.5768 16.1747 23.6848C18.3136 22.7927 20.2575 21.4733 21.8928 19.8036C23.5281 18.1339 24.8219 16.1474 25.6988 13.9601C26.5757 11.7728 27.0181 9.42854 27 7.06427C27 6.80323 27 6.52684 27 6.25045C28.177 5.35189 29.1922 4.25033 30 2.99517Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="16"
                          height="30"
                          viewBox="0 0 16 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.765 4.98004H15.585V0.210045C14.2196 0.0680654 12.8477 -0.00203142 11.475 4.47961e-05C7.39499 4.47961e-05 4.60499 2.49004 4.60499 7.05003V10.98H0V16.32H4.60499V30H10.125V16.32H14.715L15.405 10.98H10.125V7.57503C10.125 6.00004 10.545 4.98004 12.765 4.98004Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.4595 25.991C28.5336 28.8049 24.9057 30.2088 22.3138 29.9748C18.7739 29.6549 14.9221 27.7769 11.9982 25.709C7.70032 22.6691 3.67446 17.9673 1.32855 12.9775C-0.329395 9.45158 -0.701382 5.11573 1.76453 1.90185C2.6765 0.71389 3.66446 0.0799127 5.14441 0.00591538C7.20034 -0.0940811 7.48833 1.08188 8.1943 2.91381C8.72028 4.28376 9.42226 5.68171 9.81424 7.10166C10.5482 9.75157 7.98231 9.86156 7.65832 12.0275C7.45833 13.3934 9.11227 15.2254 9.86024 16.1993C11.302 18.0962 13.0678 19.7232 15.0761 21.0052C16.216 21.7231 18.052 23.0171 19.3559 22.3031C21.3638 21.2032 21.1758 17.8173 23.9817 18.9632C25.4357 19.5552 26.8436 20.4092 28.2316 21.1572C30.3775 22.3111 30.2775 23.5071 29.4595 25.991C30.0715 24.1351 28.8476 27.8469 29.4595 25.991Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="home-faculty-card">
                <div className="upper">
                  <div className="pic">
                    <img
                      src={Images.doctor2}
                      className="img-fluid"
                      alt="doctor-pic"
                    />
                  </div>
                </div>
                <div className="middle">
                  <p className="name">Dr.Name</p>
                  <p className="designation">Designation</p>
                  <p className="common-para">
                    Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                    commodo non facilisis venenatis justo viverra duis viverra.
                  </p>
                </div>
                <div className="lower">
                  <ul className="social-links ps-0 list-unstyled">
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="25"
                          viewBox="0 0 30 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 2.99517C28.8725 3.49589 27.6801 3.8269 26.46 3.9779C27.7473 3.19067 28.7119 1.95222 29.175 0.492285C27.9653 1.22943 26.6411 1.74879 25.26 2.0278C24.3368 1.00295 23.1075 0.320763 21.7647 0.0882177C20.422 -0.144328 19.0418 0.0859252 17.8407 0.742864C16.6396 1.3998 15.6854 2.44627 15.1279 3.71814C14.5703 4.99001 14.4409 6.41535 14.76 7.77061C12.3141 7.64397 9.92166 6.99203 7.73798 5.85715C5.5543 4.72226 3.62827 3.12982 2.085 1.18326C1.54371 2.1509 1.25928 3.24672 1.26 4.36177C1.25808 5.39729 1.50633 6.41723 1.98263 7.33078C2.45894 8.24433 3.14853 9.02314 3.99 9.59787C3.01197 9.57063 2.05483 9.30197 1.2 8.81475V8.89153C1.20733 10.3424 1.70399 11.7462 2.60597 12.8654C3.50795 13.9846 4.75988 14.7505 6.15 15.0336C5.61488 15.2003 5.05931 15.2882 4.5 15.2946C4.11284 15.29 3.72663 15.254 3.345 15.1871C3.74086 16.4352 4.50693 17.5259 5.53661 18.3075C6.56629 19.0891 7.80836 19.5227 9.09 19.548C6.9258 21.2912 4.25383 22.2426 1.5 22.2505C0.998603 22.2522 0.497603 22.2214 0 22.1583C2.81164 24.0167 6.08822 25.0032 9.435 24.999C11.7445 25.0236 14.0357 24.5768 16.1747 23.6848C18.3136 22.7927 20.2575 21.4733 21.8928 19.8036C23.5281 18.1339 24.8219 16.1474 25.6988 13.9601C26.5757 11.7728 27.0181 9.42854 27 7.06427C27 6.80323 27 6.52684 27 6.25045C28.177 5.35189 29.1922 4.25033 30 2.99517Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="16"
                          height="30"
                          viewBox="0 0 16 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.765 4.98004H15.585V0.210045C14.2196 0.0680654 12.8477 -0.00203142 11.475 4.47961e-05C7.39499 4.47961e-05 4.60499 2.49004 4.60499 7.05003V10.98H0V16.32H4.60499V30H10.125V16.32H14.715L15.405 10.98H10.125V7.57503C10.125 6.00004 10.545 4.98004 12.765 4.98004Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.4595 25.991C28.5336 28.8049 24.9057 30.2088 22.3138 29.9748C18.7739 29.6549 14.9221 27.7769 11.9982 25.709C7.70032 22.6691 3.67446 17.9673 1.32855 12.9775C-0.329395 9.45158 -0.701382 5.11573 1.76453 1.90185C2.6765 0.71389 3.66446 0.0799127 5.14441 0.00591538C7.20034 -0.0940811 7.48833 1.08188 8.1943 2.91381C8.72028 4.28376 9.42226 5.68171 9.81424 7.10166C10.5482 9.75157 7.98231 9.86156 7.65832 12.0275C7.45833 13.3934 9.11227 15.2254 9.86024 16.1993C11.302 18.0962 13.0678 19.7232 15.0761 21.0052C16.216 21.7231 18.052 23.0171 19.3559 22.3031C21.3638 21.2032 21.1758 17.8173 23.9817 18.9632C25.4357 19.5552 26.8436 20.4092 28.2316 21.1572C30.3775 22.3111 30.2775 23.5071 29.4595 25.991C30.0715 24.1351 28.8476 27.8469 29.4595 25.991Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="home-faculty-card">
                <div className="upper">
                  <div className="pic">
                    <img
                      src={Images.doctor3}
                      className="img-fluid"
                      alt="doctor-pic"
                    />
                  </div>
                </div>
                <div className="middle">
                  <p className="name">Dr.Name</p>
                  <p className="designation">Designation</p>
                  <p className="common-para">
                    Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                    commodo non facilisis venenatis justo viverra duis viverra.
                  </p>
                </div>
                <div className="lower">
                  <ul className="social-links ps-0 list-unstyled">
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="25"
                          viewBox="0 0 30 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 2.99517C28.8725 3.49589 27.6801 3.8269 26.46 3.9779C27.7473 3.19067 28.7119 1.95222 29.175 0.492285C27.9653 1.22943 26.6411 1.74879 25.26 2.0278C24.3368 1.00295 23.1075 0.320763 21.7647 0.0882177C20.422 -0.144328 19.0418 0.0859252 17.8407 0.742864C16.6396 1.3998 15.6854 2.44627 15.1279 3.71814C14.5703 4.99001 14.4409 6.41535 14.76 7.77061C12.3141 7.64397 9.92166 6.99203 7.73798 5.85715C5.5543 4.72226 3.62827 3.12982 2.085 1.18326C1.54371 2.1509 1.25928 3.24672 1.26 4.36177C1.25808 5.39729 1.50633 6.41723 1.98263 7.33078C2.45894 8.24433 3.14853 9.02314 3.99 9.59787C3.01197 9.57063 2.05483 9.30197 1.2 8.81475V8.89153C1.20733 10.3424 1.70399 11.7462 2.60597 12.8654C3.50795 13.9846 4.75988 14.7505 6.15 15.0336C5.61488 15.2003 5.05931 15.2882 4.5 15.2946C4.11284 15.29 3.72663 15.254 3.345 15.1871C3.74086 16.4352 4.50693 17.5259 5.53661 18.3075C6.56629 19.0891 7.80836 19.5227 9.09 19.548C6.9258 21.2912 4.25383 22.2426 1.5 22.2505C0.998603 22.2522 0.497603 22.2214 0 22.1583C2.81164 24.0167 6.08822 25.0032 9.435 24.999C11.7445 25.0236 14.0357 24.5768 16.1747 23.6848C18.3136 22.7927 20.2575 21.4733 21.8928 19.8036C23.5281 18.1339 24.8219 16.1474 25.6988 13.9601C26.5757 11.7728 27.0181 9.42854 27 7.06427C27 6.80323 27 6.52684 27 6.25045C28.177 5.35189 29.1922 4.25033 30 2.99517Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="16"
                          height="30"
                          viewBox="0 0 16 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.765 4.98004H15.585V0.210045C14.2196 0.0680654 12.8477 -0.00203142 11.475 4.47961e-05C7.39499 4.47961e-05 4.60499 2.49004 4.60499 7.05003V10.98H0V16.32H4.60499V30H10.125V16.32H14.715L15.405 10.98H10.125V7.57503C10.125 6.00004 10.545 4.98004 12.765 4.98004Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.4595 25.991C28.5336 28.8049 24.9057 30.2088 22.3138 29.9748C18.7739 29.6549 14.9221 27.7769 11.9982 25.709C7.70032 22.6691 3.67446 17.9673 1.32855 12.9775C-0.329395 9.45158 -0.701382 5.11573 1.76453 1.90185C2.6765 0.71389 3.66446 0.0799127 5.14441 0.00591538C7.20034 -0.0940811 7.48833 1.08188 8.1943 2.91381C8.72028 4.28376 9.42226 5.68171 9.81424 7.10166C10.5482 9.75157 7.98231 9.86156 7.65832 12.0275C7.45833 13.3934 9.11227 15.2254 9.86024 16.1993C11.302 18.0962 13.0678 19.7232 15.0761 21.0052C16.216 21.7231 18.052 23.0171 19.3559 22.3031C21.3638 21.2032 21.1758 17.8173 23.9817 18.9632C25.4357 19.5552 26.8436 20.4092 28.2316 21.1572C30.3775 22.3111 30.2775 23.5071 29.4595 25.991C30.0715 24.1351 28.8476 27.8469 29.4595 25.991Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="home-faculty-card">
                <div className="upper">
                  <div className="pic">
                    <img
                      src={Images.doctor4}
                      className="img-fluid"
                      alt="doctor-pic"
                    />
                  </div>
                </div>
                <div className="middle">
                  <p className="name">Dr.Name</p>
                  <p className="designation">Designation</p>
                  <p className="common-para">
                    Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                    commodo non facilisis venenatis justo viverra duis viverra.
                  </p>
                </div>
                <div className="lower">
                  <ul className="social-links ps-0 list-unstyled">
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="25"
                          viewBox="0 0 30 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 2.99517C28.8725 3.49589 27.6801 3.8269 26.46 3.9779C27.7473 3.19067 28.7119 1.95222 29.175 0.492285C27.9653 1.22943 26.6411 1.74879 25.26 2.0278C24.3368 1.00295 23.1075 0.320763 21.7647 0.0882177C20.422 -0.144328 19.0418 0.0859252 17.8407 0.742864C16.6396 1.3998 15.6854 2.44627 15.1279 3.71814C14.5703 4.99001 14.4409 6.41535 14.76 7.77061C12.3141 7.64397 9.92166 6.99203 7.73798 5.85715C5.5543 4.72226 3.62827 3.12982 2.085 1.18326C1.54371 2.1509 1.25928 3.24672 1.26 4.36177C1.25808 5.39729 1.50633 6.41723 1.98263 7.33078C2.45894 8.24433 3.14853 9.02314 3.99 9.59787C3.01197 9.57063 2.05483 9.30197 1.2 8.81475V8.89153C1.20733 10.3424 1.70399 11.7462 2.60597 12.8654C3.50795 13.9846 4.75988 14.7505 6.15 15.0336C5.61488 15.2003 5.05931 15.2882 4.5 15.2946C4.11284 15.29 3.72663 15.254 3.345 15.1871C3.74086 16.4352 4.50693 17.5259 5.53661 18.3075C6.56629 19.0891 7.80836 19.5227 9.09 19.548C6.9258 21.2912 4.25383 22.2426 1.5 22.2505C0.998603 22.2522 0.497603 22.2214 0 22.1583C2.81164 24.0167 6.08822 25.0032 9.435 24.999C11.7445 25.0236 14.0357 24.5768 16.1747 23.6848C18.3136 22.7927 20.2575 21.4733 21.8928 19.8036C23.5281 18.1339 24.8219 16.1474 25.6988 13.9601C26.5757 11.7728 27.0181 9.42854 27 7.06427C27 6.80323 27 6.52684 27 6.25045C28.177 5.35189 29.1922 4.25033 30 2.99517Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="16"
                          height="30"
                          viewBox="0 0 16 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.765 4.98004H15.585V0.210045C14.2196 0.0680654 12.8477 -0.00203142 11.475 4.47961e-05C7.39499 4.47961e-05 4.60499 2.49004 4.60499 7.05003V10.98H0V16.32H4.60499V30H10.125V16.32H14.715L15.405 10.98H10.125V7.57503C10.125 6.00004 10.545 4.98004 12.765 4.98004Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.4595 25.991C28.5336 28.8049 24.9057 30.2088 22.3138 29.9748C18.7739 29.6549 14.9221 27.7769 11.9982 25.709C7.70032 22.6691 3.67446 17.9673 1.32855 12.9775C-0.329395 9.45158 -0.701382 5.11573 1.76453 1.90185C2.6765 0.71389 3.66446 0.0799127 5.14441 0.00591538C7.20034 -0.0940811 7.48833 1.08188 8.1943 2.91381C8.72028 4.28376 9.42226 5.68171 9.81424 7.10166C10.5482 9.75157 7.98231 9.86156 7.65832 12.0275C7.45833 13.3934 9.11227 15.2254 9.86024 16.1993C11.302 18.0962 13.0678 19.7232 15.0761 21.0052C16.216 21.7231 18.052 23.0171 19.3559 22.3031C21.3638 21.2032 21.1758 17.8173 23.9817 18.9632C25.4357 19.5552 26.8436 20.4092 28.2316 21.1572C30.3775 22.3111 30.2775 23.5071 29.4595 25.991C30.0715 24.1351 28.8476 27.8469 29.4595 25.991Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="home-scope-services pb-0">
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span>Scope of Services
                <span className="bar two"></span>
              </h1>
            </div>
            <div className="col-md-10 col-lg-10 mx-auto">
              <p className="common-para text-center mb-0">
                Lorem ipsum dolor sit amet consectetur. Aliquet mollis commodo
                non facilisis venenatis justo viverra duis viverra. Fringilla
                mattis cursus ornare tristique aliquam. Lacinia dictum lectus
                nulla rutrum in convallis ipsum. Velit mattis id nibh nisl
                nulla. Purus non etiam senectus risus.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="row card-row g-0">
            <div className="col-lg-3">
              <Link to="/service-details">
                <div className="scope-service-card">
                  <img
                    src={Images.scope1}
                    className="img-fluid"
                    alt="scope-pic"
                  />
                  <a href="#">procedure</a>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/service-details">
                <div className="scope-service-card">
                  <img
                    src={Images.scope2}
                    className="img-fluid"
                    alt="scope-pic"
                  />
                  <a href="#">Treated Conditions</a>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/service-details">
                <div className="scope-service-card">
                  <img
                    src={Images.scope3}
                    className="img-fluid"
                    alt="scope-pic"
                  />
                  <a href="#">Endoscopy</a>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/service-details">
                <div className="scope-service-card">
                  <img
                    src={Images.scope4}
                    className="img-fluid"
                    alt="scope-pic"
                  />
                  <a href="#">Enhanced Services</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="home-training">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="left">
                <img src={Images.training} className="img-fluid" alt="pic" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="right">
                <h2 className="common-heading">Training</h2>
                <p className="common-para">
                  Lorem ipsum dolor sit amet consectetur. Aliquet mollis commodo
                  non facilisis venenatis justo viverra duis viverra. Fringilla
                  mattis cursus ornare tristique aliquam. Lacinia dictum lectus
                  nulla rutrum in convallis ipsum. Velit mattis id nibh nisl
                  nulla. Purus non etiam senectus risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-research">
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span>Research Work
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12 px-0">
              <div className="home-research-pic-box">
                <img src={Images.homeResearch} className="img-fluid" alt="" />
                <div className="clinical-trail-box">
                  <div className="clinical-trail-box-inner-wrapper">
                    <div className="clinical-title-box mb-3">
                      <div className="row align-items-center">
                        <div className="col-5">
                          <p className="clinical-title">Clinical Trials</p>
                        </div>
                        <div className="col-7">
                          <span></span>{" "}
                        </div>
                      </div>
                    </div>
                    <p className="common-para">
                      Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                      commodo non facilisis venenatis justo viverra duis
                      viverra. Fringilla mattis cursus ornare tristique aliquam.
                      Lacinia dictum lectus nulla rutrum in convallis ipsum.
                      Velit mattis id nibh nisl nulla. Purus non etiam senectus
                      risus.
                    </p>
                    <a href="#" className="common-btn mt-4">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-patient-corner">
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span>Patient Corner
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="patient-corner-card">
                <div className="upper">
                  <img src={Images.patient1} className="img-fluid" alt="" />
                </div>
                <div className="bottom">
                  <div className="blog-box text-center ">
                    <span className="blog-box-text">18 jan 2023</span>
                    <span className="blog-box-text border-0 pe-0 second">
                      Blog by name
                    </span>
                  </div>
                  <div className="patient-corner-card-content">
                    <p className="title">Card content Heading</p>
                    <p className="common-para">
                      Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                      commodo non facilisis venenatis justo viverra duis
                      viverra. Fringilla mattis cursus ornare tristique aliquam.
                    </p>
                    <a href="#" className="common-btn mt-4">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="patient-corner-card">
                <div className="upper">
                  <img src={Images.patient2} className="img-fluid" alt="" />
                </div>
                <div className="bottom">
                  <div className="blog-box text-center ">
                    <span className="blog-box-text">18 jan 2023</span>
                    <span className="blog-box-text border-0 pe-0 second">
                      Blog by name
                    </span>
                  </div>
                  <div className="patient-corner-card-content">
                    <p className="title">Card content Heading</p>
                    <p className="common-para">
                      Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                      commodo non facilisis venenatis justo viverra duis
                      viverra. Fringilla mattis cursus ornare tristique aliquam.
                    </p>
                    <a href="#" className="common-btn mt-4">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="patient-corner-card">
                <div className="upper">
                  <img src={Images.patient3} className="img-fluid" alt="" />
                </div>
                <div className="bottom">
                  <div className="blog-box text-center ">
                    <span className="blog-box-text">18 jan 2023</span>
                    <span className="blog-box-text border-0 pe-0 second">
                      Blog by name
                    </span>
                  </div>
                  <div className="patient-corner-card-content">
                    <p className="title">Card content Heading</p>
                    <p className="common-para">
                      Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                      commodo non facilisis venenatis justo viverra duis
                      viverra. Fringilla mattis cursus ornare tristique aliquam.
                    </p>
                    <a href="#" className="common-btn mt-4">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="patient-corner-card">
                <div className="upper">
                  <img src={Images.patient4} className="img-fluid" alt="" />
                </div>
                <div className="bottom">
                  <div className="blog-box text-center ">
                    <span className="blog-box-text">18 jan 2023</span>
                    <span className="blog-box-text border-0 pe-0 second">
                      Blog by name
                    </span>
                  </div>
                  <div className="patient-corner-card-content">
                    <p className="title">Card content Heading</p>
                    <p className="common-para">
                      Lorem ipsum dolor sit amet consectetur. Aliquet mollis
                      commodo non facilisis venenatis justo viverra duis
                      viverra. Fringilla mattis cursus ornare tristique aliquam.
                    </p>
                    <a href="#" className="common-btn mt-4">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center mb-3">
                <span className="bar one"></span>Contact Us
                <span className="bar two"></span>
              </h1>
            </div>
            <div className="col-md-12 text-center mb-5">
              <p className="get-in-touch">Get in touch with us</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="map-div">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.031780120001!2d78.01209227394212!3d30.316209142573676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a217c7f5be7%3A0x1f456d474de72e23!2s52%2F2%2C%20Ankit%20Puram%2C%20Shakti%20Enclave%2C%20Kaonli%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1678688176177!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrapper">
                <form>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contact No."
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message"
                    />
                  </div>

                  <div className="input-wrapper">
                    <button type="submit" className="common-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Homepage;
