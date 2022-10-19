import React from "react"
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from "@geoapify/react-geocoder-autocomplete"
import {Segment} from "semantic-ui-react";

import "@geoapify/geocoder-autocomplete/styles/minimal.css"
import "./SearchBarStyle.css";


const SearchBar = ({
  OnAdressInput,
  API_KEY,
  // PrimaryInput
}) => {



  function onPlaceSelect(value) {
    if (!value.properties.lat){
      return
    } 
    OnAdressInput(value) 
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
