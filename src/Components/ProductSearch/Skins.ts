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
  cursor: pointer;
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
  cursor: pointer;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    margin: 1em;
    width: 16em;
  }
`;

export const ProductListContainer =  styled.div`
width: 90%;
height: auto;
text-align: left;
justify-content: center;
align-items: center;
display : flex;
flex-direction: row;
box-shadow: 0.5px 0.5px 3px grey;
border-radius: 1em;
margin-top : 2em;
cursor: pointer;
`;

export const SliderContainer = styled.div`
width : 25%;
height : 15em;
text-align : center;
padding : 1em;
cursor: pointer;
`;

export const ImageContainer =  styled.img`
width : 100%;
height : 15em;
`;

export const ProductDetailsContainer =  styled.div`
width: auto;
height: auto;;
text-align: left;
justify-content: left;
align-items: left;
display : flex;
flex-direction: column;
cursor: pointer;
`;


export const ProductBaseContainer =  styled(ProductDetailsContainer)`
flex-direction: column;
cursor: pointer;
`;

export const ProductColContainer =  styled.div`
width: auto;
height: auto;
text-align: left;
justify-content: left;
align-items: center;
display : flex;
flex-direction: row;
cursor: pointer;
`;

export const ProductEndContainer =  styled(ProductColContainer)`
margin : 0 1em  0 1em;
width: 12em;
cursor: pointer;
`;

export const PriceColContainer = styled(ProductColContainer)`
width: 13em;
height: 10em;
background-color : #00bf63;
text-align: center;
justify-content: center;
align-items: center;
color : white;
padding :  0.5em;
border-radius : 15px;
margin : -3em 0 0 0;
cursor: pointer;
`;

export const CityDiv =  styled.div`
width: auto;
height: auto;
text-align: left;
justify-content: left;
align-items: flex-start;
margin : 1em 1em  0 1em;
display : flex;
flex-direction: column;
cursor: pointer;
`;

export const SeeMoreBtn =  styled.div`
background-color : black;
margin : 0.5em;
padding :  0.5em;
border-radius : 15px;
cursor: pointer;
`;

export const TittleBar =  styled.span`
width: auto;
height: auto;
font-size : 14px;
cursor: pointer;
`;

export const PriceBold = styled.b`
color : white;
font-size : 20px;
cursor: pointer;
`;

