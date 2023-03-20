import useUniqueId from "../Hooks/useId";
import HomePage from " ../pages/Home";
import Proporties from " ../pages/Proporties";



export const navbar =[

    {
        id: useUniqueId,element :  <HomePage/> , title :"Home",path: "/home",private : false , hidden: false
    },
    {
        id: useUniqueId,element : <Proporties/>, title :"Proporties",path: "/Proporties",private : false , hidden: false
    }
];

