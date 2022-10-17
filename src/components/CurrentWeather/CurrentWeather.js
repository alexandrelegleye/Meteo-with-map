/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
//import arrowWind from "../../wind-arrow.png"
import "./CurrentWeatherStyle.css";
import WeatherCode from "../WeatherCode.js/WeatherCode";

// icons de react-icons
import {GiWindsock} from "react-icons/gi";  // vent
import {SiRainmeter} from "react-icons/si" // pluie
import {TbGauge} from "react-icons/tb" // barometre

function CurrentWeather({
  currentWeatherData, test
}) {
 
  useEffect(() => {
    //console.log('currentWeatherData', currentWeatherData);     

  },[currentWeatherData]);

  if (!currentWeatherData){
    return(
      <p> No Data Yet!!</p>
    )
  }

  let rainValue = 0

  /*  if (currentWeatherData.rain){
    rainValue= currentWeatherData.rain.1h;
  }  */

  console.log("current", currentWeatherData)


  return (
    <div className="weather-current">
      <div className="weather-current-header" >
        <p className="weather-current-temperature">{Math.round(currentWeatherData.temp)}°C</p>
        < WeatherCode weatherCode= {currentWeatherData.weather[0].icon} />
        <p className="weather-current-weathercode">{currentWeatherData.weather[0].description}</p>
      </div>

      <div className="weather-current-details" >
        
        <div className="weather-current-details-wind">
          <GiWindsock />
          <p className="weather-current-wind">{currentWeatherData.wind_speed} m/s</p>
        </div>

        <div className="weather-current-details-rain">
          <SiRainmeter />
          <p className="weather-current-rain">{currentWeatherData.humidity} %</p>
        </div>

        <div className="weather-current-details-pressure">
          <TbGauge/>
          <p className="weather-current-pressure">{currentWeatherData.pressure} mbar</p>
        </div>

      </div>
    </div>
  );
}

export default React.memo(CurrentWeather);

