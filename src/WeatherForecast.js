import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function  WeatherForecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false, daily: [] });

  useEffect(() => {
let weatherData = props.forecastInfo;
let lat = weatherData.lat;
let lon = weatherData.lon;
const apiKey = "5a16t2db0c3897f4c93565ba46a2o0f4";
const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response){
    console.log(response.data);
    setForecastData(
      {
        ready: true,
        daily: response.data.daily.slice(1, 6).map(day => ({
          date: new Date(day.time * 1000),
          maxTemp: day.temperature.maximum,
          minTemp: day.temperature.minimum,
          icon: day.condition.icon,
        })),
      });
  }

}, [props.forecastInfo]);

  if (forecastData.ready) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
  return (
    <div className="container weather-forecast pt-2">
      {forecastData.daily.map((dayData, index) => {
          let day = days[dayData.date.getDay()];
          return (
      <div key={index} className="row justify-content-center">
        <div className="col-4 forecast-day justify-content-center">
            {day}
        </div>
        <div className="col-2 forecast-icon justify-content-center">
              <WeatherIcon iconId={dayData.icon} />
        </div>
        <div className="col-2 forecast-max justify-content-end">
            <strong>{Math.round(dayData.maxTemp)}°C</strong>
        </div>
        <div className="col-2 forecast-min justify-content-start">
        {Math.round(dayData.minTemp)}°C
        </div>
      </div>
      );
      })}
      </div>
  );
} else {
  return <div>Loading...</div>;
}
}
