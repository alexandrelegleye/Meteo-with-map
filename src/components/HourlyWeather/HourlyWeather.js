/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import WeatherCode from "../WeatherCode.js/WeatherCode";
import { Card } from "semantic-ui-react";
import "./HourlyWeatherStyle.scss";
import { formatTimeStamp } from "../../utils/weatherUtils";
import { handleRain } from "../../utils/weatherUtils";
import {SiRainmeter} from "react-icons/si" // pluie
import {GiWindsock} from "react-icons/gi";  // vent
import {TbGauge} from "react-icons/tb" // barometre
import {BiSkipPreviousCircle, BiSkipNextCircle} from "react-icons/bi" // moins / plus


function HourlyWeather({
  hourlyForecast
}) {

  const [page, setPage] = useState(0);
  const [items, setItems] = useState("")


  const ItemsToShow = () => {
    let itemfilter = []
    for(let i= page; i< (page+6); i++){
      itemfilter.push(hourlyForecast[i])
    }
    setItems(itemfilter)
  }

  const handleNextIcon = () => {
    const actualPage= page ; 
    if(page === 42){
      return
    }

    setPage((actualPage+6))
  }

  const handlePreviousIcon = () => {
    const actualPage= page ; 
    if(page === 0){
      return
    }
    setPage((actualPage-6))
  }
  

  useEffect(() => {
    ItemsToShow()
    //console.log("hourlyForecast", hourlyForecast);
  }, [hourlyForecast, page]);

  return (
    <div>

      {page > 0 &&
      <BiSkipPreviousCircle 
        style={{
          position:"absolute",
          left:"2rem"
        }}
        className="pages-icons"
        onClick={() => handlePreviousIcon()}
      />
      } 
      {page <42 &&
      <BiSkipNextCircle
        style={{
          position:"absolute",
          right:"2rem"
        }}
        className="pages-icons"
        onClick={() => handleNextIcon()}
      />
      }

      <Card.Group className="weather-hourly"
        style={{
          justifyContent:"space-evenly"
        }}
      >
        {items && items.map((hour) => (
          <Card         
            style={{
              minWidth: "150px",
              maxWidth:"200px",

              textAlign:"center",    
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
      
    </div>
  );
}

export default React.memo(HourlyWeather);
