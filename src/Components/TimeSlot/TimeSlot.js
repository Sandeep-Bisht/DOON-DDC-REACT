import React from "react";

const TimeSlotSelection = () => {

    const startTimeMorning = new Date();
startTimeMorning.setHours(9, 0, 0); // Set start time for the morning range (9 am)

const endTimeMorning = new Date();
endTimeMorning.setHours(13, 0, 0); // Set end time for the morning range (1 pm)

const startTimeAfternoon = new Date();
startTimeAfternoon.setHours(14, 0, 0); // Set start time for the afternoon range (2 pm)

const endTimeAfternoon = new Date();
endTimeAfternoon.setHours(18, 0, 0); // Set end time for the afternoon range (6 pm)

const timeSlots = [];

// Generate morning time slots
let currentTime = startTimeMorning;
while (currentTime < endTimeMorning) {
  timeSlots.push(currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
}

// Generate afternoon time slots
currentTime = startTimeAfternoon;
while (currentTime < endTimeAfternoon) {
  timeSlots.push(currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
}

console.log(timeSlots);


  return (
    <div>
      {/* <h3>Select a time slot:</h3> */}
      <select>
        {timeSlots.map((timeSlot, index) => (
          <option key={index} value={timeSlot}>
            {timeSlot}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSlotSelection;
