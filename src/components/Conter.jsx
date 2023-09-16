import React, { Component } from "react";


class Conter extends Component{
componentDidUpdate(prevprops,prevstate){
    if(prevprops.number !== this.props.number){
        console.log("componet will be updated")
    }
}


 render(){
    return(
        <>
        <h1>{this.props.number}</h1>
        </>
    )
 }   
}

export default Conter;

