import React from "react";
import { Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";

//Components
import MapNavbar from "../MapNavbar/MapNavbar";
import MapView from "../MapView/MapView";


//Style

function Map({
  onStyleChange,
  //adress,
  //lng,
  //lat,
  // style,
  //zoom,
  //API_KEY,
  //firstInput,
}) {

  const lng = useSelector((state) => state.adress.lng);
  const lat = useSelector((state) => state.adress.lat);
  const style = useSelector((state) => state.adress.style);
  const zoom = useSelector((state) => state.adress.zoom);
  const API_KEY = useSelector((state) => state.adress.API_KEY);
  const firstInput = useSelector((state) => state.adress.firstInput);
  const adress = useSelector((state) => state.adress.formattedAdress);

  const test = useSelector((state) => state.adress);

  //const long = useSelector((state) => state.adress.AdressInfo.lng);
  console.log(test);

  return (
    <Segment> {/* TODO Semantic UI pour le container */}
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
    </Segment>
  );
}

export default Map;
