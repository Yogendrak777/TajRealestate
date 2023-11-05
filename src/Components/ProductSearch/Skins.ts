import styled from "styled-components";

export const BaseContainer = styled.div`
  width: auto;
  margin-top: 2.5em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display : flex;
flex-direction: column;
`;

export const FilterContainer = styled.div`
  width: 98%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display : flex;
  flex-direction: row;
`;

export const SelectContainer = styled.div`
  margin: 1em;
  width: 20em;
  cursor: pointer;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    margin: 1em;
    width: 16em;
  }
`;

export const ProductListContainer =  styled.div`
width: 90%;
height: auto;
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction: row;
box-shadow: 0.5px 0.5px 3px grey;
border-radius: 1em;
margin-top : 1em;
`;

export const SliderContainer = styled.div`
width : 40%;
height : 20em;
text-align : center;
padding : 3em;
`;

export const ImageContainer =  styled.img`
width : 100%;
height : 20em;
margin : 0.5em;
`;

export const ProductDetailsContainer =  styled.div`
width: auto;
height: auto;;
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction: row;
`;

export const ProductColContainer =  styled.div`
width: auto;
height: auto;
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction: column
`;

export const CityDiv =  styled.div`
width: auto;
height: auto;
text-align: center;
justify-content: center;
align-items: center;
margin:2em;
margin-left:5em;
display : flex;
flex-direction: column
`;

export const SeeMoreBtn =  styled.div`
width: 100%;
height: 2em;
text-align: center;
justify-content: center;
align-items: center;
margin:2em;
`;

export const TittleBar =  styled.span`
width: auto;
height: auto;
text-align: center;
justify-content: center;
align-items: center;
margin:0.5em;
font-size : 14px;

`;

