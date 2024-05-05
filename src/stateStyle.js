import { css } from "styled-components";
import styled from 'styled-components';


export const Container = styled('div')`
display:flex;
background-color: coral;
`;

export const Button = styled.div`
display: flex;
cursor: pointer;
:active{
    transform: scale(0.95);
};
border-radius:8px;
 width: 200px;
 height: 40px;
 border:2px solid black;
 margin: 10px;
 align-items: center;
 justify-content:center;`;

 const getSize =(props)=>{
    switch (props.type) {
        case 'small': return '200px'
        case 'big': return '300px'
        case 'medium': return '250px'
        default: return '150px'

    }
 }


export const Box = styled.div`

width: ${getSize};
height: ${getSize};
border: 2px solid blue;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
`;

const common = css`
color:blue;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-weight: 400;
padding: 10px;
border:1px solid black;
height:fit-content;
`

export const Title = styled.h1`
${common};`


export const Des = styled.h1`
${common};
font-size:16px;`