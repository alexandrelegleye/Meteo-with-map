import React, { useRef, useEffect, useState } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import './WeatherStyle.css';

export default function Weather({
  coordinates
}) {

const {lng, lat} = coordinates; 
const [weatherData, setWeatherData] = useState('');
const [longitude, setLongitude] = useState(10);
const [latitude, setLatitude] = useState(10) 

 
    useEffect(() => {
      const timer = setTimeout(() => {
      console.log(lng, lat);

      
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation,rain,cloudcover,windspeed_10m,winddirection_10m,direct_radiation_instant&daily=precipitation_sum,weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setWeatherData(data)
          setLatitude(lat);
          setLongitude(lng);
        });
      },1000);
      },[weatherData, lng, lat]);

      return (
        <div className="weather">
          {weatherData && (
            <>
          <CurrentWeather currentWeatherData={weatherData.current_weather}/>
          <HourlyWeather hourlyWeatherData={weatherData.hourly}/>
          <DailyWeather dailyWeatherData={weatherData.daily}/>          
          </>
          )} 
         
        </div>
      );
}
