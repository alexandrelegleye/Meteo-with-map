import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
// import DailyWeather from "../DailyWeather/DailyWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import DailyWeatherCard from "../DailyWeather/DailyWeatherCard";
import "./WeatherStyle.css";

function Weather({  
  coordinates,
  firstInput
}) {

  const {lng, lat} = coordinates; 
  const [weatherData, setWeatherData] = useState("");

  const FetchData = async(lat, lng) => {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation,rain,cloudcover,windspeed_10m,winddirection_10m,direct_radiation_instant&daily=precipitation_sum,weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`)
    try{
      console.log(response.data)
      setWeatherData(response.data)
    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchData(lat, lng)
  },[coordinates, firstInput])

  return (
    <div className="weather">
      {weatherData && firstInput && (
        <>
          <CurrentWeather currentWeatherData={weatherData.current_weather}/>
          <HourlyWeather hourlyWeatherData={weatherData.hourly}/>
          <DailyWeatherCard dailyWeatherData={weatherData.daily}/>          
        </>
      )} 
         
    </div>
  );
}

export default React.memo(Weather);
