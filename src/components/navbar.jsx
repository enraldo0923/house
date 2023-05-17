import React from 'react'
// import Hook from './hook'

export default class Navbar extends React.Component {
  constructor(props){
    super (props)
    this.state ={
      count :0,
    }
  }
  render() {
    const plus=()=>{
      this.setState({count:this.state.count +1})
    }
    const minus=()=>{
      this.setState({count:this.state.count -1})
    }
    
    

    return (
      <div>
        <h1>This is Class Components </h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={plus}>+++++</button>
        <button onClick={minus}>-----</button>
        
        </div>
    )
  }
}
