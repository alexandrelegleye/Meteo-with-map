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



  const formatTimeStamp = (ts) => {
    const dateToFormat = new Date(ts);
    const options = { weekday: "long" };
    const day = new Intl.DateTimeFormat("fr-FR", options).format(dateToFormat);
    const heure = dateToFormat.getHours();
    let textHour = "";

    switch (heure) {
    case 12:
      textHour = "midi";
      break;
    case 0:
      textHour = "minuit";
      break;
    default:
      textHour = `${heure}h`;
    }
    
    return (
      `${day} à ${textHour}`
    );

  };
  



  return (

    <Card.Group className="weather-hourly">
      {hourlyForecast.list.map((hour) => (
        <Card
          className="hourly-card"
          key={hour.weather.dt}>
          <WeatherCode 
            weatherCode={hour.weather[0].icon} />
          <Card.Content>
            <Card.Header>{formatTimeStamp(hour.dt_txt)}</Card.Header>
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
    </Card.Group>
  );


}

export default React.memo(HourlyWeather);
