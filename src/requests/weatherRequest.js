import axios from "axios";



const FetchDataRequest = async (lat, lng) => {
  console.log(lat, lng);
  try{
    const response = await axios.get("https://api.openweathermap.org/data/3.0/onecall",{
      params: {
        appid: process.env.REACT_APP_WEATHERKEY,
        lat: lat,
        lon: lng,
        units: "metric",
        //lang: "fr",
      },
    })  
    //console.log(response.data)
    return response.data
  } 
  catch (error) {
    console.log(error);
    return []
  }
} 

export default FetchDataRequest; 
