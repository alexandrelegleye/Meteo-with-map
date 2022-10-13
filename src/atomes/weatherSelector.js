import { selector} from "recoil";
import {  firstInputState,  latState, lngState,   } from "./adressFoundedAtoms";
import { weatherState } from "./weatherAtoms";

export const weatherDataNeeded = selector ({
  key:"weatherDataNeededState",
  get: ({get}) => {
    const dataNeeded = {
      lng : get(lngState),
      lat: get(latState),
      firstInput: get(firstInputState),
      weatherData: get(weatherState)
    }
    
    return dataNeeded
  }
    
})