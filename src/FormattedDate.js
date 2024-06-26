import React from "react";

export default function     FormattedDate(props) {
    console.log(props.date)
    let day = props.date.toLocaleDateString("en-UK", {weekday: "long"});
    //or     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; ...
    //then   let day = days[prop.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;;
    }
  return (
    <div>
      <p className="day-and-time"><span className="day">{day}</span>, {hour}:{minutes}<span className="time"></span></p>
    </div>
  );
}