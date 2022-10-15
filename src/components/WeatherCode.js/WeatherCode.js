import React from "react";


import "./weatherCodeStyles.css";

function WeatherCode({
  weatherCode
}) {
  console.log(weatherCode);
  return (
   
    <img src={`http://openweathermap.org/img/wn/${weatherCode}@2x.png`} alt='weather code with Icon'/>
    

  );
}


export default React.memo(WeatherCode);