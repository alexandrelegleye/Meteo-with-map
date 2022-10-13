import React from "react";
import { Segment } from "semantic-ui-react";

//Components
import MapNavbar from "../MapNavbar/MapNavbar";
import MapView from "../MapView/MapView";
import { useSetRecoilState, useRecoilValue, } from "recoil";
import { mapDataNeeded } from "../../atomes/adressFoundedSelector";
import { mapStyleState } from "../../atomes/adressFoundedAtoms";


//Style

function Map() {

  const {lng, lat, zoom, apiKey, style, formattedAdress} = useRecoilValue(mapDataNeeded);
  const setMapStyle = useSetRecoilState(mapStyleState);

  let firstInput= true;

  const changeMapStyle = (style) => {
    console.log(style);
    setMapStyle(style)
  };

  return (
    <Segment> {/* TODO Semantic UI pour le container */}
      {firstInput && (
        <>
          <MapNavbar
            onStyleChange= {changeMapStyle}
            formattedAdress= {formattedAdress}/>
          <MapView key={`${style} ${lng} ${lat}`}
            state={{lng, lat, zoom, apiKey, style}}/>
        </>
      )}
    </Segment>
  );
}

export default Map;
