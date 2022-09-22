import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import './Map.css';

export default function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.471843);
    const [lat, setLat] = useState(-21.332838);
    const [zoom] = useState(14);
    const [API_KEY] = useState('74e4eaf562dc4ca59197628b419c2e9c');
    const [style, setStyle]= useState('toner-grey')
  
    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: `https://maps.geoapify.com/v1/styles/${style}/style.json?apiKey=${API_KEY}`,
          center: [lng, lat],
          zoom: zoom
        });
      
      });

      return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      );
}