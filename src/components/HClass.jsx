import React, { Component } from "react";
import FConter from "./FConter";

class HClass extends Component {
constructor(){
super()
this.state ={
    count:0
}
}
componentDidMount(){
    console.log("component mount: when component render first time")
}

increment(){
  this.setState({count:this.state.count + 1})
}


 render(){
    return(
    <>
      <FConter number={this.state.count}></FConter> {/*<=number is a props*/} 
      {/*<button onClick={this.increment.bind(this)}>click me</button>*this bind method in es5*/}
      <button onClick={()=>{this.increment()}}>click me</button>
    </>
    );
 }   
}



export default HClass;