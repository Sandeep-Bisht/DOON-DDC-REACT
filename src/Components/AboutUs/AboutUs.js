import React, { useEffect } from 'react'
import "../../Css/About.css"
import Images from '../../Util/Images'
import { Link } from "react-router-dom";

const AboutUs = () => {

  useEffect( () => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
     <div className="common-redirect-banner">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="common-redirect-banner-title">About</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                        <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  </div>
  <section className="about-whoweare section-padding">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="common-heading d-flex align-items-center ">
                    <span className="bar one"></span> About us<span className="bar two"></span>
                  </h1>
            </div>
        </div>
        <div className="row g-0 about-row">
            <div className="col-lg-4 col-md-12 col-sm-12">
                <img src={Images.aboutSingle} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="about-who-content">
                    <h2 className="about-who-content-title">
                    The Best Medics, Doctor & Physicians
                    </h2>
                    <p className="common-para mb-4">
                    Digestive disease centre has been started with sole objective to provide a possible one stop solution for most Gastrointestinal and liver related disorders under one roof. In the past 10 years, Gastroenterology has made tremendous progress in the fields of both diagnostics and treatment. However, the fruits of development have not been reaped in our region , mainly because of inadequate diagnostic and management facilities, available in the region. Hence the aim of the centre is to provide the cutting edge technology in the field of Gastroenterology under one roof at an affordable cost and pragmatic approach.
                    </p>
                    
                    <p className="common-para mb-4">
                      Other main objective of the foundation is to provide insight about the various GI disorders in simplified way, for better understanding of the disease process and the available modalities of treatment.
                      </p>
                      <p className='common-para mb-0'>
                      The chief consultant, Dr. Sanjay Gupta, is an alumnus of the Internationally renowned Institution – Christian Medical College Vellore and has more than 20 years experience in management of various Gastrointestinal and liver related disorders. He has many national accreditations and has worked at top position at various leading Medical institutes in India.
                      </p>
                      <a href="#" class="common-btn mt-4">read more</a>
                   
                </div>
            </div>
             <div className='col-md-12 mt-lg-5'>
             <p className="common-para mb-4">
                      Other main objective of the foundation is to provide insight about the various GI disorders in simplified way, for better understanding of the disease process and the available modalities of treatment.
                      </p>
                      <p className='common-para mb-0'>
                      The chief consultant, Dr. Sanjay Gupta, is an alumnus of the Internationally renowned Institution – Christian Medical College Vellore and has more than 20 years experience in management of various Gastrointestinal and liver related disorders. He has many national accreditations and has worked at top position at various leading Medical institutes in India.
                      </p>
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
                {/* <li className="about-us-single-card">
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="common-core-values">
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
      </section> */}
       <section className="common-core-values d-none">
        <div className="container-fluid common-container-fluid-adjust-padding">
           <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
              <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span> Core Values
                <span className="bar two"></span>
              </h1>
              </div>
             </div>  
             <div className="row g-0 d-none">
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
              <div className="row">
                 <div className="col-md-12">
                  <div className="core-values-singlepic-box"> 
                 <Link
                        to="/about-us"
                        >
                                      <img src={Images.coreValue} className="img-fluid" alt="" />


                        </Link></div>
                 </div>
              </div>
        </div> 
      </section>
</>
  )
}

export default AboutUs