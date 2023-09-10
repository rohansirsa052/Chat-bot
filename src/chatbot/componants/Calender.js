import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarWidget = ( props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    props.actionProvider.handleTime();
    
   
  };

  return (
    <div className="calendar-widget">
      <Calendar
        onChange={handleDateSelect}
        value={selectedDate}
      />
    </div>
  );
};

export default CalendarWidget;
