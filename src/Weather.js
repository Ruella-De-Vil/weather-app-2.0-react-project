import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather mt-3 pb-1 ps-4 pe-4" >
            <div  className="search-engine pt-4 pb-3">
                <form>
                    <input className="search-bar" type="text" placeholder="Enter City..." />
                    <input className="search-btn" type="submit" value="Search" />
                </form>
            </div >
            <h1 className="city">Durban</h1>
            <p className="day-and-time"><span className="day"> Tuesday</span>, <span className="time">10:00</span></p>
            <div className="row">
            <div className="current-condition clearfix col">
             <p className="condition-description">Partly cloudy</p>
             <h2 className="current-temp "><span className="temp-value">24</span><span className="unit">°C</span>
            <img className="current-weather-icon" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="icon"></img>
            </h2>
            </div>
            <div className="w-h-f col">
            <p>Wind: <span className="wind">10km/h</span></p>
            <p>Humidity: <span className="humidity">60%</span></p>
            <p>Feels Like: <span className="real-feel">24°C</span></p>
            </div>
            </div>
            <footer className="mt-3">
                <p>Coded by <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">Ruella Budhoo</a>, open-sourced on <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" >Github</a> and hosted via <a href="">Netlify</a>.</p>
            </footer>
        </div>
    )
}