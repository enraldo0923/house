import React from 'react';
import {Container,Button,Box,Title,Des} from './stateStyle';

 
export default class State extends React.Component {
  
  render() {
    
    return (
      <Container >
      
          <Button>Click me</Button>
          <Box type='small'>Small</Box>
          <Box type='medium'>Medium</Box>
          <Box type='big'>Big</Box>
          <Title>Salom</Title>
          <Des>Salom</Des>
      </Container>
    )
  }
}
