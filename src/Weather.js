import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="weather">
            <h1>Durban</h1>
            <p>Tuesday</p>
            <p>10:00</p>
            <h4>Partly cloudy</h4>
            <h2>24°C
            <img href="" alt="icon"></img>
            </h2>
            <p>Wind: 10km/h</p>
            <p>Humidity: 60%</p>
            <p>Feels Like: 24°C</p>
        </div>
    )
}