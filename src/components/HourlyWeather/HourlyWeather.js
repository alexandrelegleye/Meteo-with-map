// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import WeatherCode from "../WeatherCode.js/WeatherCode";
import { Card } from "semantic-ui-react";
import "./HourlyWeatherStyle.css";
import { formatTimeStamp } from "../../utils/weatherUtils";
import { handleRain } from "../../utils/weatherUtils";
import {SiRainmeter} from "react-icons/si" // pluie
import {GiWindsock} from "react-icons/gi";  // vent
import {TbGauge} from "react-icons/tb" // barometre

function HourlyWeather({
  hourlyForecast
}) {

  useEffect(() => {
    //console.log("hourlyForecast", hourlyForecast);

  }, [hourlyForecast]);

  return (

    <Card.Group className="weather-hourly"
    >
      {hourlyForecast.map((hour) => (
        <Card 
          style={{
            minWidth: "120px",
            textAlign:"center"
          }}
          className="hourly-card"
          key={hour.dt}>
          <WeatherCode 
            weatherCode={hour.weather[0].icon}
            temp={Math.round(hour.temp)}
          />
          {hour.weather[0].description}
          <Card.Content
            style={{
              textAlign:"left"
            }}
          >
            <Card.Header>{formatTimeStamp((hour.dt*1000))}</Card.Header>
            <Card.Description>
              <SiRainmeter/>
              {handleRain(hour)} mm {/* pluie */}
            </Card.Description>
            <Card.Description>
              <GiWindsock />
              {Math.round(hour.wind_speed)} m/s {/* vent */}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            < TbGauge />
            {hour.pressure} mbar
          </Card.Content>

        </Card>
      ))}
    </Card.Group>
  );


}

export default React.memo(HourlyWeather);
