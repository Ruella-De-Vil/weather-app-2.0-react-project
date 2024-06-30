import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function  WeatherForecast(props) {

  return (
    <div className="container weather-forecast pt-2">
      <div className="row justify-content-center">
        <div className="col-4 forecast-day justify-content-center">
            Tomorrow
        </div>
        <div className="col-2 forecast-icon justify-content-center">
              <WeatherIcon iconId={"09d"} />
        </div>
        <div className="col-2 forecast-max justify-content-end">
            <strong>25</strong>
        </div>
        <div className="col-2 forecast-min justify-content-start">
            15
        </div>
      </div>
      </div>
  );
}