import React, { useMemo, useState } from "react";

const Memo =()=>{
    const[countOne,setCountOne]=useState(0);
    const[countTwo,setCountTwo]=useState(0);

    const IncrementOne=()=>{
       setCountOne(countOne+1) 
    }
    const IncrementTwo=()=>{
        setCountTwo(countTwo+1) 
    }
    const isEven=useMemo(()=>{
        console.warn("........");
        let i= 0;
        while(i< 2000000000) i++;
       return countOne % 2 === 0
    }
,[countOne])


    return(
        <>
          <button onClick={IncrementOne}>counterOne - {countOne}</button> 
          <span>{isEven ? "even":"odd"}</span> 
          <button onClick={IncrementTwo}>counterTwo -{countTwo}</button> 
        </>
    )

}





export default Memo;