import useId from '../hooks/useId';
import HomePage from'../Pages/Home';
import Proporties from '../Pages/Properties';



export const navbar =[

    {
        id: useId ,
        element :  <HomePage/> ,
         title :"Home",
         path: "/home",
         private : false ,
         hidden: false
    },
    {
        id: useId,
        element : <Proporties/>,
        title :'Proporties',
        path: '/Proporties',
        private : false , 
        hidden: false,
    }
];
