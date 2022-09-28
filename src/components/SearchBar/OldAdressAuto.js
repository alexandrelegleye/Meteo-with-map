import React, { useState, useEffect, useRef } from "react";
const GEOAPIFY_API_KEY = "74e4eaf562dc4ca59197628b419c2e9c";

export default function OldAdressAuto() {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [features, setFeatures] = useState([""]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputValue) {
      console.log(inputValue);
      const timer = setTimeout(() => {
        fetch(
          //`https://api.geoapify.com/v1/geocode/autocomplete?lang=fr&text=${inputValue}&apiKey=${GEOAPIFY_API_KEY}`
        
          )
          .then((response) => response.json())
          .then((data) => {
            setFeatures(data.features);
            // setOptions(
            //   data.features.map((feature: any) => feature.properties.formatted)
            // );
            console.log('data', data);
          });
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [features, inputValue]);

  function handleInput(e) {
    setInputValue(e.target.value);
  };
  

  return (
    <div>
      <label>Input: </label>
      <input
        ref={inputRef}
        id="typeahead"
        options={options}
        onChange={(e) => handleInput(e)}
      />
        {inputValue && <ul key={features.length}>
         {features.map(el=>
         <li key={!el.geometry? '' : `${el.geometry.coordinates[0]} ${el.geometry.coordinates[1]}`}>
          {!el.properties ? '' : el.properties.formatted}
         </li>)}
        </ul> }

    </div>
  );
}