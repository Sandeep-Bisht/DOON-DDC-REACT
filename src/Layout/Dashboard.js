import React from 'react'

import {FaUserFriends,FaUsers} from "react-icons/fa"

const Dashboard = () => {
  return (
    <section className='dashboard-overview'>
          <div className='container'>
              <div className='row'>
                   <div className='col-md-12'>
                        
                        <h1 class="common-heading d-flex align-items-center justify-content-center mb-4"><span class="bar one"></span>Overview<span class="bar two"></span></h1>
                   </div>
              </div>
               <div className='row'>
                   <div className='col-lg-6'>
                      <div className='dash-card'>
                           <div className='dash-card-inner'>
                              <div className='left'>
                                <FaUsers/>
                              </div>
                              <div className='right'>
                                     <p className='patient-number'>520</p>
                                     <p className='dash-card-title'>
                                        All Patient
                                     </p>
                              </div>
                           </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                    <div className='dash-card'>
                           <div className='dash-card-inner'>
                              <div className='left'>
                                <FaUserFriends/>
                              </div>
                              <div className='right'>
                                     <p className='patient-number'>50</p>
                                     <p className='dash-card-title'>
                                        Today Patient
                                     </p>
                              </div>
                           </div>
                      </div>
                    </div>
               </div>
          </div>
       </section>
  )
}

export default Dashboard