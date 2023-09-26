import React, { useEffect } from 'react'
import "../../Css/About.css"
import Images from '../../Util/Images'
import { Link } from "react-router-dom";

const RecentActivities= () => {

  
  return (
    <>
     <div className="common-redirect-banner">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="common-redirect-banner-title">RecentActivities</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                        <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">RecentActivities</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  </div>
  <div className='container'>
        <div className='patientSpeaks-text'>
            <p className='common-para'><div className='container'>
        <div className='recentActivities-text'>
            <p className='common-para'>The processes of digestion include 
            six activities: ingestion, propulsion, mechanical or physical 
            digestion, chemical digestion, absorption, and defecation. 
            The first of these processes, ingestion, refers to the entry 
            of food into the alimentary canal through the mouth.

</p>
        </div>

      </div>

</p>
        </div>

      </div>
      
</>
  )
}

export default RecentActivities