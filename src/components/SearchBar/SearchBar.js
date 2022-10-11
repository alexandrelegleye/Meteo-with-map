import React from "react"
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from "@geoapify/react-geocoder-autocomplete"
import {Segment} from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { getAdressFounded } from "../../actions/adressActions";

import "@geoapify/geocoder-autocomplete/styles/minimal.css"
import "./SearchBarStyle.css";


// `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&format=json&limit=5&apiKey=${apiKey}`

const SearchBar = ({
  OnAdressInput,
  API_KEY,
  // PrimaryInput
}) => {

  const dispatch = useDispatch();


  /*   function  handleAdress(AdressChoosed) {
    const {lat, lon, formatted} = AdressChoosed.properties
    console.log("APP:adress", AdressChoosed);
    setLat(lat);
    setLng(lon);
    setAdress(formatted)
    setFirstInput(true)
  } */

  //const value = '';

  function onPlaceSelect(value) {
    if (!value.properties.lat){
      return
    } 
    const {lat, lon, formatted} = value.properties;
    OnAdressInput(value)
    dispatch(getAdressFounded({
      lat: lat,
      lng: lon,
      formattedAdress: formatted
    }))

  }

  function onSuggectionChange(value) {
    console.log(value);
  }

  return (
    <Segment>
      <GeoapifyContext apiKey={API_KEY}>
        <GeoapifyGeocoderAutocomplete placeholder="Renseigner votre adresse"
          type='city'
          lang='fr'
          limit='5'
          placeSelect={onPlaceSelect}
          suggestionsChange={onSuggectionChange}
        />

      </GeoapifyContext>
    </Segment>
  )
}

export default SearchBar;
