import { selector} from "recoil";
import { apiKeyState, firstInputState, formattedAdressState, latState, lngState, mapStyleState, zoomState } from "./adressFoundedAtoms";

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
    }

    return dataNeeded
  }

})


export const wheaterDataNeeded = selector ({
  key:"wheaterDataNeededState",
  get: ({get}) => {
    const dataNeeded = {
      lng : get(lngState),
      lat: get(latState),
      firstInput: get(firstInputState),
    }
  
    return dataNeeded
  }
  
})