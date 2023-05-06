
// import React from "react";
// import { Container , Box, Title,Des} from "./style";






// class State extends React.Component{

  
//   render(){
//     return(
     
//        <Container>
//         <Box type="large">Large</Box>
//         <Box type="medium">Medium</Box>
//         <Box type="small">Small</Box>
//         <Title>Hey</Title>
//         <Des>Men</Des>
//        </Container>
  
      
                    
//     )
//   }
// }
// export default State;


import React from "react";
import { Container ,Box,Title,Title2,Title3} from "./style";



  class State extends React.Component{

    constructor(props){
      super(props);
      this.state={}
    };
    render(){
      return(
        <div>
        <Container>Abbosbek</Container>
        <Box size="large">Large</Box>
        <Box size="medium">Medium </Box>
        <Box size="small">Small</Box>
        <Title>Abbosbek</Title>
        <Title2>Asadbek</Title2>
        <Title3>Azamatbek</Title3>
        </div>
      )
    }
  };
  export default State;

