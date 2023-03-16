import React from 'react';
import { useEffect } from 'react';
import "../../Css/OurServices.css"
import "../../Css/Common.css"
import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";
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
                    <span className="bar one"></span>Scope of services <span className="bar two"></span>
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
            <ScrollLink to="one" smooth={true} duration={200}>
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                    General Medicine 
                    </p>
                    <p className="sub-para d-none">Far far away, behind the word mountains</p>
                </div>
            </ScrollLink>
            </div>
            <div className="col-lg-4">
            <ScrollLink to="two" smooth={true} duration={200}>
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                    Gastroenterology
                    </p>
                    <p className="sub-para d-none">Far far away, behind the word mountains</p>
                </div></ScrollLink>
            </div>
            <div className="col-lg-4">
            <ScrollLink to="three" smooth={true} duration={200}>
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                    Hepatology
                    </p>
                    <p className="sub-para d-none">Far far away, behind the word mountains</p>
                </div></ScrollLink>
            </div>
            {/* <!-- ----------------copy---------- --> */}
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                    Cardiology 
                    </p>
                    <p className="sub-para d-none">Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                    Pediatrics
                    </p>
                    <p className="sub-para d-none">Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="service-single-page-card">
                    <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">
                      Gynecology 
                    </p>
                    <p className="sub-para d-none">Far far away, behind the word mountains</p>
                </div>
            </div>
            {/* <!-- ---------------paste------------- --> */}
        </div>
    </div></div>
   </div>
  </section>
  <section  className='procedure'>
   <div className='container-fluid common-container-fluid-adjust-padding '>
      <div className='row' id="one">
      <div class="col-md-12">
        <h1 class="common-heading d-flex align-items-center justify-content-center text-white fs-3">
        Related to general Medicine</h1></div>
      </div>
      <div className='row' >
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                    <li>ECG</li>
                   
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                   
                    <li>Nebulization</li>
                    
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
      
               
                    <li>Pulmonary Function Tests</li>

                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                 
                    <li>Bone Marrow aspiration /Biopsy</li>
                 
                </ul>
            </div>
          </div>
          {/* <div className='col-lg-4'>
          <div className='procedure-card card shadow p-4' id='two'>
                <p className='procedure-heading'>Related to Gastroenterology</p>
                <ul>
                    <li>Gastroscopy (Esophago-gastro-duodeno Scopy) / UGIE</li>
                    <li>Colonoscopy  /LGI</li>
                    <li>Enteroscopy</li>
                    <li>Manometery</li>
                    <li>Breath studies</li>
                    <li>Elastography</li>
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
          <div className='procedure-card card shadow p-4' id='three'>
                <p className='procedure-heading'>Day Care</p>
                <ul>
                    <li>Paracentesis</li>
                    <li>Thoracocentesis </li>
                    <li>Cancer Chemotherapy</li>
                    <li>Gastroenterology procedures under GA</li>
                  
                </ul>
            </div>
          </div> */}
      </div>
      <div className='row' id="two">
      <div class="col-md-12">
        <h1 class="common-heading d-flex align-items-center justify-content-center text-white fs-3">
        
        Related to Gastroenterology</h1></div>
      </div>
      <div className='row'>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                    <li>Gastroscopy (Esophago-gastro-duodeno Scopy) / UGIE</li>
                   
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                   
                    <li>Colonoscopy /LGI</li>
                    
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
      
               
                    <li>Enteroscopy</li>

                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                 
                    <li>Manometery</li>
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                 
                    <li>Breath studies</li>
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                 
                    <li>Elastography</li>
                 
                </ul>
            </div>
          </div>
         
      </div>
      <div className='row' id="three">
      <div class="col-md-12">
        <h1 class="common-heading d-flex align-items-center justify-content-center text-white fs-3">
          
        Day Care</h1></div>
      </div>
      <div className='row' >
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                    <li>Paracentesis </li>
                   
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                   
                    <li>Thoracocentesis </li>
                    
                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
      
               
                    <li>Cancer Chemotherapy</li>

                 
                </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='procedure-card card shadow p-4' >

                <ul>
                 
                    <li>Gastroenterology procedures under GA</li>
                 
                </ul>
            </div>
          </div>
      
      </div>
   </div>
  </section>
 
</>
  )
}

export default Services