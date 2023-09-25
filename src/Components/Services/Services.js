import React from "react";
import { useEffect } from "react";
import "../../Css/OurServices.css";
import "../../Css/Common.css";
import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="common-redirect-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Services</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
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
              <h1 className="common-heading d-flex align-items-center justify-content-center py-lg-5 py-4 mb-sm-0 ">
                <span className="bar one"></span>Scope of services{" "}
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-md-4 col-4 ">
              <div className="service-single-page-left "></div>
            </div>
            <div className="col-md-8 col-8 d-none">
              <div className="row g-0">
                <div className="col-lg-4  col-6 col-sm-6">
                  <ScrollLink to="one" smooth={true} duration={200}>
                    <div className="service-single-page-card">
                      <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                      </div>
                      <p className="service-single-page-card-title">
                        General Medicine
                      </p>
                      <p className="sub-para d-none">
                        Far far away, behind the word mountains
                      </p>
                    </div>
                  </ScrollLink>
                </div>
                <div className="col-lg-4 col-6 col-sm-6">
                  <ScrollLink to="two" smooth={true} duration={200}>
                    <div className="service-single-page-card">
                      <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                      </div>
                      <p className="service-single-page-card-title">
                        Gastroenterology
                      </p>
                      <p className="sub-para d-none">
                        Far far away, behind the word mountains
                      </p>
                    </div>
                  </ScrollLink>
                </div>
                <div className="col-lg-4 col-6 col-sm-6">
                  <ScrollLink to="three" smooth={true} duration={200}>
                    <div className="service-single-page-card">
                      <div className="icon">
                        <i className="fal fa-stethoscope"></i>
                      </div>
                      <p className="service-single-page-card-title">
                        Hepatology
                      </p>
                      <p className="sub-para d-none">
                        Far far away, behind the word mountains
                      </p>
                    </div>
                  </ScrollLink>
                </div>
                {/* <!-- ----------------copy---------- --> */}
                <div className="col-lg-4 col-6 col-sm-6">
                  <div className="service-single-page-card">
                    <div className="icon">
                      <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">Cardiology</p>
                    <p className="sub-para d-none">
                      Far far away, behind the word mountains
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-6 col-sm-6">
                  <div className="service-single-page-card">
                    <div className="icon">
                      <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">Pediatrics</p>
                    <p className="sub-para d-none">
                      Far far away, behind the word mountains
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-6 col-sm-6">
                  <div className="service-single-page-card">
                    <div className="icon">
                      <i className="fal fa-stethoscope"></i>
                    </div>
                    <p className="service-single-page-card-title">Gynecology</p>
                    <p className="sub-para d-none">
                      Far far away, behind the word mountains
                    </p>
                  </div>
                </div>
                {/* <!-- ---------------paste------------- --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="procedure d-none">
        <div className="container-fluid common-container-fluid-adjust-padding ">
          <div className="row" id="one">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center text-white fs-3">
                Related to general Medicine
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>ECG</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Nebulization</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Pulmonary Function Tests</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
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
          <div className="row" id="two">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center text-white fs-3">
                Related to Gastroenterology
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Gastroscopy (Esophago-gastro-duodeno Scopy) / UGIE</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Colonoscopy /LGI</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Enteroscopy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Manometery</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Breath studies</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Elastography</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" id="three">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center text-white fs-3">
                Day Care
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-4">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Paracentesis </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-4">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Thoracocentesis </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-4">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Cancer Chemotherapy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-4">
              <div className="procedure-card card shadow p-4">
                <ul>
                  <li>Gastroenterology procedures under GA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-medic">
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <h5 class="common-heading">Medicine</h5>
            </div>
            <div class="col-md-12">
              <div class="features-div">
                <h5 class="sub-pages-heading">
                  <ol>
                    <li>OPDs</li>
                    <li>Admission </li>
                    <li>
                      Investigations:
                      <span>
                        NABL accredited lab, / X rays
                        <br /> PFT (Pulmonary function testing){" "}
                      </span>
                    </li>
                    <li>
                      Critical Care:{" "}
                      <span>
                        ICU / HDU,ECG / Monitors / NIV / Ventilators /
                        Defibrillators
                      </span>
                    </li>
                    <li>
                      Diagnostic Interventions:{" "}
                      <span>
                        Pleuracentesis;Paracentesis/Bone marrow aspiration /
                        Biopsy / Lumber puncture
                      </span>
                    </li>
                    <li>
                      Therapeutic interventions:{" "}
                      <span>
                        Nebulizer / Oxygen / Ventilation Oxygen concentrator,
                        etc
                      </span>
                    </li>
                    <li>PFT(Pulmonary function testing)</li>
                  </ol>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-ppt">
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <h5 class="common-heading">Gastroenterology </h5>
            </div>
            <div class="col-md-12">
              <div class="features-div">
                <h5 class="sub-pages-heading">
                  <ol>
                    <li>OPDs</li>
                    <li>Admission </li>
                    <li>Interventions:</li>
                  </ol>
                  <div className="gestro-data">
                    <ol className="service-gestro">
                      <li> Gastroscopy and related:</li>
                      <p className="gestro-link">
                        <br /> Conventional White Light Endoscopy
                        <br /> Chromendoscopy
                        <br /> Image Enhanced Endoscopy{" "}
                      </p>

                      <li> Colonoscopy and related:</li>
                      <p className="gestro-link">
                        <br /> Conventional White Light Endoscopy
                        <br /> Chromendoscopy
                        <br /> Image Enhanced Endoscopy{" "}
                      </p>

                      <li> ERCP and related</li>
                      <br />
                      <li> CEUS and related</li>
                    </ol>
                  </div>
                </h5>
              </div>
            </div>

            <div class="col-md-12 mt-lg-5">
              <h5 class="common-heading text-dark">HEPATOLOGY PROCEDURES</h5>
            </div>
            <div class="col-md-12">
              <ul className="list-circle">
                <li>Elastography</li>
                <li>Liver Biopsy </li>
                <li>Portal pressure gradient measurement</li>
                <li>Management of gastric varices</li>
                <li>Management of esophageal varices</li>
              </ul>
            </div>

            <div class="col-md-12 mt-lg-5">
              <h5 class="common-heading text-dark">PAEDIATRIC PROCEDURES</h5>
            </div>
            <div class="col-md-12">
              <ul>
                <li>Foreign Body removel</li>
                <li>Endoscopy</li>
                <li>Colonoscopy</li>
                <li>Stricture Dilatation</li>
                <li>Hemostatic procedures</li>
              </ul>

              <div class="col-md-12 mt-lg-5">
                <h5 class="common-heading text-dark">EMERGENCY PROCEDURES</h5>
              </div>
              <ul>
                <li>Diagnostic Endoscopy</li>
                <li>Foreign Body Removel</li>
                <li>Hemostatic Endoscopy</li>
                <li>RT / NJFT Placement</li>
              </ul>
            </div>

            <div class="col-md-12 mt-lg-5">
              <h5 class="common-heading text-dark">ADULT PROCEDURES</h5>
            </div>
            <h4>Endoscopy / Diagnostic / Emergency </h4>
            <div class="col-md-12">
              <h3>Therapeutic procedure</h3>
              <ul className="list-circle">
                <li>Endscopic sclerotherapy (EST)</li>
                <li>Endscopic Band ligation Endscopic </li>
                <li>Glue injection</li>
                <li>Endoscopic Loop Ligation</li>
                <li>Laser eradication of varices</li>
                <li>Argon plasma photocoagulation</li>
                <li>Gold probe Coagulation</li>
                <li>Endoclip</li>
                <li>
                  Esophageal Stricture dilatation Edder Puestos and SG dilators
                </li>
                <li>Balloon dilatation</li>
                <li>
                  Stenting of esophageal stricture Plastic and Metallic (SEMS)
                </li>
                <li>Endoscopic Polypectomy</li>
                <li>Endoscopic RT placement & NJFT placement</li>
                <li>Percutaneous Endoscopic Gastrostmy (PEG)</li>
              </ul>
            </div>

            <div class="col-md-12 mt-lg-5">
              <h5 class="common-heading text-dark">
                COLONOSCOPY AND RELATED PROCEDURES
              </h5>
            </div>
            <div class="col-md-12">
              <ul className="list-circle">
                <li>Colonoscopy diagnostic /Hemostatic colonoscopy</li>
                <li>Polypectomy </li>
                <li>
                  Retrograde endoscopic sclerotherapy (REST) of Hemorrhoids
                </li>
                <li>Argon plasma photocoagulation of bleeding vessels</li>
                <li>Laser eradication of Hemorrhoids</li>
                <li>Laser treatment of anal fistula</li>
                <li>Angiodysplasia management</li>
              </ul>
            </div>

            <div class="col-md-12 mt-lg-5">
              <h5 class="common-heading text-dark">DUODENOSCOPY AND RELATED</h5>
            </div>
            <div class="col-md-12">
              <ul className="list-circle">
                <li>Side view scopy</li>
                <li>ERCP </li>
                <li>Endoscopic sphinctorotmy</li>
                <li>Balloon dilation of papilla</li>
                <li>Stone extraction &lt; 10mm </li>
                <li>Stenting (Plastic) Stenting (SEMS)</li>
                <li>
                  Side view scopy Stent removel Stent removel + cholangiogram
                </li>
                <li>CBD dilatation</li>
              </ul>
            </div>

            <div class="col-md-12 mt-lg-5">
              <h5 class="common-heading text-dark">Research:</h5>
            </div>
            <div class="col-md-12">
              <ul className="list-circle">
                <li>Centre has its own Ethics Committee</li>
                <li>
                  Authorized by DCGI to carrry out in-house and outsourced drug
                  trials
                </li>
              </ul>
              <h3>Current Trials:</h3>
            </div>

            <div class="col-md-12 mt-lg-5">
              <h5 class="common-heading text-dark">
                Admission and Day Care Services
              </h5>
            </div>
            <div class="col-md-12">
              <ul>
                <li>
                  Total Beds = 30 <span>(50 bed layout passed by MDDA)</span>
                </li>
                <li>General Wards Beds = 18</li>
                <li>Semiprivate Ward = 6</li>
                <li>Private Ward = 2</li>
                <li>HDU / ICU = 4</li>
              </ul>
              <ul>
                <li>
                  <span className="text-dark">Staff Ratio</span>:
                </li>
                <li>General Ward = 6:1</li>
                <li>HDU / ICU = 2:1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
