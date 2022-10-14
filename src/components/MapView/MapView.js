import React, { useRef, useEffect} from "react";
import maplibregl from "maplibre-gl";
// import maplibre from 'maplibre-gl';
import "./MapViewStyle.css";

export default function MapView(
  {state}
){
  const mapContainer = useRef(null);
  const map = useRef(null);
  console.log("stateMapView" ,state);
 
  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://maps.geoapify.com/v1/styles/${state.style}/style.json?apiKey=${state.apiKey}`,
      center: [state.lng, state.lat],
      zoom: state.zoom
    });
  },[state]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
