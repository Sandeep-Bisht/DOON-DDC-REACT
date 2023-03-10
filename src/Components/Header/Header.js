import React from "react";
import { Link } from "react-router-dom";
import "../../Css/Header.css"
import "../../Css/Common.css"
import Images from "../../Util/Images";

const Header = () => {

    return(
        <>
         <header>
    <div className="container-fluid common-container-fluid-adjust-padding">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg ">

            <a className="navbar-brand" href="#">
              <img  src={Images.logo} alt="" className="img-fluid" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav justify-content-end w-100">
                <li className="nav-item">
                  <Link to="" className="nav-link current" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us" className="nav-link" href="#">About us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/our-services" className="nav-link" href="#">Our services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/training" className="nav-link ">Training</Link>
                </li>
                <li className="nav-item">
                  <Link to="/patient-corner"  className="nav-link ">Patient corner</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link me-0">Contact us</Link>
                </li>
              </ul>
            </div>

          </nav>
        </div>
      </div>
    </div>

  </header>
        </>
    )
}

export default Header;