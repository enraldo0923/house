

            

import { useReducer } from "react"

const reduce  = (state,{type,payload})=>{
    switch (type) {
      case "plus": return {count:state.count +1}
      case "minus": return {count:state.count -1}
      case "five": return {count:state.count + payload}
      default: return "0"}
  }


const Hook =({students})=>{
    const [data,dispatch]= useReducer(reduce,{count:0});

    return(
        <div>
            <h1>Hi UseReducer I'm coming</h1>
            <h1>Count : {data.count}</h1>
            <button onClick={()=>dispatch({type: "plus",})}>++++</button>
            <button onClick={()=>dispatch({type: "minus",})}>-----</button>
            <button onClick={()=>dispatch({type: "five",payload :5})}>5555</button>
            
        </div>
    )
};
export default Hook;