import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
 function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        iconUrl:"https://openweathermap.org/img/wn/10d@2x.png",
        date: new Date(response.data.dt*1000),
        humidity: response.data.main.humidity,
        realFeel: response.data.main.feels_like
    });

 } 

if (weatherData.ready) {
    return (
        <div className="Weather mt-3 pb-1 ps-4 pe-4" >
            <div  className="search-engine pt-4 pb-3">
                <form>
                    <input className="search-bar" type="text" placeholder="Enter City..." />
                    <input className="search-btn" type="submit" value="Search" />
                </form>
            </div >
            <WeatherInfo info = {weatherData}/>
            <footer className="mt-3">
                <p>Coded by <a href="https://github.com/Ruella-De-Vil">Ruella Budhoo</a>, open-sourced on <a href="https://github.com/Ruella-De-Vil/weather-app-2.0-react-project" >Github</a> and hosted via <a href="">Netlify</a>.</p>
            </footer>
        </div>
    )
} else {
 const apiKey = "a9498979f933b4259d63b76dd499f095";
 let city = "Durban";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse); 
 
 return "Loading...";
}
}