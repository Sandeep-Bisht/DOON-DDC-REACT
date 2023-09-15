import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from 'react-icons/fi'
import "../../Css/Common.css";
import "../../Css/Footer.css";
import Images from "../../Images/logo1.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-page">
        <div className="container-fluid common-container-fluid-adjust-padding">
          <div className="row">
            <div className="col-md-3 col-6">
              <p className="footer-title">Timings</p>
              <ul>
                <li>
                  <div className="timing-box">
                    <div className="left">
                        <p>Monday:</p>
                    </div>
                    <div className="right"> <span><strong>9AM to 1PM</strong> </span>
                  <span><strong>2PM to 6PM</strong></span></div>
                  </div>
                 
                  
                  
                </li>
                <li>
                  <div className="timing-box">
                    <div className="left">
                        <p>Tuesday:</p>
                    </div>
                    <div className="right"> <span><strong>9AM to 1PM</strong> </span>
                  <span><strong>2PM to 6PM</strong></span></div>
                  </div>
                </li>
                <li>
                  <div className="timing-box">
                    <div className="left">
                        <p>Wednesday:</p>
                    </div>
                    <div className="right"> <span><strong>9AM to 1PM</strong> </span>
                  <span><strong>2PM to 6PM</strong></span></div>
                  </div>
                </li>
                <li>
                  <div className="timing-box">
                    <div className="left">
                        <p>Thursday:</p>
                    </div>
                    <div className="right"> <span><strong>Holiday</strong> </span>
                 </div>
                  </div>
                </li>
                <li>
                  <div className="timing-box">
                    <div className="left">
                        <p>Friday:</p>
                    </div>
                    <div className="right"> <span><strong>9AM to 1PM</strong> </span>
                  <span><strong>2PM to 6PM</strong></span></div>
                  </div>
                </li>
                <li>
                  <div className="timing-box">
                    <div className="left">
                        <p>Saturday:</p>
                    </div>
                    <div className="right"> <span><strong>9AM to 1PM</strong> </span>
                  <span><strong>2PM to 6PM</strong></span></div>
                  </div>
                </li>
               
              
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <p className="footer-title">Treatments</p>
              <ul>
                <li>
                  <Link>Inguinal Hernia</Link>
                </li>
                <li>
                  <Link>Intestinal Pseudo-obstruction</Link>
                </li>
                <li>
                  <Link>Irritable Bowel Syndrome (IBS)</Link>
                </li>
                <li>
                  <Link>Lactose Intolerance</Link>
                </li>
                <li>
                  <Link>Microscopic Colitis</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <p className="footer-title">Quick links</p>
              <ul>
                <li>
                  <Link>Our Vision</Link>
                </li>
                <li>
                  <Link>Our Mission</Link>
                </li>
                <li>
                  <Link>Our Core Value</Link>
                </li>
                <li>
                  <Link to="/training">Training</Link>
                </li>
                <li>
                  <Link to="/patient-corner">Patient corner</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <p className="footer-title">Contact</p>
              <div className="footer-contact-icons">
                <div>
                  <svg
                    width="20"
                    height="25"
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 16.75 8.8125 24.375 9.1875 24.7C9.41392 24.8937 9.70206 25.0001 10 25.0001C10.2979 25.0001 10.5861 24.8937 10.8125 24.7C11.25 24.375 20 16.75 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 22.0625C7.3375 19.5625 2.5 14.175 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10C17.5 14.175 12.6625 19.575 10 22.0625ZM10 5C9.01109 5 8.0444 5.29324 7.22215 5.84265C6.3999 6.39206 5.75904 7.17295 5.3806 8.08658C5.00216 9.00021 4.90315 10.0055 5.09607 10.9755C5.289 11.9454 5.7652 12.8363 6.46447 13.5355C7.16373 14.2348 8.05464 14.711 9.02455 14.9039C9.99445 15.0969 10.9998 14.9978 11.9134 14.6194C12.827 14.241 13.6079 13.6001 14.1573 12.7779C14.7068 11.9556 15 10.9889 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM10 12.5C9.50555 12.5 9.0222 12.3534 8.61108 12.0787C8.19995 11.804 7.87952 11.4135 7.6903 10.9567C7.50108 10.4999 7.45157 9.99723 7.54804 9.51227C7.6445 9.02732 7.8826 8.58186 8.23223 8.23223C8.58187 7.8826 9.02732 7.6445 9.51227 7.54804C9.99723 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.0222 12.5 9.50555 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5Z"
                      fill="#009DCE"
                    />
                  </svg>
                </div>

                <div className="footer-contact-details">
                  <address className="footer-content">
                    Digestive Disease Centre, 2, Gms Road, Dehradun City,
                    dehradun - 248001 (2Ankit Puram, Near Chaudhary Farm House)
                  </address>
                </div>
              </div>
              <div className="footer-contact-icons d-flex align-items-center mb-3">
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.04 16.8454L20.9863 14.7917C20.3741 14.1844 19.5478 13.842 18.6855 13.8383C17.8232 13.8347 16.994 14.17 16.3767 14.7721C16.0473 15.1034 15.6127 15.3095 15.1477 15.355C14.6828 15.4005 14.2165 15.2825 13.8291 15.0213C12.3002 14.001 10.9868 12.6901 9.96348 11.1631C9.70692 10.7714 9.5932 10.3033 9.64149 9.83754C9.68979 9.3718 9.89713 8.93694 10.2286 8.60623C10.8252 7.98831 11.1562 7.1614 11.1508 6.30249C11.1454 5.44357 10.804 4.6209 10.1997 4.01054L8.14595 1.95681C7.53109 1.34406 6.69843 1 5.83039 1C4.96234 1 4.12968 1.34406 3.51483 1.95681L2.92392 2.54866C-0.156645 5.62925 0.0739308 12.106 6.48337 18.5117C10.3481 22.3774 14.238 23.9961 17.3923 23.9961C18.3208 24.027 19.2462 23.8728 20.1146 23.5425C20.9829 23.2122 21.7768 22.7124 22.45 22.0722L23.0419 21.4803C23.6557 20.8652 24.0003 20.0315 24 19.1625C23.9996 18.2934 23.6544 17.4601 23.04 16.8454ZM21.72 20.1603L21.1282 20.7522C18.7011 23.1793 13.3437 22.7359 7.80148 17.1927C2.25927 11.6495 1.81492 6.28831 4.24203 3.86118L4.8292 3.27027C5.09358 3.00684 5.45158 2.85894 5.82479 2.85894C6.198 2.85894 6.55599 3.00684 6.82037 3.27027L8.87408 5.324C9.13365 5.58487 9.28099 5.93687 9.28465 6.30486C9.28832 6.67286 9.14801 7.02772 8.89368 7.29371C8.26289 7.92852 7.86941 8.76084 7.77917 9.6512C7.68893 10.5416 7.9074 11.4359 8.39799 12.1844C9.56072 13.9244 11.0559 15.4173 12.7976 16.5775C13.5438 17.0682 14.4358 17.2879 15.3246 17.2001C16.2133 17.1122 17.045 16.7221 17.6808 16.0949C17.9462 15.8375 18.3021 15.6946 18.6718 15.6969C19.0415 15.6992 19.3956 15.8464 19.6579 16.107L21.7116 18.1607C21.844 18.2912 21.9493 18.4465 22.0214 18.6178C22.0935 18.7891 22.131 18.9729 22.1318 19.1588C22.1325 19.3446 22.0966 19.5288 22.0259 19.7007C21.9552 19.8725 21.8513 20.0288 21.72 20.1603Z"
                      fill="#009DCE"
                      stroke="#009DCE"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                <div className="footer-contact-details">
                  <p className="footer-content mb-0">9997711444</p>
                </div>
              </div>
              <div className="footer-contact-icons d-flex align-items-center">
                <div>
                 
                  <svg stroke="#009DCE" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="footer-contact-details">
                  <p className="footer-content mb-0">info@doonddc.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
              <div className="copyright-link">
                    Powered by {" "}
                 <Link to="https://giksindia.com" target="_blank" className="mb-0">
                    <img
                      src={Images}
                      className="img-fluid"
                      alt="logo"
                    />   
                 </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
