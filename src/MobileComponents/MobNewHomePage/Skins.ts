import styled from "styled-components";

interface TypeOfProps {
  BGColor?: string;
  Clr?: string;
}

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 2.5em;
  padding-bottom: 2em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const OptionContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const PropertyCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 0.1em 0.5em 0.1em 0.5em;
  border-radius: 50px;
  border: 1px solid #778899;
  margin-left: 0.5em;
`;

export const CardImage = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin: 0.5em;
`;

export const CardTittle = styled.span`
  font-size: medium;
`;

export const CardContainer = styled.div`
  overflow-x: auto;
  height: 3em;
  width: auto;
  display: flex;
  flex-direction: row;
  padding: 1em;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 10em;
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  width: auto;
  height: 10em;
  text-align: center;
  padding: 0.6em;
  margin: 0.2em;
  z-index: 0;
`;

export const SearchBaseContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: -5%;
  z-index: 1;
  cursor: pointer;
  position: relative;
`;

export const SearchCard = styled.div`
  width: 80%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0.5px 0.5px 4px #778899;
  background-color: white;
  border-radius: 0.5em;
`;

export const SearchUpperCard = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const SelectContainer = styled.div`
  margin: 0.5em;
  width: 80%;
  cursor: pointer;
`;

export const MobSearchBtn = styled.img`
  width: 2em%;
  height: 2em;
  cursor: pointer;
  filter: invert(56%) sepia(87%) saturate(3368%) hue-rotate(119deg)
    brightness(98%) contrast(101%);
`;

export const AddCardContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

export const DivisionAddCard = styled.span`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #00bf63;
`;

export const AddCard = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  justify-content: left;
  align-items: left;
  display: flex;
  flex-direction: column;
  margin: 0.2em;
  padding: 0.5em;
  background-image: white;
`;

export const AddCardHeaer = styled.header`
  font-size: small;
  font-weight: 600;
  color: black;
`;

export const AddCardPara = styled.p`
  font-size: small;
`;

export const MobAddCardImage = styled.img`
  width: 2em;
  height: 2em;
  cursor: pointer;
  filter: invert(56%) sepia(87%) saturate(3368%) hue-rotate(119deg)
    brightness(98%) contrast(101%);
`;

export const MobAddCardArrow = styled.img`
  width: 1em%;
  height: 1em;
  cursor: pointer;
  filter: invert(56%) sepia(87%) saturate(3368%) hue-rotate(119deg)
    brightness(98%) contrast(101%);
`;

export const MobPIBContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom : 5em;
`;

export const MobPIBTittle = styled.div`
font-size: medium;
font-weight: 700;
color: black;
margin : 1em;
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const TypeOfPropsBang = styled.button<TypeOfProps>`
  width: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #00bf63;
  box-shadow: 0.5px 0.5px 4px #778899;
  border-radius: 5em;
  font-size: small;
  margin: 0.3em;
  padding-left: 0 0.5em 0 0.5em;
  cursor: pointer;
  background-color: ${(props) => (props.BGColor ? props.BGColor : "")};
  color: ${(props) => (props.Clr ? props.Clr : "Black")};
`;

export const PIBContainer = styled.div`
  width: 100%;
  height: 10em;
  box-shadow: 0.5px 0.5px 4px #778899;
  text-align: left;
  border-radius: 1em;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 1em;
  cursor: pointer;
`;

export const ImgBGonDiv = styled.img`
  width: 100%;
  height: 10em;
  border-radius: 1em;
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;

export const LabelOnImgCard = styled.span`
  z-index: 5;
  position: absolute;
  left: 0.3em;
  top: 1em;
  color: white;
  font-weight: 500;
  font-size : small;
  background-color: #00bf63;
  padding: 5px;
  border-radius: 10px;
  width : fit-content;
`;