import styled from "styled-components";

export const BaseContainer = styled.div`
  width: auto;
  margin-top: 2.5em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const SliderContainer = styled.div`
  width: auto;
  height: 20em;
  text-align: center;
  padding: 0.6em;
  margin: 1em;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    height : 10em;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 20em;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    height : 10em;
  }
`;

export const CardBaseContainer = styled.div`  
    width : auto;
    height : auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    display : flex;
    flex-direction:row;

`;

export const CardOnMainHeader = styled.div`  
box-shadow: 0.5px 0.5px 4px #778899;
text-align : center;
border-radius: 0.5em;
background-color: white;
width : 60%;
height : auto;
margin-top: -6%;
z-index: 1;

@media only screen and (min-width: 300px) and (max-width: 600px) {
    margin-top: -14%;
    height : auto;
    width : 75%;
}

`;

export const CardContentColContainer = styled.div`  
    width : auto;
    height : auto;
    display : flex;
    flex-direction:row;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const CardBottomColContainer = styled.div`  
    width : auto;
    height : auto;
    display : flex;
    flex-direction:row;
    text-align: left;
    align-items: center;

    @media only screen and (min-width: 300px) and (max-width: 600px) {
        flex-direction:column;
    
    }
`;

export const CardContentContainer = styled.div`  
    width : 10%;
    height : auto;
    display : flex;
    margin : 1% 2% 1% 2%;
    flex-direction:column;

    @media only screen and (min-width: 300px) and (max-width: 600px) {
        width : 10%;
        height : auto;
        margin : 1% 2% 1% 2%;
    
    }
`;

export const CardBuyContainer = styled(CardContentContainer)`  

`;

export const CardSaleContainer = styled(CardContentContainer)`  

`;

export const CardNewProjectContainer = styled(CardContentContainer)`  

`;

export const CardLandContainer = styled(CardContentContainer)`  

`;

export const CardCommericalContainer = styled(CardContentContainer)`  

`;

export const CardLoanContainer = styled(CardContentContainer)`  

`;

export const IconOnCard = styled.img`
width : 100%;
height : 5em;

@media only screen and (min-width: 300px) and (max-width: 600px) {
    width : 100%;
    height : 2em;
}
`;

export const LabelOnCard = styled.span`
font-size: medium;


@media only screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 6px;
}
`;

export const HR = styled.hr`
margin : 1px 2% 0% 2%;

@media only screen and (min-width: 300px) and (max-width: 600px) {
    margin : 1px 2% 0% 2%;
}
`;

export const SelectContainer = styled.div`
margin : 1em;
width : 20em;

@media only screen and (min-width: 300px) and (max-width: 600px) {
    margin : 1em;
    width : 11em;
}
`;

export const SearchBtn = styled.button`
width : 10%;
height : 2.5em;
color: white;
background-color: #00BF63;
text-align: center;
justify-content: center;
align-items: center;
border : #00BF63;
box-shadow: 0.5px 0.5px 4px #778899;
border-radius: 5em;
font-size: 18px;

@media only screen and (min-width: 300px) and (max-width: 600px) {
    width : 25%;
}
`;


