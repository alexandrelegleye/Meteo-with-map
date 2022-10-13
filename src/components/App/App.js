import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainNavBar from "../MainNavBar/MainNavBar";

// ReCoil
import { useSetRecoilState } from "recoil";
import { formattedAdressState, latState, lngState } from "../../atomes/adressFoundedAtoms";

//Components
import Map from "../Map/Map";
import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";

//Style
import "./App.css";


function App() {


  const [API_KEY] = useState("74e4eaf562dc4ca59197628b419c2e9c");
  const setLatState = useSetRecoilState(latState);
  const setLonState = useSetRecoilState(lngState);
  const setFormattedAdressState = useSetRecoilState(formattedAdressState);

  const handleAdress = (AdressChoosed) => {
    const {lat, lon, formatted} = AdressChoosed.properties
    setLatState(lat);
    setLonState(lon);
    setFormattedAdressState(formatted)

  }


  return (

    <div className="App">
      <SearchBar
        API_KEY={API_KEY}
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
