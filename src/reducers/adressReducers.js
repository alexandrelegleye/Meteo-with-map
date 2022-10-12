import { actionAdressFounded } from "../actions/adressActions";

const adressInitialState = {
  lng: 55.471843,
  lat:-21.332838,
  formattedAdress:"",
  firstInput: false,
  style:"osm-carto",
  API_KEY:"74e4eaf562dc4ca59197628b419c2e9c",
  zoom:14,

};

function AdressReducer(oldState = adressInitialState, action = {}) {
  switch (action.type) {
  case actionAdressFounded: {
    console.log("settingsReducer dans le chgt", action.payload);

    const adressSearched = {
      lng: action.payload.lng,
      lat: action.payload.lat,
      formattedAdress:action.payload.formattedAdress,
      firstInput: true,

    }
    return {
      ...oldState,...adressSearched 
    };
  }

  default:
    console.log("AdressReducer default");
    return oldState;
  }
}
export default AdressReducer;