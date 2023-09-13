import React, { useEffect } from 'react'
import "../../Css/ClinicalTrial.css"
import Images from '../../Util/Images'
import { Link } from "react-router-dom";

const Clinical = () => {


  return (
    <>
      <div className="common-redirect-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="common-redirect-banner-title">Clinical</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                  <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Clinical</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="clinical-trial">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">
                  What Is a Clinical Study?
                </p>

                <p className="common-para-second">
                  A clinical study involves research using human volunteers (also called participants) that is intended to add to medical knowledge. There are two main types of clinical studies: clinical trials (also called interventional studies) and observational studies. Digestive Diseases Centre is approved for both interventional and observational studies  </p>
              </div>
              <div className="core-value-detail-single-box">

                <p className="common-para-second">
                  <strong className=''>
                    Clinical Trials: </strong>
                  <span className='common-para-second '>
                    In a clinical trial, participants receive specific interventions according to the research plan or protocol created by the investigators. These interventions may be medical products, such as drugs or devices; procedures; or changes to participants' behavior, such as diet. Clinical trials may compare a new medical approach to a standard one that is already available, to a placebo that contains no
                    active ingredients, or to no intervention. Some clinical trials compare interventions that are already available to each other.
                    When a new product or approach is being studied, it is not usually known whether it will be helpful, harmful, or no different
                    than available alternatives (including no intervention). The investigators try to determine the safety and efficacy of the intervention
                    by measuring certain outcomes in the participants. For example, investigators may give a drug or treatment to participants
                    who have high blood pressure to see whether their blood pressure decreases.<br />
                    Clinical trials used in drug development are sometimes described by phase.
                    These phases are defined Phase 1 /Phase 2 Phase 3 and Phase 4 , as per GCP guidelines.
                  </span>
                </p>

              </div>
              <div className="core-value-detail-single-box">

                <p className="common-para-second">
                  <strong className=''>
                    Observational Studies: </strong>
                  <span className='common-para-second '>
                    In an observational study, investigators assess health outcomes in groups of participants according to a research plan or protocol. Participants may receive interventions (which can include medical products such as drugs or devices) or procedures as part of their routine medical care, but participants are not assigned to specific interventions by the investigator (as in a clinical trial). For example, investigators may observe a group of older adults to learn more about the effects of different lifestyles on cardiac health.
                  </span>
                </p>

              </div>
              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">
                  Who Conducts Clinical Studies?
                </p>

                <p className="common-para-second">
                  Every clinical study is led by a principal investigator, who is often a medical doctor. Clinical studies also have a research team that may include doctors, nurses, social workers, and other health care professionals. Clinical studies can be sponsored, or funded, by pharmaceutical companies or in house by Digestive disease Centre (DDC) itself. At, the DDC, all trials are conducted under the supervision of Prof. Sanjay Gupta.  </p>
              </div>
              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">
                  How Long Do Clinical Studies Last?
                </p>

                <p className="common-para-second">
                  The length of a clinical study varies, depending on what is being studied. Participants are told how long the study
                  will last before they enroll.  </p>
              </div>
              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">
                  Reasons for Conducting Clinical Studies
                </p>

                <p className="common-para-second">
                  In general, clinical studies are designed to add to medical knowledge related to the treatment,
                  diagnosis, and prevention of diseases or conditions. Some common reasons for conducting clinical studies include: </p>
                <ul>
                  <li className='common-para-second'>Evaluating one or more interventions
                    (for example, drugs, medical devices, approaches to surgery or radiation therapy) for treating a disease, syndrome,
                    or condition
                  </li>
                  <li className='common-para-second'>Finding ways to prevent the initial development or recurrence of a disease or condition. These can include medicines, vaccines, or lifestyle changes, among other approaches.</li>
                  <li className='common-para-second'>Evaluating one or more interventions aimed at identifying or diagnosing a particular disease or condition</li>
                  <li className='common-para-second'>Examining methods for identifying a condition or the risk factors for that condition</li>
                  <li className='common-para-second'>Exploring and measuring ways to improve the comfort and quality of life through supportive care for people with a chronic illness</li>
                </ul>
              </div>
              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">


                  Participating in Clinical Studies

                </p>

                <p className="common-para-second">
                  A clinical study is conducted according to a research plan known as the protocol. The protocol is designed to answer specific research questions and safeguard the health of participants. It contains the following information:  </p>
                <ul>
                  <li className='common-para-second'>The reason for conducting the study</li>
                  <li className='common-para-second'>Who may participate in the study (the eligibility criteria)</li>
                  <li className='common-para-second'>The number of participants needed</li>
                  <li className='common-para-second'>The schedule of tests, procedures, or drugs and their dosages</li>
                  <li className='common-para-second'>The length of the study</li>
                  <li className='common-para-second'>What information will be gathered about the participants</li>
                </ul>
              </div>
              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">


                  Who Can Participate in a Clinical Study?

                </p>

                <p className="common-para-second">
                  Clinical studies have standards outlining who can participate.
                  These standards are called <strong>eligibility criteria</strong> and are listed in the protocol.
                  Some research studies seek participants who have the illnesses or conditions that will be studied,
                  other studies are looking for healthy participants, and some studies are limited to a predetermined
                  group of people who are asked by researchers to enroll. The factors that allow someone to participate in a clinical study are
                  called inclusion criteria, and the factors that disqualify someone from participating are called exclusion criteria.
                  They are based on characteristics such as age, gender, the type and stage of a disease, previous treatment history,
                  and other medical conditions. </p>

                <p className="core-value-detail-heading mt-lg-3">


                  How Are Participants Protected?
                </p>
                <ol>
                  <li className='common-para-second'>
                    Informed consent is a process used by researchers to provide potential and enrolled participants with information about a clinical study. This information helps people decide whether they want to enroll or continue to participate in the study. The informed consent process is intended to protect participants and should provide enough information for a person to understand the risks of, potential benefits of, and alternatives to the study.
                  </li>
                  <li className='common-para-second'>
                    There are plenty of other documents, like recruitment materials, verbal instructions, question-and-answer sessions, and activities to measure participant understanding.
                  </li>
                  <li className='common-para-second'>Signing the document and providing consent is not a contract. Participants may
                    withdraw from a study at any time, even if the study is not over.</li>

                  <li className='common-para-second'>
                    <strong>Institutional review boards.</strong> Each clinical study of a drug, biological product, or medical device is reviewed, approved, and monitored by an institutional review board (IRB). An IRB is made up of doctors, researchers, and members of the community. Its role is to make sure that the study is ethical and that the rights and welfare of participants are protected. This includes making sure that research risks are minimized and are reasonable in relation to any potential benefits, among other responsibilities. The IRB also reviews the informed consent document.
                  </li>

                </ol>
              </div>
              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">


                Why should subjects / patients participate in Clinical Studies

                </p>


               
                <ol>
                  <li className='common-para-second'>
                  Participating in a clinical study contributes to medical knowledge. The results of these studies can make a difference in the care of future patients by providing information about the benefits and risks of therapeutic, preventative, or diagnostic products or interventions.
                  </li>
                  <li className='common-para-second'>
                  Clinical trials provide the basis for the development of new drugs, biological products, and medical devices
                  </li>
                  <li className='common-para-second'>Some trials may provide participants with the prospect of receiving direct medical benefits. </li>

                 

                </ol>
              </div>
               


              <div className="core-value-detail-single-box">
                <p className="core-value-detail-heading">


                Questions to Ask

                </p>

                <p className="common-para-second">
                Anyone interested in participating in a clinical study should know as much as possible about the study and feel comfortable asking the research team questions about the study, the related procedures, and any expenses. The following questions may be helpful during such a discussion. Answers to some of these questions are provided in the informed consent document. Many of the questions are specific to clinical trials, but some also apply to observational studies.
                   </p>
                <ul>
                  <li className='common-para-second'>What is being studied?</li>
                  <li className='common-para-second'>Why do researchers believe the intervention being tested might be effective? Why might it not be effective? Has it been tested before?</li>
                  <li className='common-para-second'>What are the possible interventions that I might receive during the trial?</li>
                  <li className='common-para-second'>How will it be determined which interventions I receive (for example, by chance)?</li>
                  <li className='common-para-second'>Who will know which intervention I receive during the trial? Will I know? Will members of the research team know?</li>
                  <li className='common-para-second'>
                  How do the possible risks, side effects, and benefits of this trial compare with those of my current treatment?
                  </li>
                  <li className='common-para-second'>What will I have to do?</li>
                  <li className='common-para-second'>What tests and procedures are involved?</li>
                  <li className='common-para-second'>How often will I have to visit the hospital or clinic?</li>
                  <li className='common-para-second'>Will hospitalization be required?</li>
                  <li className='common-para-second'>How long will the study last?</li>
                  <li className='common-para-second'>Who will pay for my participation?</li>
                  <li className='common-para-second'>Will I be reimbursed for other expenses?</li>
                  <li className='common-para-second'>What type of long-term follow-up care is part of this trial?</li>
                  <li className='common-para-second'>If I benefit from the intervention, will I be allowed to continue receiving it after the trial ends?</li>
                  <li className='common-para-second'>Will results of the study be provided to me?</li>
                  <li className='common-para-second'>Who will oversee my medical care while I am participating in the trial?</li>
                  <li className='common-para-second'>What are my options if I am injured during the study?</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  )
}

export default Clinical