import React from 'react';
import Home from '../components/Home';
import { Properties } from '../components/Properties';
import { Navigate, Route,Routes } from 'react-router-dom';


export const Root = () => {
  return (
   <BrauserRouter>
       <Routes>
         <Route path='/home' element={<h1>Home</h1>}></Route>
         <Route path='/properties' element={<h1>Proporties</h1>}></Route>
         <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
         <Route path='/' element={<Navigate to ={'/home'}/>}></Route>
       </Routes>
   </BrauserRouter>
  )
}
export default Root;
