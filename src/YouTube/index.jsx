import React, { Component } from 'react'
import { Container,Wrapper,Catagie,Icons} from './style';
import Sidebar from './sidebar';
import Body from './body';
// import logo from '../assets/img/logo.png'

export default class YouTube extends Component {
  render() {
    return (
      <Container>
          <Wrapper>
           <Catagie>
            <Icons.Burger/>
            {/* <Icons.Logo src={logo} alt ="LogoImg" /> */}
           </Catagie>
           <Catagie>
            <Input placeholder=" search"/>
           </Catagie>
           <Catagie>3</Catagie>  
          </Wrapper>
          <Container flex>

          <Sidebar/>
          <Body/>
          </Container>
      </Container>
    )
  }
}
