import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import Images from "../../Util/Images";
import "../../Css/Blog.css"

const Patient = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="blog-page">
      <div className="container m-auto">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-box-wrapper">
              <div className="row">
                <div className="col-md-7">
                  <div className="left-blog-image-wrap">
                    <img
                      // src={
                      //   item.featuredImage &&
                      //   `${baseUrl}/` + item.featuredImage[0].path
                      // }
                      src={Images.welcome}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="top-heading-box-1 common-overlay">                     
                      <p className="blog-title">Welcome to our clinic</p>
                      <p className="blog-para">Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 ps-0">
                  <div className="right-blog-image-wrapper">
                    <div className="right-blog-image-wrap">
                      <img                       
                        src={Images.blog1}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="top-heading-box-2 common-overlay">
                       <p className="blog-title">CHIP TO MODEL COELIAC DISEASE</p>
                       <p className="blog-para">Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me.</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-blog-image-wrapper">
                    <div className="right-blog-image-wrap">
                      <img
                        src={Images.blog2}
                        alt=""
                      />
                      <div className="top-heading-box-2 common-overlay">
                        <p className="blog-title">GALECTINS AN ANCIENT FASI FUTURE</p>
                        <p className="blog-para">Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me.</p>
                      </div>
                    </div>
                  </div>
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
                        <h5 class="card-title">GETTING THE MOST OUT OF THE CLARI</h5>
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
                        <h5 class="card-title">Consulting</h5>
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
                        <h5 class="card-title">Child Care</h5>
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
    </section>
  );
};

export default Patient;
