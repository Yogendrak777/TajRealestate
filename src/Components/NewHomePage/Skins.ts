import styled from "styled-components";

interface TypeOfProps {
  BGColor?: string;
  Clr?: string;
}
interface TypeOfLabelOnImgCard {
  top?: '1em' | '2em' | '3em' | '4em';
}
interface TypeOfHotSaleContainer {
  Height?: '2em' | '4em' | '6em' | '8em' | '10em' | '12em' | '14em' | '16em' | '18em' | '20em';
}
interface TypeOfPropSaleContainer {
  Height?: '2em' | '4em' | '6em' | '8em' | '10em' | '12em' | '14em' | '15em' | '16em' | '18em' | '20em';
}

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
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 20em;
  cursor: pointer;
`;

export const CardBaseContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const PropBangBaseContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  cursor: pointer;
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
  cursor: pointer;
`;

export const CardContentColContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CardContainer = styled(CardContentColContainer)`
width: 100%;
justify-content: space-around;
`;

export const CardBottomColContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  cursor: pointer;

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
  cursor: pointer;

  &: hover {
    transform: scale(1.2);
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
`;

export const LabelOnCard = styled.span`
  font-size: medium;
`;

export const HR = styled.hr`
  margin: 1px 2% 0% 2%;
`;

export const SelectContainer = styled.div`
  margin: 1em;
  width: 20em;
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;

  &: hover {
    transform: scale(1.1);
  }
`;

export const TypeOfProps = styled.button<TypeOfProps>`
  width: auto;
  height: 2.5em;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #00bf63;
  border-radius: 5em;
  font-size: 18px;
  margin: 1em;
  padding-left: 1em;
  padding-right: 1em;
  cursor: pointer;
  background-color: ${(props) => (props.BGColor ? props.BGColor : "white")};
  color: ${(props) => (props.Clr ? props.Clr : "Black")};
`;

export const AdSellContainer = styled.div`
  width: 20%;
  height: auto;
  background-color : white;
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: left;
  border-radius: 0.5em;
  align-items: center;
  justify-content: center;
  margin: 2em;
  padding: 1em;
  cursor: pointer;
`;

export const PropSaleContainer = styled.div<TypeOfPropSaleContainer>`
  width: 17%;
  height: 12em;
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: left;
  border-radius: 1em;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 1em;
  cursor: pointer;
  > span{
    display:none;
  }

  &: hover {
    height: ${(props) => (props.Height && props.Height)};
    transition: height ease-in-out 0.5s;
    > span{
      display: flex;
    }
  }
`;

export const HotSaleContainer = styled.div<TypeOfHotSaleContainer>`
  width: 90%;
  height: 11em;
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: left;
  border-radius: 1em;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 1em;
  cursor: pointer;
  > span{
    display:none;
  }

  &: hover {
    height: ${(props) => (props.Height && props.Height)};
    transition: height ease-in-out 0.5s;
    > span{
      display: flex;
    }
  }
`;

export const AdDreamContainer = styled(AdSellContainer)``;

export const AdBrokerContainer = styled(AdSellContainer)``;

export const AdInvestContainer = styled(AdSellContainer)``;

export const HeaderLabel = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1em;
`;

export const Text = styled.div`
  color: black;
  font-size: 16px;
`;

export const PropertiesTittleInHome = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const ImgBGonDiv = styled.img`
  width: 100%;
  height: 12em;
  border-radius: 1em;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  // &: hover {
  //   transform: scale(1.1);
  // }
`;

export const LabelOnImgCard = styled.span<TypeOfLabelOnImgCard>`
  font-weight: 700;
  padding: 5px;
  top: ${(props) => (props.top && props.top)};
  color: black;
  
`;

export const FooterBaseContainer = styled.div`
  width: 100%;
  height: 20em;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #778899;
  cursor: pointer;
`;

export const FooterColContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: left;
  margin-left: 10em;
`;

export const CardReview = styled.div`
  width: 95%;
  height: auto;
  margin-top: 2em;
  cursor: pointer;
`;

export const ReviewBaseContainer = styled.div`
  width: auto;
  height: 15em;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 1em;
  box-shadow: 0.5px 0.5px 4px #778899;
  border-radius: 0.5em;
`;

export const ReviewColContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: left;
  margin: 1px;
`;

export const ReviewImage = styled.img`
  width: 3em;
  height: 3em;
  margin: 1em;
  border-radius: 5em;
`;

export const ReviewName = styled.span`
  width: 80%;
  height: auto;
  margin-top: 2em;
  font-size: medium;
  font-weight: 700;
`;

export const ReviewTittle = styled.span`
  width: 80%;
  height: auto;
  margin-top: 0.5em;
  font-size: medium;
  font-weight: 700;
`;

export const ReviewPara = styled.p`
  width: 80%;
  height: auto;
  margin-top: 0.8em;
  text-align: left;
  font-size: small;
  justify-content: left;
`;
