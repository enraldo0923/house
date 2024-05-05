import React from 'react';
import {Container,Button,Rotate} from './stateStyle';
import { ThemeProvider,createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background: ${(props)=>props.theme.bg};
  color: ${(props)=>props.theme.cl};

}
`

 
export default class State extends React.Component {
  state = {
    light:false,
  }

  
  render() {

    const theme={
     bg :this.state.light ? 'white': 'black',
     cl :this.state.light ? 'black': 'white',
    }
    
    return (
     
        <ThemeProvider theme={theme}>
          
        <h1>Theme Provider</h1>
        <GlobalStyle/>
        <Button>Click me</Button>
        <Rotate>Rotate</Rotate>
        <Button onClick={()=>this.setState({light:!this.state.light})}>Change</Button>
        
        </ThemeProvider>
      
    )
  }
}
