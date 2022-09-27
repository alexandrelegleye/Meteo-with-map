import MapNavbar from './components/MapNavbar/MapNavbar'; 
import AdressAuto from './components/AdressAuto/AdressAuto';
import React from 'react';
import { useState } from 'react';
import Map from './components/Map/Map';
import './App.css';

function App() {

  const [lng, setLng] = useState(55.471843);
  const [lat, setLat] = useState(-21.332838);
  const [zoom] = useState(14);
  const [API_KEY] = useState('74e4eaf562dc4ca59197628b419c2e9c');
  const [style, setStyle]= useState('toner-grey')

  return (
    <div className="App">
      <AdressAuto />
      <p>styleName = {style}</p>
    <MapNavbar 
    onStyleChange={setStyle}
    />
    <Map key={`${style} ${lng} ${lat}`} state={{lng, lat, zoom, API_KEY, style}}/>
    
    </div>
  );
}

export default App;

/* <Map state={{lng, lat, zoom, API_KEY, style}}/> */
