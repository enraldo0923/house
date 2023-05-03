

import React from "react";

class State extends React.Component{
  constructor(props){
    super(props);
    this.state ={
     grade : 0,
     persentage: 0,

    };

  };
  render(){
   const calculate =({target :{value}})=>{
   this.setState({grade : value});
   this.setState({persentage: value / 1.93});

   }

    return(
      <div>
        <h1>Total Grade : {193}</h1>
        <h1>Grade : {this.state.grade}</h1>
        <h1>Total Grade : {this.state.persentage}%</h1>
        <input onChange={calculate} type="text" placeholder="Name" />
      </div>
    )
  }
};
export default State;