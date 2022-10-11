import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainNavBar from "../MainNavBar/MainNavBar";

// Redux
import { Provider } from "react-redux";
import store from "../../store/store";

//Components
import Map from "../Map/Map";
import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";

//Style
import "./App.css";

function App() {

  const [lng, setLng] = useState(55.471843);
  const [lat, setLat] = useState(-21.332838);
  const [adress, setAdress] = useState("");
  const [zoom] = useState(14);
  const [API_KEY] = useState("74e4eaf562dc4ca59197628b419c2e9c");
  const [style, setStyle]= useState("osm-carto");
  const [firstInput, setFirstInput] = useState(false)

  function  handleAdress(AdressChoosed) {
    const {lat, lon, formatted} = AdressChoosed.properties
    console.log("APP:adress", AdressChoosed);
    setLat(lat);
    setLng(lon);
    setAdress(formatted)
    setFirstInput(true)
  }


  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar
          API_KEY={API_KEY}
          OnAdressInput={handleAdress}
        />
        <MainNavBar />
        <Routes>

          <Route path='/' element={(
            <Map 
              adress={adress}
              onStyleChange={setStyle}
              lng={lng}
              lat={lat}
              style={style}
              zoom={zoom}
              API_KEY={API_KEY}
              firstInput={firstInput}
            />
          )} />
        
          <Route path='weather' element={(
            <Weather
              lng={lng}
              lat={lat}
              firstInput={firstInput}
            />
          )}
          /> 
        </Routes>  
      </div>
    </Provider>
  );
}

export default App;
