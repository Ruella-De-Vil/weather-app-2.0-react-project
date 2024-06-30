import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempMeasurement from "./TempMeasurement";


export default function WeatherInfo(props) {
    let weatherData = props.info;
    return (
        <div>
          <h1 className="city">{weatherData.city}, {weatherData.country}</h1>
            <FormattedDate date={weatherData.date} />
            <div className="row">
            <div className="current-condition clearfix col">
            <p className="condition-description text-capitalize">{(weatherData.description)/*.toUpperCase().charAt(0) + (weatherData.description).slice(1)*/}</p>
            <TempMeasurement metric={weatherData.temperature}/>
            <span className="current-icon">
            <WeatherIcon iconId={weatherData.icon} alt={weatherData.description}/>
            </span>
            </div>
            <div className="w-h-f col">
            <p>Wind: <span className="wind">{weatherData.wind}km/h</span></p>
            <p>Humidity: <span className="humidity">{weatherData.humidity}%</span></p>
        <p>Feels Like: <span className="real-feel">{Math.round(weatherData.realFeel)}°C</span></p>
            </div>
            </div>
        </div>
    )
}