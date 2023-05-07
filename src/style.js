// // Styled-Components -1


// import styled, {css} from "styled-components";



// const OnWidth=(props)=>{
//   switch (props.size) {
//     case 'large': return "300px";
//     case 'medium': return "200px";
//     case 'small': return "100px";
//     default : return "200px"
        
        
  
   
//   }
// }

// export const Container = styled.div`
// width: 200px;
// height: 200px;
// display: flex;
// background-color: red;
// color: #000;
// margin: 20px;
// padding: 40px;
// justify-content: space-around;
// font-family: 'Times New Roman', Times, serif;

// `
// export const Box = styled.div`
// width:${(OnWidth)} ;
// height: ${(OnWidth)};
// display: flex;
// background-color: red;
// color: #000;
// margin: 20px;
// padding: 40px;
// justify-content: space-around;
// font-family: 'Times New Roman', Times, serif;
// `
// const Common = css`
// border-radius: 2px;
// border: 2px, solid,red;
// background-color: aliceblue;
// color: aqua;
// `;
// export const Title = styled.h1`
// ${Common};
// font-size: 20px;
// `
// export const Title2 = styled.h1`
// ${Common};
// font-size: 40px;
// `
// export const Title3 = styled.h1`
// ${Common};
// font-size: 60px;
// `;


// Styled-Components -2


import styled, {keyframes} from "styled-components";

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);   
}
`;
export const Rotate = styled.div`
width: 100px;
height: 100px;
border-radius:50%;
border: 2px solid coral; 
animation: ${rotate} 2s linear infinite;
align-items: center;
display: flex;
justify-content: center;

`;

export const Button = styled.div`
margin-left: 40px;
width: 200px;
height: 40px;
background: coral;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
color: #000;
cursor: pointer;
:active{
    transform: scale(0.97);
    opacity: 0.7;

}
`;
export const Container = styled.div`
width: 200px;
height: 200px;
display: flex;
background-color: red;
color: #000;
margin: 50px;
padding: 40px;

font-family: 'Times New Roman', Times, serif;
align-items: center;
display: flex;
justify-content: center;
`;
export const ActiveButton = styled(Button)`
width: 300px;
height: 60px;
margin-left: 20px;
`

