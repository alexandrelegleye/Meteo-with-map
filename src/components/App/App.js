import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainNavBar from "../MainNavBar/MainNavBar";

// ReCoil
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { apiKeyState, firstInputState, formattedAdressState, latState, lngState } from "../../atomes/adressFoundedAtoms";

//Components
import Map from "../Map/Map";
import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";


//Style
import "./App.scss";
import { Header } from "semantic-ui-react";
import FetchDataRequest from "../../requests/weatherRequest";
import { weatherState } from "../../atomes/weatherAtoms";
//import Auth from "./Login/Auth";


function App() {



  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState (false)
  const ApiKey = useRecoilValue(apiKeyState);
  const setLatState = useSetRecoilState(latState);
  const setLonState = useSetRecoilState(lngState);
  const setFirstInput= useSetRecoilState(firstInputState)
  const setFormattedAdressState = useSetRecoilState(formattedAdressState);
  const setWeatherDataRecoil = useSetRecoilState(weatherState);


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

  const handleAdress = (AdressChoosed) => {
    console.log("handleadress");

    const {lat, lon, formatted} = AdressChoosed.properties
    setLatState(lat);
    setLonState(lon);
    setFirstInput(true);
    setFormattedAdressState(formatted);    
    FetchData(lat, lon)

  }


  return (

    <div className="App">
      {/* <Auth /> */}
      <Header
        as='h1'
        textAlign='center'
        color="blue"
        padding='1rem'
      >
       Weather App
      </Header>
      <SearchBar
        API_KEY={ApiKey}
        OnAdressInput={handleAdress}
      />
      <MainNavBar />
      <Routes>

        <Route path='/' element={ <Map /> } />
        
        <Route path='weather' element={ <Weather /> }
        /> 
      </Routes>  
    </div>

  );
}

export default App;
