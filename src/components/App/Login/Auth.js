/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js"

//console.log(process.env.REACT_APP_SUPABASEURL);
const supabaseUrl = process.env.REACT_APP_SUPABASEURL
const supabaseKey = process.env.REACT_APP_SUPABASEKEY
const supabase = createClient(supabaseUrl, supabaseKey)

import React from "react";


const fetchdata = async ()=> {
  let { data: USER, error } = await supabase
    .from("USER")
    .select("*")
  console.log("user", USER);
  console.log("error", error);
}

const InsertUser = async ()=> {
  const { data, error } = await supabase
    .from("USER")
    .insert([
      { pseudo: "user4", password: "passwo" },
    ])
}

function Auth() {
  return (
    <>
      <button
        type="button"
        onClick={()=> fetchdata()}    
      >click log</button>

      <button
        type="button"
        onClick={()=> InsertUser()}    
      >click addUser</button>
    </>
  );
}
Auth.propTypes = {};

Auth.defaultProps = {};

export default React.memo(Auth);