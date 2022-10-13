/* import axios from "axios";
import { useSetRecoilState } from "recoil";
import { weather } from "../atomes/weatherAtoms";

const setWeatherData = useSetRecoilState(weather)

const fetchWeatherData = async(lat, lng) => {
  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation,rain,cloudcover,windspeed_10m,winddirection_10m,direct_radiation_instant&daily=precipitation_sum,weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`)
  try{
    console.log(response.data)
    setWeatherData(response.data)
  } 
  catch (error) {
    console.log(error);
  }
}

export default fetchWeatherData */