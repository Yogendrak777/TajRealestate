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
    height: 10em;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 20em;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    height: 10em;
  }
`;

export const CardBaseContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const PropBangBaseContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom : 2em;
`;

export const CardOnMainHeader = styled.div`
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: center;
  border-radius: 0.5em;
  background-color: white;
  width: 60%;
  height: auto;
  margin-top: -6%;
  z-index: 1;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    margin-top: -14%;
    height: auto;
    width: 75%;
  }
`;

export const CardContentColContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled(CardContentColContainer)`
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CardBottomColContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CardContentContainer = styled.div`
  width: 10%;
  height: auto;
  display: flex;
  margin: 1% 2% 1% 2%;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  &: hover {
    transform: scale(1.2);
  }

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    width: 10%;
    height: auto;
    margin: 1% 2% 1% 2%;
  }
`;

export const CardBuyContainer = styled(CardContentContainer)``;

export const CardSaleContainer = styled(CardContentContainer)``;

export const CardNewProjectContainer = styled(CardContentContainer)``;

export const CardLandContainer = styled(CardContentContainer)``;

export const CardCommericalContainer = styled(CardContentContainer)``;

export const CardLoanContainer = styled(CardContentContainer)``;

export const IconOnCard = styled.img`
  width: 100%;
  height: 5em;
  
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    height: 2em;
  }
`;

export const LabelOnCard = styled.span`
  font-size: medium;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 6px;
  }
`;

export const HR = styled.hr`
  margin: 1px 2% 0% 2%;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    margin: 1px 2% 0% 2%;
  }
`;

export const SelectContainer = styled.div`
  margin: 1em;
  width: 20em;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    margin: 1em;
    width: 16em;
  }
`;

export const SearchBtn = styled.button`
  width: 10%;
  height: 2.5em;
  color: white;
  background-color: #00bf63;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: #00bf63;
  box-shadow: 0.5px 0.5px 4px #778899;
  border-radius: 5em;
  font-size: 18px;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    width: 25%;
  }
`;

export const ListBtn = styled.button`
  width: 80%;
  height: 2.5em;
  color: white;
  background-color: #00bf63;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: #00bf63;
  box-shadow: 0.5px 0.5px 4px #778899;
  border-radius: 5em;
  font-size: 18px;
  margin-top: 1em;
  transition: all 0.3s ease-in-out;

  &: hover {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 300px) and (max-width: 600px) {
  }
`;

export const TypeOfProps = styled.button`
  width: auto;
  height: 2.5em;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #00bf63;
  box-shadow: 0.5px 0.5px 4px #778899;
  border-radius: 5em;
  font-size: 18px;
  margin: 1em;
  padding-left: 1em;
  padding-right: 1em;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
  }
`;

export const AdSellContainer = styled.div`
  width: 20%;
  height: 13em;
  background-image: linear-gradient(180deg, #00bf63, transparent);
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: left;
  border-radius: 1em;
  align-items: center;
  justify-content: center;
  margin: 2em;
  padding: 1em;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    width: 70%;
    height: auto;
    margin: 1em;
    padding: 1em;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 40%;
    height: 25em;
    margin: 1em;
    padding: 1em;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 30%;
    height: 15em;
    margin: 1em;
    padding: 1em;
  }
`;

export const PropSaleContainer = styled.div`
  width: 17%;
  height: 13em;
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: left;
  border-radius: 1em;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 1em;
`;

export const HotSaleContainer = styled.div`
  width: 90%;
  height: 13em;
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: left;
  border-radius: 1em;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 1em;
`;

export const AdDreamContainer = styled(AdSellContainer)``;

export const AdBrokerContainer = styled(AdSellContainer)``;

export const AdInvestContainer = styled(AdSellContainer)``;

export const HeaderLabel = styled.div`
  color: white;
  font-size: 27px;
  font-weight: 800;
  margin-bottom: 1em;
`;

export const Text = styled.div`
  color: black;
  font-size: 18px;
`;

export const PropertiesTittleInHome = styled.div`
  font-weight: 700;
  font-size: 28px;
`;

export const ImgBGonDiv = styled.img`
  width: 100%;
  height: 13em;
  border-radius: 1em;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  &: hover {
    transform: scale(1.1);
  }
`;

export const LabelOnImgCard = styled.span`
  z-index: 5;
  position: absolute;
  left: 3em;
  top: 11em;
  color: white;
  font-weight: 600;
`;

export const FooterBaseContainer = styled.div`
width: 100%;
height: 20em;
display: flex;
flex-direction: row;
text-align: center;
justify-content: center;
align-items: center;
color : white;
background-color : #778899;
`;

export const FooterColContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
text-align: left;
justify-content: center;
align-items: left;
margin-left : 10em;
`;
