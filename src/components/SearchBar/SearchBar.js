import React, { useState } from 'react'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import './SearchBarStyle.css';

const SearchBar = ({
  OnAdressInput,
  API_KEY,
  PrimaryInput
  }) => {

    //const value = '';

  function onPlaceSelect(value) {
  if (!value.properties.lat){
    return
  } 
    OnAdressInput(value)

  }

  function onSuggectionChange(value) {
    console.log(value);
  }

  function preprocessHook(value) {
    return `${value}, Munich, Germany`
  }

  function postprocessHook(feature) {
    return feature.properties.street;
  }

  function suggestionsFilter(suggestions) {
    const processedStreets = [];

    const filtered = suggestions.filter(value => {
      if (!value.properties.street || processedStreets.indexOf(value.properties.street) >= 0) {
        return false;
      } else {
        processedStreets.push(value.properties.street);
        return true;
      }
    })

    return filtered;
  }

  return <GeoapifyContext apiKey={API_KEY}>

      <GeoapifyGeocoderAutocomplete placeholder="Renseigner votre adresse"
        lang='fr'
        limit='5'
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
      />
{/* 
      <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
        value={value}
        lang='fr'
        limit='5'
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
      />

      <GeoapifyGeocoderAutocomplete
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
        preprocessHook={preprocessHook}
        postprocessHook={postprocessHook}
        suggestionsFilter={suggestionsFilter}
      /> */}
    </GeoapifyContext>
}

export default SearchBar;
