import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
 function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        icon: response.data.weather[0].icon,
        date: new Date((response.data.dt + (response.data.timezone - 7200))*1000),
        humidity: response.data.main.humidity,
        realFeel: response.data.main.feels_like
    });

 }

function search(){
    const apiKey = "a9498979f933b4259d63b76dd499f095";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

 function handleSearch(event){
    event.preventDefault();
    search();
    
 }

 function handleCityChange(event){
    setCity(event.target.value);
    console.log(city);
 }

if (weatherData.ready) {
    return (
        <div className="Weather mt-3 pb-1 ps-4 pe-4" >
            <div  className="search-engine pt-4 pb-3">
                <form onSubmit={handleSearch}>
                    <input className="search-bar" type="text" placeholder="Enter City..." onChange={handleCityChange} />
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
    search();
    return "Loading...";
}
}