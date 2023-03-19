import { createContext } from "react";
import ProportiesProvider from "./properties";

const Root = createContext();



const RootContext  =({Children})=>{
    return<Root.Provider>
        <ProportiesProvider>
            {Children}
            </ProportiesProvider>
            </Root.Provider>
};

export default RootContext;