import React from 'react';
import './MapNavbar.css';

export default function MapNavbar({
  onStyleChange
  }
){
  return (
    <div className="heading">
    <h1>This is my map App</h1>
    <button type="button" onClick={(e) => onStyleChange('osm-carto')}> 
    click Me
    </button>
    </div>
  );
}


