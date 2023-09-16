import React, { useEffect } from "react";

const FConter = ({number})=>{
  useEffect(()=> 
  {
    console.log("functional component : when comp 1st time rndr did mounting...")
    console.log("functional component : when comp updatng didupdatehy...")
  },[number]) 
    return(
        <>
            <h1>{number}</h1>
        </>
    )
}





export default FConter;