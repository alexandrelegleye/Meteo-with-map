import React, { useEffect, useState} from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import DailyWeatherCard from "../DailyWeather/DailyWeatherCard";
import { Button} from "semantic-ui-react";
import sunLoader from "./sunLoader.png"

// Recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { weatherDataNeeded } from "../../atomes/weatherSelector";
import { weatherState } from "../../atomes/weatherAtoms";
import FetchDataRequest from "../../requests/weatherRequest";


// style
import "./WeatherStyle.scss";
import { Segment } from "semantic-ui-react";

function Weather() {

  const {lng, lat, firstInput} = useRecoilValue(weatherDataNeeded)
  const [weatherDataRecoil, setWeatherDataRecoil] = useRecoilState(weatherState);

  const [toggle, setToggle] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState (false)


  const FetchData = async (lat, lng) => {
    setIsLoading(true)
    try{      
      setWeatherDataRecoil(await FetchDataRequest(lat,lng))
    } 
    catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };


  useEffect(() => {
    if(firstInput){
      FetchData(lat, lng)
    }
  },[lat, lng, firstInput])

  return (
    <Segment>

      {isLoading && 
 <div className="weather-loader">
   <img
     className="sun-loader"
     src={sunLoader}
     alt="sun while loading" />
 </div>
      }      
      
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
