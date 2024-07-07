import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function  WeatherForecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false });

  useEffect(() => {
let weatherData = props.forecastInfo;
let lat = weatherData.lat;
let lon = weatherData.lon;
const apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response){
    console.log(response.data);
    setForecastData(
      {
        ready: true,
        date: new Date((response.data.daily[0].dt)*1000),
        maxTemp: response.data.daily[0].temp.max,
        minTemp: response.data.daily[0].temp.min,
        icon: response.data.daily[0].weather[0].icon
      }
    )
  }

}, [props.forecastInfo]);

  if (forecastData.ready){
    
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let day = days[forecastData.date.getDay()];
   
   console.log(day);
  return (
    <div className="container weather-forecast pt-2">
      <div className="row justify-content-center">
        <div className="col-4 forecast-day justify-content-center">
            {day}
        </div>
        <div className="col-2 forecast-icon justify-content-center">
              <WeatherIcon iconId={forecastData.icon} />
        </div>
        <div className="col-2 forecast-max justify-content-end">
            <strong>{Math.round(forecastData.maxTemp)}</strong>
        </div>
        <div className="col-2 forecast-min justify-content-start">
        {Math.round(forecastData.minTemp)}
        </div>
      </div>
      </div>
  );
} else {
  return <div>Loading...</div>;
}
}
