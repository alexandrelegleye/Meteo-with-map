import React, { useEffect, useState} from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import DailyWeatherCard from "../DailyWeather/DailyWeatherCard";
import { Button } from "semantic-ui-react"
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
  const [toggle, setToggle] = useState(true)
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
            <Button.Group
              style={{
                margin:"1rem"
              }}
            >
              <Button
                positive={toggle}
                onClick={() => setToggle(true)}
              >
              Hourly Forecast
              </Button>
              <Button.Or />
              <Button
                positive={!toggle}
                onClick={() => setToggle(false)}
              >
                Daily Forecast
              </Button>
            </Button.Group>

            {toggle? 
              <HourlyWeather hourlyForecast= {weatherDataRecoil.hourly}/>
              :
              <DailyWeatherCard dailyWeatherData={weatherDataRecoil.daily}/>
            }
           
          </div>
                   
        </>
      )} 
         
    </Segment>
  );
}

export default React.memo(Weather);
