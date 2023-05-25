'use client'
import styled,{keyframes} from "styled-components"


const gradientAnimation = keyframes`
    0% {
          background-position: 0% 50%;
      }
    50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
  

`;
export const GradientBackgroundCo = styled.div`
    background: linear-gradient(to right,#000046,#1cb5e0);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 4s ease infinite;
    height: 100vh;
    width: 100vw;
   
    
  
  
`;




