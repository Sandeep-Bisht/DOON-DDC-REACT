import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { url } from "../Util/url";

const AllBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [todayDate ] = useState(new Date().toISOString().split("T")[0])
  const queryClient = useQueryClient();

  const fetchBookingData = async (date) => {
    const response = await fetch(`${url}/appointment/get_specific_date_appointment_list/${date}`);
   const data = await response.json();
   console.log(data, "dataaaaaaaaaaaaa")
    return data.data;
  };

  const { data: bookingData, isLoading, isError, error } = useQuery(
    ["bookingData", selectedDate],
    () => fetchBookingData(selectedDate),
    { enabled: false }
  );

  useEffect(() => {
    queryClient.prefetchQuery(["bookingData", selectedDate], () => fetchBookingData(selectedDate));
  }, [queryClient, selectedDate]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  return (
    <>
      <section className="all-booking-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
                <span className="bar one"></span>All Booking
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
          <div className="row">    
           <div className="col-lg-3">
            <p>Select Date</p>
              <input
                type="date"
                name="date"
                min={todayDate}
                value={selectedDate}
                onChange={handleDateChange}
                className="w-100 px-3"
              />
            </div>

            <div className="col-lg-3">
            <p>From</p>
              <input
                type="date"
                name="date"               
                className="w-100 px-3"
              />
            </div>

            <div className="col-lg-3">
            <p>Till</p>
              <input
                type="date"
                name="date"
                className="w-100 px-3"
              />
            </div>

            <div className="col-lg-3">
           <button>Find</button>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="row mt-lg-4 pt-lg-2">
  {isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error: {error.message}</div>
  ) : Array.isArray(bookingData)  && bookingData.length > 0 ?(
    bookingData.map((booking) =>
     (        
      <div className="col-lg-3" key={booking.id}>
        <div className="appointment-card">
          <p className="patient-name descrption-heading-detail">
            <span className="descrption-heading">Name:</span>{booking.name}
          </p>
          <p className="booking-time descrption-heading-detail">
            <span className="descrption-heading">Timing:</span>{booking.time}
          </p>
          <p className="patient-mobile descrption-heading-detail">
            <span className="descrption-heading">Phone:</span>{booking.contactNo}
          </p>
        </div>
      </div>
    ))
  ) : (
    <div>No booking data available</div>
  )}
</div>

        </div>
      </section>
    </>
  );
};

export default AllBooking;
