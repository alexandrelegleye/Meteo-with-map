import React from "react";
import "./MapNavbar.css"

export default function MapNavbar({
  onStyleChange,
  formattedAdress
}
){
  return (
    <div className="heading">
      {formattedAdress &&
      <h1>{formattedAdress}</h1>
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


