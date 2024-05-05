import { css ,keyframes} from "styled-components";
import styled from 'styled-components';
export const Container= styled.div`
margin: 20px;`


export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 250px;
margin: 20px;
height: 200px;
:active{
    transform: scale(0.93);
}
background-color: coral;
border-radius: 20%;
`;


const rotate= keyframes`
from{
    transform: rotate(0deg);
}to {
    transform : rotate(360deg);
}`;
export const Rotate = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 200px;
border-radius:50%;
border:2px solid coral;
animation:${rotate} 2s linear infinite;`