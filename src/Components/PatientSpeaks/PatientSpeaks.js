import React, { useEffect } from 'react'

import Images from '../../Util/Images'
import { Link } from "react-router-dom";

const PatientSpeaks= () => {

  
  return (
    <>
     <div className="common-redirect-banner">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="common-redirect-banner-title">Patient Speaks</p>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-0 d-flex justify-content-center">
                        <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Patient Speaks</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
     </div>
      <div className='container'>
        <div className='patientSpeaks-text'>
            <p className='common-para'>Healthcare is a trillion dollar industry worldwide. With so many 
                investments in time and money, coupled with the tremendous responsibility 
                of managing, aiding, and saving lives, it’s no wonder that one of 
                healthcare’s greatest areas of focus is selecting the most effective new 
                technologies to support cost-saving measures, increase efficiency, and 
                provide better access to care. At the end of the day, it’s crucial that 
                technological advances improve patient outcomes.

</p>
        </div>

      </div>
      
</>
  )
}

export default PatientSpeaks