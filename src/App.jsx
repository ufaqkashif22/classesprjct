import React, { Component } from "react";
import HClass from "./components/HClass";
import Conter from "./components/Conter";
import FConter from "./components/FConter";
import Memo from "./UseMemo/Memo";
import Lists from "./fetch/Lists";
import UsrObj from "./components/userObi/UsrObj";


class App extends Component{


   componentDidMount(){
    console.log("component did mount:when component render first time")
   } 
    render(){
       return(
        <>
          <HClass/> 
          <Conter/>
          <FConter/>
          <Memo/>
          <Lists/>
          <UsrObj/>
        </>
       ) 
    }
}

export default App;

