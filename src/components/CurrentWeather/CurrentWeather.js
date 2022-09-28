import React, { useRef, useEffect, useState } from 'react';
import arrowWind from '../../wind-arrow.png'
import { AiOutlineArrowUp,  } from 'react-icons/ai';
import './CurrentWeatherStyle.css';

export default function CurrentWeather({
  currentWeatherData
}) {
 
    useEffect(() => {
      //console.log('currentWeatherData', currentWeatherData);      

      },[currentWeatherData]);

      if (!currentWeatherData){
        return(
          <p> No Data Yet!!</p>
        )
      }

      return (
        <div className="weather-current">
            <h2>Méteo Actuelle: </h2>
            <p>Température de {currentWeatherData.temperature}</p>
            <p>Vent de:  {currentWeatherData.windspeed}km/h</p>
            <p>Direction :
              <img className="wind-arrow" style={{rotate:`${currentWeatherData.winddirection+180}deg`}}
                src={arrowWind}
                alt="Arrow Wind" />
            </p>
        </div>
      );
}
