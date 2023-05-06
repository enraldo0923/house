// import styled,{css} from "styled-components";




// export const Container = styled.div`

// background-color: orange;
// display: flex;
// color: #000;
// width: 100%;height: 400px;

// `;


// const getSize =(props)=>{
//     switch(props.type){
//      case 'large': return "300px";
//      case 'medium': return "200px";
//      case 'small': return "100px";
//      default :return "100px"
//     }

// }
// export const Box  = styled.div`
// display: flex;
// width: ${getSize};
// height:${getSize};
// border:2px solid blue;
// margin: 10px;
// align-items: center;
// justify-content: center;
// `;
// export const Title = styled.h1`
// color: black;
// font-weight: 400;
// padding: 10px;
// border: 4px solid black;
// height: fit-content;

// `
// export const Des = styled.h1`
// color: black;
// font-weight: 400;
// padding: 10px;
// border: 4px solid black;
// height: fit-content;

// `


import styled, {css} from "styled-components";


const OnWidth=(props)=>{
  switch (props.size) {
    case 'large': return "300px";
    case 'medium': return "200px";
    case 'small': return "100px";
    default : return "200px"
        
        
  
   
  }
}

export const Container = styled.div`
width: 200px;
height: 200px;
display: flex;
background-color: red;
color: #000;
margin: 20px;
padding: 40px;
justify-content: space-around;
font-family: 'Times New Roman', Times, serif;

`
export const Box = styled.div`
width:${(OnWidth)} ;
height: ${(OnWidth)};
display: flex;
background-color: red;
color: #000;
margin: 20px;
padding: 40px;
justify-content: space-around;
font-family: 'Times New Roman', Times, serif;
`
const Common = css`
border-radius: 2px;
border: 2px, solid,red;
background-color: aliceblue;
color: aqua;
`;
export const Title = styled.h1`
${Common};
font-size: 20px;
`
export const Title2 = styled.h1`
${Common};
font-size: 40px;
`
export const Title3 = styled.h1`
${Common};
font-size: 60px;
`;