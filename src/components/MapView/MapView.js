import React from "react"
import { GiWindsock } from "react-icons/gi";
import { MapContainer, TileLayer, Marker, Popup  } from "react-leaflet";
import WeatherCode from "../WeatherCode.js/WeatherCode";
import  "./MapViewStyle.scss";


export default function MapView(
  {lng,
    lat,
    zoom,
    currentWeather,
    // apiKey,
    //style,
  }){

  console.log(currentWeather);

  if(!currentWeather){
    return (
      <div>Loading</div>
  
    )
  }

  return (
    <div className="test">
      <MapContainer center={[lat, lng]} zoom={zoom} >  
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <WeatherCode              
              weatherCode={currentWeather.weather[0].icon}
              temp={Math.round(currentWeather.temp)}
            />
            {currentWeather.weather[0].description}
            <div className="weather-map-wind">
              <GiWindsock />
              {currentWeather.wind_speed} m/s
            </div>
        
          </Popup>
        </Marker>
      </MapContainer>
    </div>

  )
}
