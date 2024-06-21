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
            <p className="day-and-time">Tuesday, 10:00</p>
            <div className="row">
            <div className="current-condition col">
             <p>Partly cloudy</p>
             <h2 className="current-temp">24°C
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="icon"></img>
            </h2>
            </div>
            <div className="w-h-f col">
            <p>Wind: 10km/h</p>
            <p>Humidity: 60%</p>
            <p>Feels Like: 24°C</p>
            </div>
            </div>
        </div>
    )
}