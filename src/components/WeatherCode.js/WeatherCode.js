import React from "react";


import "./weatherCodeStyles.css";

function WeatherCode({
  weatherCode
}) {

  return (
    
    <p>Weather Code: {weatherCode}</p>
    

  );
}


export default React.memo(WeatherCode);