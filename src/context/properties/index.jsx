import { createContext,useReducer } from "react";
import { reducer } from "./reducer";

const ProportiesContext = createContext();



const ProportiesProvider  =({Children})=>{
    const[state, dispatch] = useReducer(reducer,[])
    return<ProportiesContext.Provider value={[state,dispatch]}>{Children}</ProportiesContext.Provider>
};

export default ProportiesProvider;