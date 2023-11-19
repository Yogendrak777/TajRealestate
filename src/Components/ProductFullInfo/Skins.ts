import styled from "styled-components" 

export const BaseContainer = styled.div`
  width: auto;
  margin-top: 2.5em;
  height: auto;
  text-align: left;
  justify-content: left;
  align-items: left;
  display : flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ImageBaseContainer = styled.div`
width: auto;
height: auto;
text-align: left;
justify-content: left;
align-items: left;
display : flex;
flex-direction: row;
cursor: pointer;
`;

export const OneBigImage = styled.img`
width : 40%;
height : 30em;
`;


export const ImageColContainer = styled.div`
width: auto;
height: auto;
text-align: left;
justify-content: left;
align-items: left;
display : flex;
flex-direction: column;
cursor: pointer;
`;

export const TwoSmallImage = styled.img`
width :  100%;
height : 15em;
`;

export const ThirdSmallImage = styled.img`
width :  100%;
height : 15em;
`;

export const PopUpContainer = styled.div`
position: fixed;
top: 0;
left: 0; 
right: 0;
bottom: 0;
background-color: gray;
z-index: 3;
opacity : 0.9;
`;

export const PopUpInsideContainer = styled.div`
position: absolute;
top: 4em;
left: 4em;
width: 90%;
height: 40em; 
z-index: 5;
text-align: center;
justify-content: center;
align-items: center;
background-color: white;
`;


export const SliderContainer = styled.div`
width : 100%;
height : 40em;
cursor: pointer;
`;

export const ImageContainer =  styled.img`
width : 100%;
height : 40em;
`;


