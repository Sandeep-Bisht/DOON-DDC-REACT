import React, { useEffect } from 'react'
import "../../Css/About.css"
import Images from '../../Util/Images'

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
        <div className="row g-0">
            <div className="col-lg-7 col-md-6 col-sm-12">
                <img src={Images.aboutSingle} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="about-who-content">
                    <h2 className="about-who-content-title">
                        Praesent massa orci, condimen vitae mattis quis, imperdiet non massa.
                    </h2>
                    <p className="common-para">
                        Lorem ipsum dolor sit amet, consectetur ag elit. Proin ipsum augue, rhoncus ac arcu ut, auclum est. AEtiam ligula orci, condim at turpis sed.Ppulvinar, poserat vitae, ultrices quis semper nisi porttitor. Aenean vel libero at nulla pulvinar placerat mauris Phasellus..
                    </p>
                    <a href="#" className="common-btn mt-4">Read more</a>
                </div>
            </div>
           
        </div>
    </div>
</section>
<section className="home-about">
  <div className="container-fluid common-container-fluid-adjust-padding">
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <h1 className="common-heading d-flex align-items-center ">
          <span className="bar one"></span> About us<span className="bar two"></span>
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <ul className="about-us-card-wrapper">
          <li className="about-us-single-card">
            <div className="row">
              <div className="col-lg-2">
                <p className="about-us-single-card-title f1">Our Vision</p>
              </div>
              <div className="col-lg-10">
                <div className="direction-wrapper">
                  <p className="common-para">
                    Lorem ipsum dolor sit amet consectetur. Aliquet mollis commodo non facilisis venenatis justo
                    viverra
                    duis viverra. Fringilla mattis cursus ornare tristique aliquam. Lacinia dictum lectus nulla rutrum
                    in convallis ipsum. Velit mattis id nibh nisl nulla. Purus non etiam senectus risus.
                  </p>
                  <span className="direction">


                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.5 1.07538e-05C12.3247 -0.000694661 12.151 0.0333113 11.9889 0.100068C11.8268 0.166824 11.6796 0.26501 11.5556 0.388962C11.4317 0.512915 11.3335 0.66018 11.2667 0.822266C11.2 0.984352 11.166 1.15805 11.1667 1.33334V4.74534C5.16667 5.40934 0.5 10.4907 0.5 16.6667V18C3.49333 13.436 7.5 12.7733 11.1667 12.6813V16C11.1661 16.264 11.2439 16.5221 11.3903 16.7418C11.5367 16.9614 11.7451 17.1326 11.989 17.2336C12.2328 17.3346 12.5012 17.3609 12.76 17.3091C13.0188 17.2573 13.2564 17.1297 13.4427 16.9427L21.8333 8.66668L13.4427 0.389344C13.3189 0.265528 13.172 0.167391 13.0102 0.100574C12.8484 0.0337583 12.675 -0.000418113 12.5 1.07538e-05Z"
                        fill="#009DCE" />
                    </svg>


                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="about-us-single-card">
            <div className="row">
              <div className="col-lg-2">
                <p className="about-us-single-card-title f1">Our Mission</p>
              </div>
              <div className="col-lg-10">
                <div className="direction-wrapper">
                  <p className="common-para">
                    Lorem ipsum dolor sit amet consectetur. Aliquet mollis commodo non facilisis venenatis justo
                    viverra
                    duis viverra. Fringilla mattis cursus ornare tristique aliquam. Lacinia dictum lectus nulla rutrum
                    in convallis ipsum. Velit mattis id nibh nisl nulla. Purus non etiam senectus risus.
                  </p>
                  <span className="direction">


                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.5 1.07538e-05C12.3247 -0.000694661 12.151 0.0333113 11.9889 0.100068C11.8268 0.166824 11.6796 0.26501 11.5556 0.388962C11.4317 0.512915 11.3335 0.66018 11.2667 0.822266C11.2 0.984352 11.166 1.15805 11.1667 1.33334V4.74534C5.16667 5.40934 0.5 10.4907 0.5 16.6667V18C3.49333 13.436 7.5 12.7733 11.1667 12.6813V16C11.1661 16.264 11.2439 16.5221 11.3903 16.7418C11.5367 16.9614 11.7451 17.1326 11.989 17.2336C12.2328 17.3346 12.5012 17.3609 12.76 17.3091C13.0188 17.2573 13.2564 17.1297 13.4427 16.9427L21.8333 8.66668L13.4427 0.389344C13.3189 0.265528 13.172 0.167391 13.0102 0.100574C12.8484 0.0337583 12.675 -0.000418113 12.5 1.07538e-05Z"
                        fill="#009DCE" />
                    </svg>


                  </span>
                </div>

              </div>
            </div>
          </li>
          <li className="about-us-single-card">
            <div className="row">
              <div className="col-lg-2">
                <p className="about-us-single-card-title f1">Our Core Value</p>
              </div>
              <div className="col-lg-10">
                <div className="direction-wrapper">
                  <p className="common-para">
                    Lorem ipsum dolor sit amet consectetur. Aliquet mollis commodo non facilisis venenatis justo
                    viverra
                    duis viverra. Fringilla mattis cursus ornare tristique aliquam. Lacinia dictum lectus nulla rutrum
                    in convallis ipsum. Velit mattis id nibh nisl nulla. Purus non etiam senectus risus.
                  </p>
                  <span className="direction">


                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.5 1.07538e-05C12.3247 -0.000694661 12.151 0.0333113 11.9889 0.100068C11.8268 0.166824 11.6796 0.26501 11.5556 0.388962C11.4317 0.512915 11.3335 0.66018 11.2667 0.822266C11.2 0.984352 11.166 1.15805 11.1667 1.33334V4.74534C5.16667 5.40934 0.5 10.4907 0.5 16.6667V18C3.49333 13.436 7.5 12.7733 11.1667 12.6813V16C11.1661 16.264 11.2439 16.5221 11.3903 16.7418C11.5367 16.9614 11.7451 17.1326 11.989 17.2336C12.2328 17.3346 12.5012 17.3609 12.76 17.3091C13.0188 17.2573 13.2564 17.1297 13.4427 16.9427L21.8333 8.66668L13.4427 0.389344C13.3189 0.265528 13.172 0.167391 13.0102 0.100574C12.8484 0.0337583 12.675 -0.000418113 12.5 1.07538e-05Z"
                        fill="#009DCE" />
                    </svg>


                  </span>
                </div>

              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default AboutUs