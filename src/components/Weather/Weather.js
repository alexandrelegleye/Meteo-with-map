import React, { useEffect, useState } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import DailyWeatherCard from "../DailyWeather/DailyWeatherCard";
import axios from "axios";

// Recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { weatherDataNeeded } from "../../atomes/weatherSelector";
import { weatherState } from "../../atomes/weatherAtoms";
import FetchDataRequest from "../../requests/weatherRequest";

// eslint-disable-next-line no-unused-vars
const weatherTest= {
  current:{
    temperature: 27,
    wind: 1.3,
    rain: 2,
    pressure: 1024,
    codemeteo: "10d",    
  },
  hourly: {
    temperature: 27,
    wind: 1.3,
    rain: 2,
    pressure: 1024,
    codemeteo: "10n", 
  },
  daily: {
    temperature: 27,
    wind: 1.3,
    rain: 2,
    pressure: 1024,
    codemeteo: "10n", 
  }

}

// style
import "./WeatherStyle.css";
import { Segment } from "semantic-ui-react";

function Weather() {

  const {lng, lat, firstInput} = useRecoilValue(weatherDataNeeded)
  const [weatherDataRecoil, setWeatherDataRecoil] = useRecoilState(weatherState);
  const [weathercurrent, setweatherCurrent] = useState("");

  

  const FetchData = async (lat, lng) => {

    try{
      
      setWeatherDataRecoil(await FetchDataRequest(lat,lng))
      const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0c959f66cbb15f0c61a032fc3aa73ea3`)
      setweatherCurrent(weather.data)
    } 
    catch (error) {
      console.log(error);
    }
  } 

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
            <CurrentWeather currentWeatherData={weathercurrent}/* {weatherDataRecoil.current_weather} *//>
            <HourlyWeather hourlyWeatherData={weatherDataRecoil.hourly}/>
          </div>
          <DailyWeatherCard dailyWeatherData={weatherDataRecoil.daily}/>          
        </>
      )} 
         
    </Segment>
  );
}

export default React.memo(Weather);
