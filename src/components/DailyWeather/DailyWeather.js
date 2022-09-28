import React, { useRef, useEffect, useState } from 'react';
import arrowWind from '../../wind-arrow.png'
import './DailyWeatherStyle.css';


export default function DailyWeather({
  dailyWeatherData
}) {
 
    useEffect(() => {
      console.log('DailyWeather',   dailyWeatherData, 
      );      

      },[]);

      return (
        <div className="weather-day">
            <h2>Méteo de la semaine: </h2>
            <table className='table is-bordered is-striped is-hoverable' >
              <thead> 
                <tr className='is-selected'>
                  <th>
                    Légende
                  </th>
                {dailyWeatherData.time.map((day) => (
                  <th key={day}>{day}</th>
                ))}
                </tr>
              </thead>
              <tbody>

                  <tr>
                    <th>Sunrise</th>
                  {dailyWeatherData.sunrise.map((day) => (
                  <th key={day}>{day}</th>
                ))}
                  </tr>

                  <tr>
                    <th>Sunset</th>
                  {dailyWeatherData.sunset.map((day) => (
                  <th key={day}>{day}</th>
                ))}
                  </tr>

                  <tr>
                    <th>Température Min</th>
                  {dailyWeatherData.temperature_2m_min.map((day, index) => (
                  <th key={`${day} ${index}`}>{day}°C</th>
                ))}
                  </tr>

                  <tr>
                    <th>Température Max</th>
                  {dailyWeatherData.temperature_2m_max.map((day, index) => (
                  <th key={`${day} ${index}`}>{day}°C</th>
                ))}
                  </tr>

              </tbody>
            </table>
        </div>
      );
}
