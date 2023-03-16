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
     <div class="common-redirect-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <p class="common-redirect-banner-title">Training</p>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                            <li class="breadcrumb-item"><a href="/" class="text-white">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Training </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
   
    <section class="training-single">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 mx-auto">
                    <h1 class="common-heading d-flex align-items-center justify-content-center ">
                        <span class="bar one"></span>Training We Provide<span class="bar two"></span>
                    </h1>
                    <p class="common-para-second text-center">The aim of the centre is to provide the cutting edge technology in the field of Gastroenterology under one roof at an affordable cost and pragmatic approach.
                    </p>
                </div>
            </div>
            <div class="row pt-lg-5">
                <div class="col-md-12">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Neurology</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Surgical</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">Dental</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-fourth-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-fourth" type="button" role="tab" aria-controls="pills-fourth"
                                aria-selected="false">Ophthalmology</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-fifth-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-fifth" type="button" role="tab" aria-controls="pills-fifth"
                                aria-selected="false">Cardiology</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">

                            <div class="training-common-tab">
                                <div class="row">
                                <div class="col-lg-8">
                                    <div class="left">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p class="training-common-tab-title">
                                                    Neurological Deparments
                                                </p>
                                                <p class="training-common-tab-para">On her way she met a copy. The copy
                                                    warned the Little Blind Text, that where it came from it would have
                                                    been rewritten a thousand times and everything that was left from
                                                    its origin would be the word.</p>
                                            </div>
                                        </div>
                                        <div class="row mt-5 pt-2">
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="right">
                                        <img src={Images.training1} class="img-fluid" alt="" />
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <div class="training-common-tab">
                                <div class="row">
                                <div class="col-lg-8">
                                    <div class="left">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p class="training-common-tab-title">
                                                    Surgical Deparments
                                                </p>
                                                <p class="training-common-tab-para">On her way she met a copy. The copy
                                                    warned the Little Blind Text, that where it came from it would have
                                                    been rewritten a thousand times and everything that was left from
                                                    its origin would be the word.</p>
                                            </div>
                                        </div>
                                        <div class="row mt-5 pt-2">
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="right">
                                        <img src={Images.training2} class="img-fluid" />
                                    </div>
                                </div></div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab">
                            <div class="training-common-tab">
                                <div class="row">
                                <div class="col-lg-8">
                                    <div class="left">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p class="training-common-tab-title">
                                                    Dental Deparments
                                                </p>
                                                <p class="training-common-tab-para">On her way she met a copy. The copy
                                                    warned the Little Blind Text, that where it came from it would have
                                                    been rewritten a thousand times and everything that was left from
                                                    its origin would be the word.</p>
                                            </div>
                                        </div>
                                        <div class="row mt-5 pt-2">
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="right">
                                        <img src={Images.training3} class="img-fluid" />
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-fourth" role="tabpanel" aria-labelledby="pills-fourth-tab">
                            <div class="training-common-tab">
                                <div class="row">
                                <div class="col-lg-8">
                                    <div class="left">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p class="training-common-tab-title">
                                                    Ophthalmology Deparments
                                                </p>
                                                <p class="training-common-tab-para">On her way she met a copy. The copy
                                                    warned the Little Blind Text, that where it came from it would have
                                                    been rewritten a thousand times and everything that was left from
                                                    its origin would be the word.</p>
                                            </div>
                                        </div>
                                        <div class="row mt-5 pt-2">
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="right">
                                        <img src={Images.training4} class="img-fluid" />
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-fifth" role="tabpanel" aria-labelledby="pills-fifth-tab">
                            <div class="training-common-tab">
                                <div class="row">
                                <div class="col-lg-8">
                                    <div class="left">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p class="training-common-tab-title">
                                                    Cardiology Deparments
                                                </p>
                                                <p class="training-common-tab-para">On her way she met a copy. The copy
                                                    warned the Little Blind Text, that where it came from it would have
                                                    been rewritten a thousand times and everything that was left from
                                                    its origin would be the word.</p>
                                            </div>
                                        </div>
                                        <div class="row mt-5 pt-2">
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="training-box row">
                                                    <div
                                                        class="icon col-lg-3">
                                                        <i class="fas fa-stethoscope"></i>
                                                    </div>
                                                    <div class="text col-lg-9">
                                                        <h3>Primary Care</h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="right">
                                        <img src={Images.training5} class="img-fluid" />
                                    </div>
                                </div></div>
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