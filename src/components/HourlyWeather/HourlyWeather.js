// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import arrowWind from "../../wind-arrow.png"
import "./HourlyWeatherStyle.css";


export default function HourlyWeather({
  hourlyWeatherData
}) {
 
  useEffect(() => {
    console.log("HourlylyWeather",   hourlyWeatherData, 
    );      

  },[]);

  return (
    <div className="weather-hour ">
      <h2>Méteo par heures: </h2>
      <div className='table-container'>
        <table className='table is-bordered is-striped is-hoverable' >
          <thead> 
            <tr className='is-selected'>
              <th>
                    Légende
              </th>
              {hourlyWeatherData.time.map((day, index) => (
                index<24&&(
                  <th key={day}>{day}</th>)
              ))}
            </tr>
          </thead>
          <tbody>
                  
            <tr>
              <th>Température Min</th>
              {hourlyWeatherData.temperature_2m.map((day, index) => (
                index<24&&(
                  <th key={`${day} ${index}`}>{day}°C</th>
                )))}
            </tr>

            <tr>
              <th>Cloudcover</th>
              {hourlyWeatherData.cloudcover.map((day, index) => (
                index<24&&(
                  <th key={`${day} ${index}`}>{day}%</th>
                )))}
            </tr>

            <tr>
              <th>Precipitaton</th>
              {hourlyWeatherData.precipitation.map((day, index) => (
                index<24&&(
                  <th key={day}>{day}mm</th>
                )))}
            </tr>

            <tr>
              <th>Wind Speed</th>
              {hourlyWeatherData.windspeed_10m.map((day,index ) => (
                index<24&&(
                  <th key={day}>{day}</th>
                )))}
            </tr>

            <tr>
              <th>Wind direction</th>
              {hourlyWeatherData.winddirection_10m.map((day,index) => (
                index<24&&(
                  <th key={day}>
                    <img className="wind-arrow" style={{rotate:`${day+180}deg`}}
                      src={arrowWind}
                      alt="Arrow Wind" />
                  </th>
                )))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ); 
}


