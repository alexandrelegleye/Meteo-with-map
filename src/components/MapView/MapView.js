import React, { useRef, useEffect} from "react";
import maplibregl from "maplibre-gl";

import "./MapViewStyle.scss";

export default function MapView(
  {lng,
    lat,
    zoom,
    apiKey,
    style,
  }){
  const mapContainer = useRef(null);
  const map = useRef(null);
 
  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://maps.geoapify.com/v1/styles/${style}/style.json?apiKey=${apiKey}`,
      center: [lng, lat],
      zoom: zoom
    })
  },[lng,
    lat,
    zoom,
    apiKey,
    style,]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
