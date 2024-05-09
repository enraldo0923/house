
import React, { Component } from 'react';


const list =[
{id:1 ,title: "hsflgjhsgj"},
{id:2 ,title: "ljfh;ajf;a"},
{id:3 ,title: "fg;ah"},
{id:4 ,title: "akjhaejth"},
];

export default class Render extends Component {
  constructor(props)
  {super(props);
  this.state ={
    active:false,
    list:list
  }}
  render() {

    const onDelete =(id)=>{
    let res =  this.state.list.filter((value)=>value.id !== id)
    this.setState({list:res })
    }
    return (
      <div>
        <h1>List</h1>
        {this.state.list.map((value)=>(
          <div key={value.id}>
            <h1>{value.id}{value.title}</h1>
            <button onClick={()=>onDelete(value.id)}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
}





 
