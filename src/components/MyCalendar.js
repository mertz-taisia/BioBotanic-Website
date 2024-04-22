import React, { useState } from "react";
import Calendar from "react-calendar";
import '../App.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div class="flex h-auto w-full">
      <Calendar
        onChange={date => setDate(date)}
        value={date}
      />
    </div>
  );
}

export default MyCalendar;