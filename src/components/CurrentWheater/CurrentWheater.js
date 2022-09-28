import React, { useRef, useEffect, useState } from 'react';
import arrowWind from '../../wind-arrow.png'
import { AiOutlineArrowUp,  } from 'react-icons/ai';
import './CurrentWheaterStyle.css';

export default function CurrentWheater({
  currentWheaterData
}) {


  function  windDiv({data}){

    console.log(data);
 return (
    <>
        <p>Test </p>
    </>
     /*  <p>direction {currentWheaterData.winddirection} </p>
       <span style={{rotate: currentWheaterData.winddirection + 'deg'}}>
       {AiOutlineArrowUp}
        </span>
     </>   
     */
)}

 
    useEffect(() => {
      console.log('currentWheaterData', currentWheaterData);      

      },[currentWheaterData]);

      return (
        <div className="wheater-current">
            <h2>Méteo Actuelle: </h2>
            <p>Température de {currentWheaterData.temperature}</p>
            <p> Vent de:  {currentWheaterData.windspeed}km/h,    Direction :
              <img class="wind-arrow" style={{rotate:`${currentWheaterData.winddirection}deg`}}
                src={arrowWind}
                alt="Arrow Wind" />
            </p>
        </div>
      );
}
