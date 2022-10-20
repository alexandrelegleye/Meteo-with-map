import React from "react";
import WeatherCode from "../WeatherCode.js/WeatherCode";

// icons de react-icons
import {GiWindsock} from "react-icons/gi";  // vent
import {SiRainmeter} from "react-icons/si" // pluie
import {TbGauge} from "react-icons/tb" // barometre

// style
import "./CurrentWeatherStyle.scss";

function CurrentWeather({
  currentWeatherData
}) {
 
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

