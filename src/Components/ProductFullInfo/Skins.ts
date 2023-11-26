import styled from "styled-components" 

interface alignProps {
  align? : string;
  MarginLeft? : string;
}

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
margin: 2em;
text-align: left;
justify-content: left;
align-items: left;
display : flex;
flex-direction: row;
cursor: pointer;
`;

export const OneBigImage = styled.img`
width : 40%;
height : 20em;
`;


export const ImageColContainer = styled.div`
width: 25%;
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
height : 10em;
`;

export const ThirdSmallImage = styled.img`
width :  100%;
height : 10em;
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

export const Column = styled.div<alignProps>`
width: auto;
height: auto;
text-align:  ${(props) => (props.align ? props.align : "center")};
justify-content: ${(props) => (props.align ? props.align : "center")};
align-items: ${(props) => (props.align ? props.align : "left")};
margin-left : ${(props) => (props.MarginLeft ? props.MarginLeft : '')};
display : flex;
flex-direction: column;
cursor: pointer;
`;

export const Row = styled.div<alignProps>`
width: auto;
height: auto;
text-align:  ${(props) => (props.align ? props.align : "center")};
justify-content:  ${(props) => (props.align ? props.align : "center")};
align-items:  ${(props) => (props.align ? props.align : "center")};
display : flex;
flex-direction: Row;
cursor: pointer;
margin :  ${(props) => (props.MarginLeft ? props.MarginLeft : '2em')};
`;

export const ImgForSign = styled.img`
  width: 2em;
  height: 2em;
  filter: invert(56%) sepia(87%) saturate(3368%) hue-rotate(119deg) brightness(98%) contrast(101%);
`;

export const TittleBar =  styled.span`
width: auto;
height: auto;
font-size : 10px;
cursor: pointer;
margin-bottom : 0.5em;
`;

export const ItemBar = styled.b`
width: auto;
height: auto;
font-size : large;
cursor: pointer;
`;

export const RightContainer = styled.div`
width: 30%;
height: 20em;
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction: row;
cursor: pointer;
`;


