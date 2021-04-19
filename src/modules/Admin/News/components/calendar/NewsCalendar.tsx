import { useState } from "react";
import Calendar from "react-calendar";
import "./index.scss";

export const NewsCalendar: React.FC = () => {
  const [value, onChange] = useState<Date>(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        onChange={(d) => {
          console.log(d);
          onChange(d as Date);
        }}
        defaultValue={value}
        maxDetail="month"
        minDetail="century"
        returnValue="start"
        showNavigation={true}
        showNeighboringMonth={true}
      />
    </div>
  );
};
