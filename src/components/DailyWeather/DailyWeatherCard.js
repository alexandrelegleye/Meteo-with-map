import React, {useEffect} from "react";
import { GiWindsock } from "react-icons/gi";
import { SiRainmeter } from "react-icons/si";
import { TbGauge } from "react-icons/tb";
import {FiSun} from "react-icons/fi";
import {RiMoonClearLine} from "react-icons/ri";
import { Card} from "semantic-ui-react";
import { getDayOnly,getTimeOnly } from "../../utils/weatherUtils";
import WeatherCode from "../WeatherCode.js/WeatherCode";

import "./DailyWeatherStyle.scss";

function DailyWeatherCard({
  dailyWeatherData
}) {
 
  useEffect(() => {
    // console.log("DailyWeather",   dailyWeatherData);
  },[dailyWeatherData]);

  return (

    <Card.Group
      itemsPerRow={7}
      className="weather-daily"
      style={{
        justifyContent:"space-evenly"
      }}
      stackable
    >
      {dailyWeatherData?.map((day, index) => (
        index <6 && (
          <Card 
            style={{
              marginTop: "2rem",
              minWidth: "120px",
              textAlign:"center",
            }}
            className="daily-card"
            key={day.dt}>
            <WeatherCode 
              
              weatherCode={day.weather[0].icon}
              temp={Math.round(day.temp.day)}
            />
            {day.weather[0].description}
            <Card.Content
              style={{
                textAlign:"left",
              }}
            >
              <Card.Header>{getDayOnly((day.dt*1000))}</Card.Header>
              <Card.Description>
                <SiRainmeter/>
                {day.rain || 0} mm {/* pluie */}
              </Card.Description>
              <Card.Description>
                <div>
                  <GiWindsock />
                  {Math.round(day.wind_speed)} m/s {/* vent */}
                </div>
                <div>
                  < TbGauge />
                  {day.pressure} mbar
                </div>
              
               
              </Card.Description>
            </Card.Content>
            <Card.Content
              style={{
                textAlign:"left",
              }}
              extra>
              <div className="sunrise">
                <FiSun />
                {getTimeOnly((day.sunrise*1000))}
              </div> 
              <div className="sunset">
                <RiMoonClearLine />
                {getTimeOnly((day.sunset*1000))}
              </div>
             
            </Card.Content>

          </Card>)
      ))}
    </Card.Group>
  );
}

export default React.memo(DailyWeatherCard);
