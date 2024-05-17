import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
height: 55px;
background: black;
color: #ffff;
font-weight:600;
font-size: 24px;
align-items: center;
display: flex;
justify-content: space-evenly;
`

export const Link = styled(NavLink)`
color: white;
font-weight: 600;
font-style: 24px;
text-decoration: none;`