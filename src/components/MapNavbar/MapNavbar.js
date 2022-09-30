import React from "react";
import "./MapNavbar.css"

export default function MapNavbar({
  onStyleChange,
  adressSelected
}
){
  return (
    <div className="heading">
      {adressSelected &&
      <h1>{adressSelected}</h1>
      }    
      <button type="button" className='styleButton' onClick={() => onStyleChange("osm-carto")}> 
    color
      </button>
      <button type="button" className='styleButton' onClick={() => onStyleChange("toner-grey")}> 
    Black And White
      </button>
    </div>
  );
}


