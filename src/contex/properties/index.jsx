import { createContext,useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext = createContext();

 export const PropertiesProvider = ({children}) => {
    const[state,dispatch]= useReducer(reducer,[])
return  <PropertiesContext.Provider value={[state,dispatch]}>
    {children}
</PropertiesContext.Provider>}
