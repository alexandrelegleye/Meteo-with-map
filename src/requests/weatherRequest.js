import axios from "axios";

// todo PB de hook
const FetchDataRequest = async (lat, lng) => {
  console.log(lat, lng);

  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation,rain,cloudcover,windspeed_10m,winddirection_10m,direct_radiation_instant&daily=precipitation_sum,weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`)
  try{
    console.log(response.data)
    // setWeatherData(response.data)
    return response.data
  } 
  catch (error) {
    console.log(error);
  }
} 

export default FetchDataRequest; 