import React from "react";
import { Segment } from "semantic-ui-react";

//Components
import MapNavbar from "../MapNavbar/MapNavbar";
import MapView from "../MapView/MapView";
import { useSetRecoilState, useRecoilValue, } from "recoil";
import { mapDataNeeded } from "../../atomes/adressFoundedSelector";
import { firstInputState, mapStyleState } from "../../atomes/adressFoundedAtoms";


//Style

function Map() {

  const {lng, lat, zoom, apiKey, style, formattedAdress} = useRecoilValue(mapDataNeeded);
  const setMapStyle = useSetRecoilState(mapStyleState);
  const firstInput = useRecoilValue(firstInputState)

  // eslint-disable-next-line no-unused-vars
  const changeMapStyle = (style) => {
    console.log(style);
    setMapStyle(style)
  };

  return (
    <Segment> 
      {firstInput && (
        <>
          <MapNavbar
            // onStyleChange= {changeMapStyle}
            formattedAdress= {formattedAdress}/>
          <MapView key={`${style} ${lng} ${lat}`}
            lng={lng}
            lat={lat}
            zoom={zoom}
            apiKey={apiKey}
            style={style}
          />
        </>
      )}
    </Segment>
  );
}

export default Map;
