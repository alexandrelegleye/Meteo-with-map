// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import WeatherCode from "../WeatherCode.js/WeatherCode";
import { Card } from "semantic-ui-react";
import "./HourlyWeatherStyle.css";


function HourlyWeather({
  hourlyForecast
}) {

  useEffect(() => {
    console.log("hourlyForecast", hourlyForecast);

  }, [hourlyForecast]);

  const handleRain = (data) => {
    if (!data.rain) {
      return 0
    }
    if (data.rain) {
      if (data.rain["1h"]) {
        return data.rain["1h"]
      } else if (data.rain["3h"])
        return data.rain["3h"]
    }
  }



  return (

    <div className="weather-hourly">
      {hourlyForecast.list.map((hour) => (
        <Card
          className="hourly-card"
          key={hour.weather.dt}>
          <WeatherCode weatherCode={hour.weather[0].icon} />
          <Card.Content>
            <Card.Header>{hour.dt_txt}</Card.Header>
            <Card.Meta> {Math.round(hour.main.temp) - 273}°C {/* temp */} </Card.Meta>
            <Card.Description>{handleRain(hour)} mm {/* pluie */}</Card.Description>
            <Card.Description>{Math.round(hour.wind.speed)} m/s {/* vent */}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            min:{Math.round(hour.main.temp_min) - 273}°C
            max:{Math.round(hour.main.temp_max) - 273}°C{/* temp min/max */}
          </Card.Content>

        </Card>
      ))}
    </div>
  );


}

export default React.memo(HourlyWeather);
