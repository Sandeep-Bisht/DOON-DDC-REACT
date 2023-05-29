import React from 'react'
import { signal, effect } from "@preact/signals";


const AllBooking = () => {
  const currentDate = signal(undefined)
  effect(() => {
    const date = new Date().toISOString().split('T')[0];          
      currentDate.value = date;
  });

  async function fetchData(date) {
    const response = await fetch(`https://api.example.com/data?date=${date}`);
    const data = await response.json();
    return data;
  }
  
  return (
    <>
       <section className='all-booking-area'>
          <div className='container'>
              <div className='row'>
                   <div className='col-md-12'>
                        
                        <h1 className="common-heading d-flex align-items-center justify-content-center mb-4"><span className="bar one"></span>All Booking<span className="bar two"></span></h1>
                   </div>
              </div>
              <div className='row'> 
                <div className='col-lg-3'>
                  <input 
                  type='date'
                  name="date"
                  value={currentDate && currentDate.value}
                  min={currentDate.value}
            
                  className="w-100 px-3">
                  </input>
                </div>
              </div>
              <div>
                <hr></hr>
              </div>
              <div className='row mt-lg-4 pt-lg-2'>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
                  <div className='col-lg-3'>
                      <div className='appointment-card'>
                        
                          <p className='patient-name descrption-heading-detail'><span className='descrption-heading'>Name:</span>John doe</p>
                          <p className='booking-time descrption-heading-detail'><span className='descrption-heading'>Timing:</span>10:15</p>
                          <p className='patient-mobile descrption-heading-detail'><span className='descrption-heading'>Phone:</span>9536765357</p>
                      </div> 
                  </div>
              </div>
          </div>
       </section>
    
    </>
  )
}

export default AllBooking