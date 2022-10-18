import React from "react";


import "./weatherCodeStyles.css";

function WeatherCode({
  weatherCode, temp
}) {
  //console.log("icon weather code component" ,weatherCode);
  return (
    <div
      className="weather-code"
    >
      <img 
        className="hourly-card-code"
        src={`https://openweathermap.org/img/wn/${weatherCode}@2x.png`}
        alt='weather code with Icon'
      />
      {temp &&
        <div className="weather-code-temp">    
          <p>{temp}°C</p>
        </div>
      }
    
    </div>
   
    

  );
}


export default React.memo(WeatherCode);