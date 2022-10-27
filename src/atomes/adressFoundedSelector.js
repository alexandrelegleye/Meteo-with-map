import { selector} from "recoil";
import { apiKeyState, formattedAdressState, latState, lngState, mapStyleState, zoomState } from "./adressFoundedAtoms";
//import {weatherState} from "./weatherAtoms";


export const mapDataNeeded = selector ({
  key:"mapDataNeededState",
  get: ({get}) => {
    const dataNeeded = {
      lng : get(lngState),
      lat: get(latState),
      zoom: get(zoomState),
      apiKey: get(apiKeyState),
      style: get(mapStyleState),
      formattedAdress: get(formattedAdressState),
      // Weather: get(weatherState),
    }

    return dataNeeded
  }

})

