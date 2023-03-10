import React from 'react'
import { useEffect } from 'react'
import "../../Css/Contact.css"

const Contact = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
      }, [])
  return (
   <>
   <div className="common-redirect-banner">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="common-redirect-banner-title">Contact</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                        <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  </div>
 
  <section className="contact-single shop-description">
    <div className="container ">
    <div className="row">
        <div className="col-md-6">
            <h1 className="common-heading d-flex align-items-center ">
                <span className="bar one"></span> Contact Us<span className="bar two"></span>
              </h1>
            <p className="common-para-second">
                There’s no place like home. To help you make yours<br /> perfect, our stores are open, we’re delivering as normal,<br /> our online store is available 24/7, and our customer<br /> service team is ready to help you via phone and Live Chat.
            </p>
            <ul className="mt-5 ps-0 address-list">
                <li className="py-2 d-flex">
                    <div className="me-4">
                        {/* <svg className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"></path></svg><!-- <i className="fal fa-map-marker-alt  fa-2x"></i> Font Awesome fontawesome.com --> */}
                    </div>
                    <div>
                        <h6 className="mb-0">Adress</h6>
                        <p className="color1">807 Mize Cemetery Rd, Somerset KY, 42503</p>
                    </div>
                </li>
                <li className="py-2 d-flex">
                    <div className="me-4">
                        {/* <svg className="svg-inline--fa fa-phone-alt fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z"></path></svg><!-- <i className="fal fa-phone-alt fa-2x"></i> Font Awesome fontawesome.com --> */}
                    </div>
                    <div>
                        <h6 className="mb-0">Phone</h6>
                        <p>
                            <a className=" color1 common-para" href="tel:85(0)225639">
                                Phone: +41 71 227 76 90
                            </a>
                        </p>
                    </div>
                </li>
                <li className="py-2 d-flex">
                    <div className="me-4">
                        {/* <svg className="svg-inline--fa fa-envelope fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg><!-- <i className="fal fa-envelope fa-2x"></i> Font Awesome fontawesome.com --> */}
                    </div>
                    <div>
                        <h6 className="mb-0">Email</h6>
                        <p>
                            <a className="color1 common-para" href="mailto:mayank@proponenttechnlogies.com"> sayhello@familab.net</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="col-md-6">
            <div className="contact-form-wrapper">
                <form className="mt-4">
                    <div className="row">
                      <div className="col-md-12 text-center">
                         {/* <svg className="svg-inline--fa fa-envelope fa-w-16 fa-5x text-white" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg><!-- <i className="fal fa-envelope fa-5x text-white"></i> Font Awesome fontawesome.com --> */}
                         <h4 className="text-white text-uppercase mb-4 mt-2">Send us a message</h4> 
                      </div>  
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column">
                            <div className="mb-3 cover">
                                
                                <input type="text" className="form-control" id="name" placeholder="Your Name*" />
                            </div>
                            <div className="mb-3 cover">
                                
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                          
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3 cover">
                              
                                <textarea name="your-message" cols="40" rows="3" className="w-100 h-100" aria-invalid="false" placeholder="Your Comment*"></textarea>
                            </div>
                              <div className="mt-5">
                                <button className="add-to-cart common-submit border-0">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</section>
</>
  )
}

export default Contact