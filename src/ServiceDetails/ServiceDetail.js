import React from 'react';
import { useEffect } from 'react';
import Images from '../Util/Images';
import "../Css/ServiceDetails.css";

const ServiceDetail = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
      }, [])
  return (
    <>
     <div className="common-redirect-banner">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="common-redirect-banner-title">Service Detail</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                        <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Service Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  </div>
 
  <section className="service-detail-single section-padding">
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="common-heading d-flex align-items-center justify-content-center ">
              <span className="bar one"></span> Service Name<span className="bar two"></span>
            </h1>
          </div>
            <div className="col-lg-12">
                <div className="left">
                    <div className="upper-pic">
                        <img src={Images.serviceDetail} alt="" className="img-fluid" />
                    </div>
                  
                    <p className="common-para-second-second mb-3">
                        Asthma is the common chronic, long-lasting inflammatory disease of the airways characterised by variable and recurring symptoms, reversible airflow obstruction, and bronchospasm. Sometimes it is hereditary. Inflammation causes the airways to spasm and swells periodically so that the airways become narrow. As a result, Asthma patients usually experience more difficulty breathing, most frequently during the night and in the early morning.
                    </p>
                    <p className="common-para-second-second">
                        Asthma include regular wheezing, coughing, chest tightness, and shortness of breath. There are various medical tests to identify whether the person has Asthma or not. The two most common test for Asthma are:
                    </p>
                    <div className="row py-4">
                        <div className="col-lg-6">
                            <h2 className="colored-heading">
                                Personal care
                            </h2>
                            <ul className="ps-0">
                                <li className="common-para-second">Assisting with walking from bed to wheelchair</li>
                                <li className="common-para-second">Bathing,dressing and grooming assistance</li>
                                <li className="common-para-second">Medication reminders</li>
                                <li className="common-para-second">Safety and fall prevention</li>
                                <li className="common-para-second">Status reporting to family</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="colored-heading">
                                Lifestyle support
                            </h2>
                            <ul className="ps-0">
                                <li className="common-para-second">Assisting with walking from bed to wheelchair</li>
                                <li className="common-para-second">Bathing,dressing and grooming assistance</li>
                                <li className="common-para-second">Medication reminders</li>
                                <li className="common-para-second">Safety and fall prevention</li>
                                <li className="common-para-second">Status reporting to family</li>
                            </ul>
                        </div>
                    </div>
                    <p className="common-para-second">
                        Asthma include regular wheezing, coughing, chest tightness, and shortness of breath. There are various medical tests to identify whether the person has Asthma or not. The two most common test for Asthma are:periodically so that the airways become narrow. As a result, Asthma patients usually experience more difficulty breathing, most frequently during the night and in the early morning.
                    </p>
                    <div className="accordian-box mt-4">
                        <h2 className="common-heading h5x mb-0">
                            FAQ
                        </h2>
                        <div className="accordian-card">
                            <p className="accordian-title">
                                <span>01.</span>
                                Care from home health aides
                            </p>
                            <p className="common-para-second">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="accordian-card">
                            <p className="accordian-title">
                                <span>02.</span>
                                Homemaker or basic assistance
                            </p>
                            <p className="common-para-second">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="accordian-card">
                            <p className="accordian-title">
                                <span>03.</span>
                                Care from home health aides
                            </p>
                            <p className="common-para-second">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="accordian-card">
                            <p className="accordian-title">
                                <span>04.</span>
                                Homemaker or basic assistance
                            </p>
                            <p className="common-para-second">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
    </div>
</section>
    </>
  )
}

export default ServiceDetail