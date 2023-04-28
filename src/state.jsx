import React from "react";
import {student} from './student';


class State extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: student,
            name:  "Abbosbek",
            surname: 'Yuldoshev',
        }
    }
    render(){
       
       const plus =()=>{
               if(this.state.count < 10){
               this.setState({count  : this.state.count + 1 })
            };
        };
        const minus =()=>{
            if(this.state.count > 1){
            this.setState({count : this.state.count -1})
        };
        };
        const onChange =(event)=>{
            this.setState({surname: event.target.value})
        }
        // const onChangeName =(event)=>{
        //     console.log(event.target.value);
        //     this.setState({surname: event.target.value})
        // }
        return (
            <div>
                <h1>Name : {this.state.name}</h1>
                <h1>SurName : {this.state.surname}</h1>
                <input type= "name" onChange={onChange}  placeholder="Name"/>
                <input type= "surname" onChange={onChange}  placeholder="SurName"/>
                <h1>{this.state.count}</h1>
                <hr />
                <button onClick={plus}>+++++</button>
                
                <hr />
                <button onClick={minus}>---------</button>
                {
                this.state.data.map(({id, name ,status})=>{
                    return(
                        <h1 key={id}>{id} {name}{status}</h1>
                    )
                })
                }
            </div>
        )
    };
};
export default State;
    
