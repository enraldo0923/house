// // Styled-Components -1 


// import React from "react";
// import { Container ,Box,Title,Title2,Title3} from "./style";



//   class State extends React.Component{

//     constructor(props){
//       super(props);
//       this.state={}
//     };
//     render(){
//       return(
//         <div>
//         <Container>Abbosbek</Container>
//         <Box size="large">Large</Box>
//         <Box size="medium">Medium </Box>
//         <Box size="small">Small</Box>
//         <Title>Abbosbek</Title>
//         <Title2>Asadbek</Title2>
//         <Title3>Azamatbek</Title3>
//         </div>
//       )
//     }
//   };
//   export default State;


// Styled-Components -2;


import React from "react";
import {Container, Button,ActiveButton,Rotate } from "./style";
import {ThemeProvider,createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
  
`



  class State extends React.Component{

    constructor(props){
      super(props);
      this.state={}
    };
    render(){
      return(
        <div><Container>

          <Button>Abbosbek</Button>
          <ActiveButton>Active Button</ActiveButton>
          <Rotate>Rotate</Rotate>
        </Container>
        </div>)}};
        export default State;