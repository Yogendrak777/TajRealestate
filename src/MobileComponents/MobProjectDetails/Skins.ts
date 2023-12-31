import styled from "styled-components";

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 2.5em;
  padding-bottom: 2em;
  height: auto;
  text-align: left;
  justify-content: left;
  align-items: left;
  overflow-y: auto;
  display : flex;
  flex-direction : column;
`;

export const MobImageContainer = styled.div`
  width: auto;
  height: 15em;
  z-index: 0;
`;

export const MobImage = styled.img`
  width: 100%;
  height: 15em;
`;

export const ImageTittle = styled.div`
  background-color: black;
  color: white;
  position: absolute;
  top: 5em;
  right: 4%;
  padding: 0.5em;
  font-size: 10px;
  width: auto;
`;

export const MobImageIcon = styled.img`
  width: 15%;
  height: 1em;
`;

export const SliderContainer = styled.div`
width : 85%;
height : 25em;
text-align : center;
padding : 1em;
cursor: pointer;
`;

export const ImageContainer =  styled.img`
width : 100%;
height : 20em;
`;

export const PopUpContainer = styled.div`
position: fixed;
top: 0;
left: 0; 
right: 0;
bottom: 0;
background-color: black;
z-index: 2;
opacity : 0.8;
display : flex;
flex-direction : column;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
height: auto; 
`;

export const PopUpInsideContainer = styled.div`
position: absolute;
top: 7em;
left: 0em;
display : flex;
flex-direction : column;
width: 100%;
height: 25em; 
z-index: 5;
text-align: center;
justify-content: center;
align-items: center;
`;

export const PropertyName = styled.h3`
font-size : 18px;
font-weight : 500;
margin: 0.5em 1em;
`;

export const PropertyAddress = styled.h3`
font-size : 14px;
font-weight : 400;
margin: 0.5em 1.2em;
`;

export const PropertyPrices = styled.h3`
font-size : 22px;
font-weight : 600;
margin: 0.5em 0.8em;
`;

export const PropertyOverviewTittle = styled.h6`
font-size : 16px;
font-weight : 500;
margin: 0.5em 1.2em;
`;

export const Column = styled.section`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display : flex;
  flex-direction : column;
`;

export const Row = styled.section`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  display : flex;
  flex-direction : row;
`;

export const IconImage = styled.svg`
  width :  2.5em;
  height :  2.5em;
  fill : #00BF63;
`;

// export const IconImage1 = styled.section`
//   width :  2.5em;
//   height :  2.5em;
//   color :  #00BF63;
// `;