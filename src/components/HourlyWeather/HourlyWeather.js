/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import WeatherCode from "../WeatherCode.js/WeatherCode";
import { Card } from "semantic-ui-react";
import "./HourlyWeatherStyle.css";
import { formatTimeStamp } from "../../utils/weatherUtils";
import { handleRain } from "../../utils/weatherUtils";
import {SiRainmeter} from "react-icons/si" // pluie
import {GiWindsock} from "react-icons/gi";  // vent
import {TbGauge} from "react-icons/tb" // barometre
import {BsPlusCircle} from "react-icons/bs" // plus 
import {BiMinusCircle} from "react-icons/bi" // moins

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

  const handlePlusIcon = () => {
    const actualPage= page ; 
    if(page === 42){
      return
    }

    setPage((actualPage+6))
  }

  const handleMinusIcon = () => {
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
      <BiMinusCircle 
        className="pages-icons"
        onClick={() => handleMinusIcon()}
      />
      }  
      <Card.Group className="weather-hourly"
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
      {page <42 &&
      <BsPlusCircle
        className="pages-icons"
        onClick={() => handlePlusIcon()}
      />
      }
    </div>
  );
}

export default React.memo(HourlyWeather);
