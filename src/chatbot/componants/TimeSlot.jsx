import React from 'react';
import "./Calender.css";

const TimeSlot = ({ actionProvider }) => {


  const handleTimeSelect = (time) => {
 
    actionProvider.handleName();
  };

  return (
    <div className="container">
      <div className="morning">
        <p>Morning</p>
        <div className="buttonContainer">
          <button className="btn" onClick={() => handleTimeSelect('9:00 AM')}>9:00 AM</button>
          <button className="btn" onClick={() => handleTimeSelect('10:00 AM')}>10:00 AM</button>
          <button className="btn" onClick={() => handleTimeSelect('11:00 AM')}>11:00 AM</button>
          <button className="btn" onClick={() => handleTimeSelect('12:00 AM')}>12:00 AM</button>
        </div>
      </div>

      <div className="noon">
        <p>Noon</p>
        <div className="buttonContainer">
          <button className="btn" onClick={() => handleTimeSelect('2:00 PM')}>2:00 PM</button>
          <button className="btn" onClick={() => handleTimeSelect('3:00 PM')}>3:00 PM</button>
          <button className="btn" onClick={() => handleTimeSelect('4:00 PM')}>4:00 PM</button>
          <button className="btn" onClick={() => handleTimeSelect('5:00 PM')}>5:00 PM</button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
