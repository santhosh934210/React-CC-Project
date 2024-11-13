import React, { useState } from "react";
import './meeting.css';
const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const timeSlots = [
    { time: "11:00 AM", available: true },
    { time: "11:40 AM", available: true },
    { time: "12:20 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "1:40 PM", available: true },
    { time: "2:20 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "3:40 PM", available: true },
    { time: "4:20 PM", available: true },
  ];

  return (
    <div className="container">
      <h1>Online Schedule Meeting</h1>
      <div className="calendar">
        {/* Calendar component goes here */}
      </div>
      <div className="time-slots">
        <h2>{selectedDate.toDateString()}</h2>
        {timeSlots.map((timeSlot) => (
          <button
            key={timeSlot.time}
            onClick={() => handleTimeSlotChange(timeSlot)}
            disabled={!timeSlot.available}
            className={
              selectedTimeSlot === timeSlot
                ? "selected-time-slot"
                : "time-slot"
            }
          >
            {timeSlot.time}
          </button>
        ))}
      </div>
      {selectedTimeSlot && (
        <div className="selected-time">
          <h3>Selected Time:</h3>
          <p>
            {selectedDate.toDateString()} at{" "}
            {selectedTimeSlot.time}
          </p>
          {/* Add logic to book the meeting */}
        </div>
      )}
    </div>
  );
};

export default ScheduleMeeting;