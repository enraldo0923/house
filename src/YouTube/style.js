import styled from "styled-components";

import {ReactComponent as burger} from '../assets/icon/hambarger.svg'

export const Container = styled.div`
display: flex;
background: #181818;
color: #ffff;
height: 100vh;
flex-direction: ${({flex}) =>! flex && "column"};
padding:${({flex}) =>! flex && " 0 30px"};
`;

export const Wrapper = styled.div`
height: 56px;
display: flex;
align-items: center;
border: 2px solid red;
justify-content: space-between;
`;

export const Catagie = styled.div`
display: flex;
align-items: center;
border: 1px solid red;

`

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
width: 24px;
height: 24px;
`;
// Icons.Logo = styled.icon``

export const Input = styled.input`
height: 40px;
border: 2px solid rgba(255 ,255,255,0.21);
box-sizing: border-box;
border-radius: 2px 0px 0px 2px;
background: #000000;
`
