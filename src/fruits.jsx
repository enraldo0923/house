import React from "react";
import Card from "./card";
import "./fruitstyle.css"


class Fruit extends React.Component{
    render(){
        return(
        <div className="wrapper">

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
        )
    }
};
export default Fruit;
