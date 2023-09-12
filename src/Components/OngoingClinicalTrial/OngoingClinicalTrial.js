import React, { useEffect } from 'react'

import Images from '../../Util/Images'
import { Link } from "react-router-dom";

const OngoingClinicalTrial= () => {

  
  return (
    <>
     <div className="common-redirect-banner">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="common-redirect-banner-title">Ongoing Clinical Trial</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                        <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Ongoing Clinical Trial</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
     </div>
      
      
</>
  )
}

export default OngoingClinicalTrial