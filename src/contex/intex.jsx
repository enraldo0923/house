import { createContext } from "react";
import { PropertiesProvider } from "./properties";

const Root = createContext();

 export const RootContext = ({children}) => {
return  <Root.Provider>
    <PropertiesProvider>
         {children}
    </PropertiesProvider>
</Root.Provider>}

