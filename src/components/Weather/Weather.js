import React, { useEffect } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import DailyWeatherCard from "../DailyWeather/DailyWeatherCard";

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
  const [weatherDataRecoil, setWeatherDataRecoil] = useRecoilState(weatherState);

  const FetchData = async (lat, lng) => {
    try{
      setWeatherDataRecoil(await FetchDataRequest(lat,lng))
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
          <CurrentWeather currentWeatherData={weatherDataRecoil.current_weather}/>
          <HourlyWeather hourlyWeatherData={weatherDataRecoil.hourly}/>
          <DailyWeatherCard dailyWeatherData={weatherDataRecoil.daily}/>          
        </>
      )} 
         
    </Segment>
  );
}

export default React.memo(Weather);
