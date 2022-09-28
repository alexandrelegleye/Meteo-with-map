import React from 'react';
import { useState } from 'react';

//Components
import MapNavbar from '../MapNavbar/MapNavbar'; 
import Map from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import Weather from '../Weather/Weather';

//Style
import './App.css';

function App() {

  const [lng, setLng] = useState(55.471843);
  const [lat, setLat] = useState(-21.332838);
  const [adress, setAdress] = useState('');
  const [zoom] = useState(14);
  const [API_KEY] = useState('74e4eaf562dc4ca59197628b419c2e9c');
  const [style, setStyle]= useState('osm-carto')

 function  handleAdress(AdressChoosed) {
  const {lat, lon, formatted} = AdressChoosed.properties
  console.log('APP:adress', AdressChoosed);
  setLat(lat);
  setLng(lon);
  setAdress(formatted)
 }


  return (
    <div className="App">
      <SearchBar
      API_KEY={API_KEY}
      OnAdressInput={handleAdress}
      />
    <MapNavbar 
    adressSelected={adress}
    onStyleChange={setStyle}
    />
    <Map key={`${style} ${lng} ${lat}`} state={{lng, lat, zoom, API_KEY, style}}/>
    <Weather  coordinates={{lng, lat}}/>
    </div>
  );
}

export default App;
