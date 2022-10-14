import React, { useEffect } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import DailyWeatherCard from "../DailyWeather/DailyWeatherCard";
import { Segment } from "semantic-ui-react";
import { useRecoilValue, useRecoilState } from "recoil";
import { weatherDataNeeded } from "../../atomes/weatherSelector";
import { weatherState } from "../../atomes/weatherAtoms";
import FetchDataRequest from "../../requests/weatherRequest";

// style
import "./WeatherStyle.css";

function Weather() {

  const {lng, lat, firstInput} = useRecoilValue(weatherDataNeeded)
  const [weatherDataRecoil, setWeatherDataRecoil] = useRecoilState(weatherState);

  const FetchData = async (lat, lng) => {
    try{
      /*       console.log("Fetch", await FetchDataRequest(lat,lng));
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation,rain,cloudcover,windspeed_10m,winddirection_10m,direct_radiation_instant&daily=precipitation_sum,weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`)
      console.log(response.data) */
      setWeatherDataRecoil(await FetchDataRequest(lat,lng))
    } 
    catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    FetchData(lat, lng)
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
