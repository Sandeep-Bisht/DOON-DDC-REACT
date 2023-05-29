import React from 'react'
import { useEffect } from 'react';
import Images from '../../Util/Images';
import "../../Css/Training.css"

const Training = () => {
  useEffect( () => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
     <div className="common-redirect-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="common-redirect-banner-title">Training</p>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Training </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
   
    <section className="training-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 mx-auto">
                    <h1 className="common-heading d-flex align-items-center justify-content-center ">
                        <span className="bar one"></span>Training We Provide<span className="bar two"></span>
                    </h1>
                    <p className="common-para-second text-center">The aim of the centre is to provide the cutting edge technology in the field of Gastroenterology under one roof at an affordable cost and pragmatic approach.
                    </p>
                </div>
            </div>
            <div className="row pt-lg-5">
                <div className="col-md-12">
                    <div className='row g-0'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-4'>
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Gastroenterology</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Hepatology</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">Cardiology</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-fourth-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-fourth" type="button" role="tab" aria-controls="pills-fourth"
                                aria-selected="false">Pediatrics</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-fifth-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-fifth" type="button" role="tab" aria-controls="pills-fifth"
                                aria-selected="false">Gynecology</button>
                        </li>
                    </ul>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-8'>
                        <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">

                            <div className="training-common-tab">
                                <div className="row">
                                <div className="col-lg-8">
                                    <div className="left pe-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="training-common-tab-title">
                                                Gastroenterology
                                                </p>
                                                <p className="training-common-tab-para">
                                                Gastroenterology, medical specialty concerned with the digestive system and its diseases. Gastroenterologists diagnose and treat the diseases and disorders of the esophagus, stomach, intestines, liver, biliary tract, and pancreas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt-5 pt-2 middle-row">
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="right">
                                        <img src={Images.training1} className="img-fluid" alt="" />
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <div className="training-common-tab">
                                <div className="row">
                                <div className="col-lg-8">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="training-common-tab-title">
                                                Hepatology
                                                </p>
                                                <p className="training-common-tab-para">
                                                Hepatology is a branch of medicine concerned with the study, prevention, diagnosis, and management of diseases that affect the liver, gallbladder, biliary tree, and pancreas.
                                                    </p>
                                            </div>
                                        </div>
                                        <div className="row mt-5 pt-2 middle-row">
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="right">
                                        <img src={Images.training2} className="img-fluid" />
                                    </div>
                                </div></div>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab">
                            <div className="training-common-tab">
                                <div className="row">
                                <div className="col-lg-8">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="training-common-tab-title">
                                                Cardiology
                                                </p>
                                                <p className="training-common-tab-para">
                                                Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. 
                                                The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.
                                                    </p>
                                            </div>
                                        </div>
                                        <div className="row mt-5 pt-2 middle-row">
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="right">
                                        <img src={Images.training3} className="img-fluid" />
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-fourth" role="tabpanel" aria-labelledby="pills-fourth-tab">
                            <div className="training-common-tab">
                                <div className="row">
                                <div className="col-lg-8">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="training-common-tab-title">
                                                Pediatrics
                                                </p>
                                                <p className="training-common-tab-para">
                                                Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18
                                                    </p>
                                            </div>
                                        </div>
                                        <div className="row mt-5 pt-2 middle-row">
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="right">
                                        <img src={Images.training4} className="img-fluid" />
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-fifth" role="tabpanel" aria-labelledby="pills-fifth-tab">
                            <div className="training-common-tab">
                                <div className="row">
                                <div className="col-lg-8">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="training-common-tab-title">
                                                Gynecology
                                                </p>
                                                <p className="training-common-tab-para">On her way she met a copy. The copy
                                                    warned the Little Blind Text, that where it came from it would have
                                                    been rewritten a thousand times and everything that was left from
                                                    its origin would be the word.</p>
                                            </div>
                                        </div>
                                        <div className="row mt-5 pt-2 middle-row">
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="training-box row">
                                                    <div
                                                        className="icon col-lg-3">
                                                        <i className="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div className="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="right">
                                        <img src={Images.training5} className="img-fluid" />
                                    </div>
                                </div></div>
                            </div>
                        </div>
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

export default Training