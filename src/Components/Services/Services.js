import React from 'react';
import { useEffect } from 'react';
import "../../Css/OurServices.css"
import "../../Css/Common.css"
const Services = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
      }, [])
  return (
    <>
    <div className="common-redirect-banner">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="common-redirect-banner-title">Services</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                        <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  </div>
  <section className="service-single-page">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="common-heading d-flex align-items-center justify-content-center py-5">
                    <span className="bar one"></span>Services offered by Us<span className="bar two"></span>
                  </h1>
            </div>
        </div>
    </div>
   <div className="container-fluid g-0">
    <div className="row g-0">
    <div className="col-md-4 ">
        <div className="service-single-page-left " ></div>
       
    </div>
    <div className="col-md-8">
        <div className="row g-0">
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                        Neurology
                    </p>
                    <p className="sub-para">Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                        Neurology
                    </p>
                    <p className="sub-para">Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                        Neurology
                    </p>
                    <p className="sub-para">Far far away, behind the word mountains</p>
                </div>
            </div>
            {/* <!-- ----------------copy---------- --> */}
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                        Neurology
                    </p>
                    <p className="sub-para">Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                        Neurology
                    </p>
                    <p className="sub-para">Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                        Neurology
                    </p>
                    <p className="sub-para">Far far away, behind the word mountains</p>
                </div>
            </div>
            {/* <!-- ---------------paste------------- --> */}
        </div>
    </div></div>
   </div>
  </section>
</>
  )
}

export default Services