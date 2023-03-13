import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../Css/Header.css"
import "../../Css/Common.css"
import Images from "../../Util/Images";

const Header = () => {
  const [activeLink, setActiveLink] = useState('/');

    return(
        <>
         <header>
    <div className="container-fluid common-container-fluid-adjust-padding">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg ">

            <Link className="navbar-brand" to="/">
               <span className="logo-holder">
               <img  src={Images.logo} alt="" className="img-fluid" />
              
               </span> 
              
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav justify-content-end w-100">
                <li className="nav-item">
                  <Link to="/"  onClick={() => setActiveLink('/')} className={`nav-link ${activeLink === "/" ? "current" : ""}`} >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us"onClick={() => setActiveLink('/about-us')} className={`nav-link ${activeLink === "/about-us" ? "current" : ""}`} >About us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/our-services"onClick={() => setActiveLink('/our-services')} className={`nav-link ${activeLink === "/our-services" ? "current" : ""}`}>Our services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/training"onClick={() => setActiveLink('/training')} className={`nav-link ${activeLink === "/training" ? "current" : ""}`}>Training</Link>
                </li>
                <li className="nav-item">
                  <Link to="/patient-corner" onClick={() => setActiveLink('/patient-corner')} className={`nav-link ${activeLink === "/patient-corner" ? "current" : ""}`}>Patient corner</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" onClick={() => setActiveLink('/contact-us')} className={`nav-link ${activeLink === "/contact-us" ? "current" : ""}`}>Contact us</Link>
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