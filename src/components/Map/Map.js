import React from "react";


//Components
import MapNavbar from "../MapNavbar/MapNavbar";
import MapView from "../MapView/MapView";


//Style

function Map({
  adress,
  onStyleChange,
  lng,
  lat,
  style,
  zoom,
  API_KEY,
  firstInput,
}) {

  return (
    <div> {/* TODO Semantic UI pour le container */}
      {firstInput && (
        <>
          <MapNavbar 
            adressSelected={adress}
            onStyleChange={onStyleChange}
          />
          <MapView key={`${style} ${lng} ${lat}`}
            state={{lng, lat, zoom, API_KEY, style}}/>
        </>
      )}
    </div>
  );
}

export default Map;
