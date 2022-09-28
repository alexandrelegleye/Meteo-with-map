import React, { useRef, useEffect, useState } from 'react';
import CurrentWheater from '../CurrentWheater/CurrentWheater';
import './WheaterStyle.css';

export default function Wheater({
  coordinates
}) {

const {lng, lat} = coordinates; 
const [wheaterData, setWheaterData] = useState('');
const [longitude, setLongitude] = useState(10);
const [latitude, setLatitude] = useState(10) 

 
    useEffect(() => {
      const timer = setTimeout(() => {
      console.log(lng, lat);

      
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation,rain,cloudcover,windspeed_10m,winddirection_10m,direct_radiation_instant&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setWheaterData(data)
          setLatitude(lat);
          setLongitude(lng);
        });
      },1000);
      },[]);

      return (
        <div className="wheater">
          {wheaterData && 
          <CurrentWheater currentWheaterData={wheaterData.current_weather}/>
          } 
         
        </div>
      );
}
