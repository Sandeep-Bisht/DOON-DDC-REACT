import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import Images from "../../Util/Images";
import axios from "axios";
import { url } from "../../Util/url";
import "../../Css/Blog.css"
import { useState } from "react";


const Patient = () => {

    const navigate = useNavigate()
  const [blog, setBlog] = useState()
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    const response = await axios.get(`${url}/blog/find_all_blog`);
    setBlog(response.data)
  }

console.log("blogssssssssss", blog)

  return (
    <>
      <div className="common-redirect-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="common-redirect-banner-title">Blog</p>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
     <section className='training-content d-none'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h5>What Is a Clinical Study?</h5>
                <p className='common-para-second'>A clinical study involves research using human volunteers (also called participants) 
                that is intended to add to medical knowledge. There are two main types of clinical studies: clinical trials (also called interventional studies) and observational studies. Digestive Diseases Centre is approved for both interventional and observational studies </p>
                <h5>Clinical Trials:</h5>
                <p className='common-para-second'>
                In a clinical trial, participants receive specific interventions according to the research plan or protocol created by the investigators. These interventions may be medical products, such as drugs or devices; procedures; or changes to participants' behavior, such as diet. Clinical trials may compare a new medical approach to a standard one that is already available, to a placebo that contains no active ingredients, or to no intervention. Some clinical trials compare interventions that are already available to each other. When a new product or approach is being studied, it is not usually known whether it will be helpful, harmful, or no different than available alternatives (including no intervention). The investigators try to determine the safety and efficacy of the intervention by measuring certain outcomes in the participants. For example, investigators may give a drug or treatment to participants who have high blood pressure to see whether their blood pressure decreases.

                </p>
                <p className='common-para-second my-3'>Clinical trials used in drug development are sometimes described by phase. These phases are defined Phase 1 /Phase 2 Phase 3 and Phase 4 , as per GCP guidelines. </p>
                <h5>Observational Studies:</h5>
                <p className='common-para-second'>
                In an observational study, investigators assess health outcomes in groups of participants according to a research plan or protocol. Participants may receive interventions (which can include medical products such as drugs or devices) or procedures as part of their routine medical care, but participants are not assigned to specific interventions by the investigator (as in a clinical trial). For example, investigators may observe a group of older adults to learn more about the effects of different lifestyles on cardiac health.

                </p>
                <h5>Who Conducts Clinical Studies?</h5>
                <p className='common-para-second'>
                Every clinical study is led by a principal investigator, who is often a medical doctor. Clinical studies also have a research team that may include doctors, nurses, social workers, and other health care professionals. Clinical studies can be sponsored, or funded, by pharmaceutical companies or in house by Digestive disease Centre (DDC) itself. At, the DDC, all trials are conducted under the supervision of Prof. Sanjay Gupta. 
                </p>
                <h5>How Long Do Clinical Studies Last?</h5>
                <p className='common-para-second'>The length of a clinical study varies, depending on what is being studied. Participants are told how long the study will last before they enroll.</p>
                <h5>Reasons for Conducting Clinical Studies</h5>
                <p className='common-para-second'>In general, clinical studies are designed to add to medical knowledge related to the treatment, diagnosis, and prevention of diseases or conditions. Some common reasons for conducting clinical studies include:</p>
                <ul className='mt-3 ps-0 '>
                    <li className='common-para-second'>Evaluating one or more interventions (for example, drugs, medical devices, approaches to surgery or radiation therapy) for treating a disease, syndrome, or condition</li>
                    <li className='common-para-second'>Finding ways to prevent the initial development or recurrence of a disease or condition. These can include medicines, vaccines, or lifestyle changes, among other approaches.</li>
                    <li className='common-para-second'>Evaluating one or more interventions aimed at identifying or diagnosing a particular disease or condition</li>
                    <li className='common-para-second'>Examining methods for identifying a condition or the risk factors for that condition</li>
                    <li className='common-para-second'>Exploring and measuring ways to improve the comfort and quality of life through supportive care for people with a chronic illness</li>
                
                
                
                </ul>


                <h5>Participating in Clinical Studies</h5>
                <p className='common-para-second'>
                A clinical study is conducted according to a research plan known as the protocol.``
                 The protocol is designed to answer specific research questions and safeguard the health of participants. 
                 It contains the following information: 
                  </p>
                <ul className='mt-3 ps-0 '>
                    <li className='common-para-second'>The reason for conducting the study</li>
                    <li className='common-para-second'>Who may participate in the study (the eligibility criteria)</li>
                    <li className='common-para-second'>The number of participants needed</li>
                    <li className='common-para-second'>The schedule of tests, procedures, or drugs and their dosages</li>
                    <li className='common-para-second'>The length of the study</li>
                    <li className='common-para-second'>What information will be gathered about the participants</li>
        
                  </ul>
                  <h5>Who Can Participate in a Clinical Study?</h5>
                  <p className="common-para-second">
                  Clinical studies have standards outlining who can participate. These standards are called 
                  <strong>eligibility criteria</strong> 
                  and are listed in the protocol. Some research studies seek participants who have the illnesses or conditions that will be studied, other studies are looking for healthy participants, and some studies are limited to a predetermined group of people who are asked by researchers to enroll. The factors that allow someone to participate in a clinical study are called inclusion criteria, and the factors that disqualify someone from participating are called exclusion criteria. They are based on characteristics such as age, gender, the type and stage of a disease, previous treatment history, and other medical conditions.
                  </p>
                  <h5>How Are Participants Protected?</h5>
                  <p className="common-para-second">
                  1). Informed consent is a process used by researchers to provide potential and enrolled participants with information about a clinical study. This information helps people decide whether they want to 
                  enroll or continue to participate in the study. The informed consent process is intended to protect participants and should provide enough information for a person to understand the risks of, potential benefits of, and alternatives to the study. 
                  </p>
                  <p className="common-para-second">
                  2). There are plenty of other documents, like recruitment materials, verbal instructions, question-and-answer sessions, and activities to measure participant understanding. 
                  </p>
                  <p className="common-para-second">3). Signing the document and providing consent is not a contract. Participants may withdraw from a study at any time, even if the study is not over. </p>
                  <p className="common-para-second">
                  4). <strong>Institutional review boards.</strong> Each clinical study of a drug, biological product, or medical device is reviewed, approved, and monitored by an institutional review board (IRB). An IRB is made up of doctors, researchers, and members of the community. Its role is to make sure that the study is ethical and that the rights and welfare of participants are protected. This includes making sure that research risks are minimized and are reasonable in relation to any potential benefits, among other responsibilities. The IRB also reviews the informed consent document.
                  </p>
                  <h5>Why should subjects / patients participate in Clinical Studies</h5>
                  <p className="common-para-second">1). Participating in a clinical study contributes to medical knowledge. The results of these studies can make a difference in the care of future patients by providing information about the benefits and risks of therapeutic, preventative, or diagnostic products or interventions.</p>
                  <p className="common-para-second">2). Clinical trials provide the basis for the development of new drugs, biological products, and medical devices. </p>
                  <p className="common-para-second">3). Some trials may provide participants with the prospect of receiving direct medical benefits. </p>
            </div>

        </div>
      </div>
    </section>

    <section className="blog-page">
      <div className="container m-auto d-none">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-box-wrapper">
              <div className="row">
                <div className="col-md-7">
                  { blog && blog.length > 0 && blog.map((item, index) => {
                    if(index < 1){
                    return(
                      <div className="left-blog-image-wrap" key={index} onClick={() => navigate("/blog-detail", { state : item })}>
                      <img                     
                        src={`${url}/${item.featuredImage.path}`}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="top-heading-box-1 common-overlay">  
                      <p>Sandeep</p>                   
                        <p className="blog-title">{item.title}</p>
                        <p className="blog-para">{item.description}</p>
                      </div>
                    </div>
                    )
                  }
                    
                  })}
                  
                </div>
                <div className="col-md-5 ps-0">
                { blog && blog.length > 1 && (
                  <>
                  <div className="right-blog-image-wrapper" onClick={() => navigate("/blog-detail", { state : blog[1] })}>
                    <div className="right-blog-image-wrap">
                      <img                       
                        src={`${url}/${blog[1].featuredImage.path}`}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="top-heading-box-2 common-overlay">
                       <p className="blog-title">{blog[1].title}</p>
                       <p className="blog-para">{blog[1].description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-blog-image-wrapper" onClick={() => navigate("/blog-detail", { state : blog[2] })}>
                    <div className="right-blog-image-wrap">
                      <img
                        src={`${url}/${blog[2].featuredImage.path}`}
                        alt=""
                      />
                      <div className="top-heading-box-2 common-overlay">
                      <p className="blog-title">{blog[2].title}</p>
                       <p className="blog-para">{blog[2].description}</p>
                      </div>
                    </div>
                  </div>
                  </>
                    )                
                }
                </div>
              </div>
            </div>
          </div>
          <div className="blog-page-section-2">
            <div className="row">
              <div className="col-md-12">
                <div className="latest-blogs-section">
                  <h2>Latest Blogs</h2>
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                    <Link
                          className="card-img-link text-decoration-none"
                        >
                      <div className="card latest-blog-card">                       
                          <img                            
                            src={Images.blog3}
                            className="img-fluid"
                            alt="blog-image"
                          />                        
                        <div className="card-body">
                        <h5 className="card-title">GETTING THE MOST OUT OF THE CLARI</h5>
                          <div className="card-text">
                            <ReadMoreReact                            
                              text="Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me"
                              min={80}
                              ideal={80}
                              max={80}
                              readMoreText={"Read More..."}
                            />
                          </div>
                        </div>
                      </div>
                      </Link>

                    </div>
                    <div className="col-md-6 col-lg-4">
                    <Link
                          className="card-img-link text-decoration-none"
                        >
                      <div className="card latest-blog-card">                       
                          <img                            
                            src={Images.blog4}
                            className="img-fluid"
                            alt="blog-image"
                          />                        
                        <div className="card-body">
                        <h5 className="card-title">Consulting</h5>
                          <div className="card-text">
                            <ReadMoreReact                            
                              text="Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me"
                              min={80}
                              ideal={80}
                              max={80}
                              readMoreText={"Read More..."}
                            />
                          </div>
                        </div>
                      </div>
                      </Link>

                    </div>
                    <div className="col-md-6 col-lg-4">
                    <Link
                          className="card-img-link text-decoration-none"
                        >
                      <div className="card latest-blog-card">                       
                          <img                            
                            src={Images.chindrenHealth}
                            className="img-fluid"
                            alt="blog-image"
                          />                        
                        <div className="card-body">
                        <h5 className="card-title">Child Care</h5>
                          <div className="card-text">
                            <ReadMoreReact                            
                              text="Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me"
                              min={80}
                              ideal={80}
                              max={80}
                              readMoreText={"Read More..."}
                            />
                          </div>
                        </div>
                      </div>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
           
        </div>
      </div>
    </section>
    
    <section className="blog-detail-related">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="common-heading d-flex align-items-center justify-content-center">
                                <span className="bar one"></span>Blog<span className="bar two"></span></h1>
                        </div>
                    </div>

                    
                    <div className="row">
                    { blog && blog.length > 0 && blog.map((item, index) => {
                      return (
                        <div className="col-lg-12">
                          <Link to="/blog-detail" className="text-decoration-none">
                            <div className="related-card">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="realted-card-pic">
                                            <img 
                                            src={`${url}/${item.featuredImage.path}`}
                                            className="img-fluid " alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="related-card-content">
                                            <div className="top">
                                                <p>Business, Travel<span>— July 2, 2020</span></p>
                                            </div>
                                            <div className="middle">
                                                <p className="middle-title">
                                                    {item.title}
                                                </p>
                                                <p className="middle-subtitle">
                                                {item.description}
                                                </p>
                                            </div>
                                            <div className="lower">
                                                <div className="published-pic">
                                                    <img src={Images.blogPic} className="img-fluid" alt="" />
                                                </div>
                                                <div className="published-content">
                                                    <p className="published-title">
                                                        Sergy Campbell
                                                    </p>
                                                    <p className="published-date">
                                                        Author, 26 published post
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>                            
                        </div>
                         )
                        } 
                      )}
                    </div>
                     
                </div>
            </section>
    
    
    </>
  );
};

export default Patient;
