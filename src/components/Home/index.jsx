import React from 'react'
import { Container,Link } from './style';

export const Home = () => {
  return <Container>
    <Link activeStyle= {{ color: 'black' }} to={'/'}>Logo</Link>
    <Link activeStyle= {{ color: 'black' }} to={'/Home'}>Home</Link>
    <Link activeStyle= {{ color: 'black' }} to={'/Templates'}>Templates</Link>
    <Link activeStyle= {{ color: 'black' }} to={'/Pages'}>Pages</Link>
    <Link activeStyle= {{ color: 'black' }} to={'/Elements'}>Elements</Link>

  </Container>
  
};
export default Home;
