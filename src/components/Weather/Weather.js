import React, { useEffect, useState} from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import DailyWeatherCard from "../DailyWeather/DailyWeatherCard";
import { Checkbox } from "semantic-ui-react"
//import axios from "axios";

// Recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { weatherDataNeeded } from "../../atomes/weatherSelector";
import { weatherState } from "../../atomes/weatherAtoms";
import FetchDataRequest from "../../requests/weatherRequest";


// style
import "./WeatherStyle.css";
import { Segment } from "semantic-ui-react";

function Weather() {

  const {lng, lat, firstInput} = useRecoilValue(weatherDataNeeded)
  const [toggle, setToggle] = useState(false)
  const [weatherDataRecoil, setWeatherDataRecoil] = useRecoilState(weatherState);


  const FetchData = async (lat, lng) => {
    try{      
      setWeatherDataRecoil(await FetchDataRequest(lat,lng))
    } 
    catch (error) {
      console.log(error);
    }};


  useEffect(() => {
    if(firstInput){
      FetchData(lat, lng)
    }
  },[lat, lng, firstInput])

  return (
    <Segment>
      {weatherDataRecoil && firstInput && (
        <>
          <div className="weather-header">
            <CurrentWeather currentWeatherData={weatherDataRecoil.current}/>
            <Checkbox toggle
              style={{
                marginTop:"1rem"
              }}
              onChange={() => setToggle(!toggle)}
              checked={toggle}
            />
            {!toggle? 
              <>
                <p className="toggle-Text">Prévision h/h</p>
                <HourlyWeather hourlyForecast= {weatherDataRecoil.hourly}/>
              </>
              :
              <>
                <p className="toggle-Text">Prévision de la semaine</p>
                <DailyWeatherCard dailyWeatherData={weatherDataRecoil.daily}/>
              </>
            }
           
          </div>
                   
        </>
      )} 
         
    </Segment>
  );
}

export default React.memo(Weather);
