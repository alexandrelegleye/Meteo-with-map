import React from "react";
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
import "./App.css";


function App() {


  const ApiKey = useRecoilValue(apiKeyState);
  const setLatState = useSetRecoilState(latState);
  const setLonState = useSetRecoilState(lngState);
  const setFirstInput= useSetRecoilState(firstInputState)
  const setFormattedAdressState = useSetRecoilState(formattedAdressState);

  const handleAdress = (AdressChoosed) => {
    console.log("handleadress");

    const {lat, lon, formatted} = AdressChoosed.properties
    setLatState(lat);
    setLonState(lon);
    setFirstInput(true);
    setFormattedAdressState(formatted);    
  }


  return (

    <div className="App">
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
