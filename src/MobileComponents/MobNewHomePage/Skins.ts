import styled from "styled-components";

interface TypeOfProps {
  BGColor?: string;
  Clr?: string;
}

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 3em;
  padding-bottom: 2em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  font-family: sans-serif, Helvetica, Arial,;
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
  border-radius: 0.5em;
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
  height: 2.5em;
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
  margin-top: -9%;
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
  text-align: left;
  justify-content: left;
  align-items: left;
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

export const DivisionAddCard = styled.section`
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
`;

export const MobAddCardArrow = styled.img`
  width: 1em%;
  height: 1em;
  cursor: pointer;
`;

export const MobPIBContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const MobHSPBMainContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const MobPIBTittle = styled.div`
  font-size: medium;
  font-weight: 700;
  color: black;
  margin: 1em;
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
  border: 1px solid #00bf63;
  border-radius: 0.5em;
  font-size: small;
  margin: 0.3em;
  padding: 0.5em 0.7em;
  cursor: pointer;
  background-color: ${(props) => (props.BGColor ? props.BGColor : "white")};
  color: ${(props) => (props.Clr ? props.Clr : "Black")};
`;

export const ImgBGonDiv = styled.img`
  width: 100%;
  height: 10em;
  border-radius: 0.5em;
  z-index: 1;
`;

export const LabelOnImgCard = styled.span`
  z-index: 5;
  position: absolute;
  left: 0.5em;
  top: 1em;
  color: white;
  font-weight: 500;
  font-size: 12px;
  background-color: #00bf63;
  padding: 4px;
  border-radius: 0.5em;
  width: fit-content;
`;

export const MobHSPBTittle = styled.main`
  font-size: medium;
  font-weight: 700;
  color: black;
  margin: 1em;
`;

export const MobHSPBContainer = styled.div`
  overflow-x: auto;
  height: 16em;
  width: auto;
  display: flex;
  flex-direction: row;
`;

export const MobHSPBPropertyCardsContainer = styled.div`
  width: 70em;
  height: 15em;
  text-align: left;
  border-radius: 0.8em;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MobHSPBLabelOnImgCard = styled.span`
  z-index: 5;
  position: absolute;
  left: 0.3em;
  top: 1em;
  color: white;
  font-weight: 500;
  font-size: small;
  background-color: #00bf63;
  padding: 5px;
  border-radius: 0.5em;
  width: fit-content;
`;

export const MobHSPBPricesCard = styled(MobHSPBLabelOnImgCard)`
  left: 0.3em;
  top: 3.2em;
`;
export const MobHSPBBHKCard = styled(MobHSPBLabelOnImgCard)`
  left: 0.3em;
  top: 5em;
`;
export const MobHSPBProjectSizeCard = styled(MobHSPBLabelOnImgCard)`
  left: 0.3em;
  top: 7em;
`;

export const MobHSPBImgBGonDiv = styled.img`
  width: 100%;
  height: 15em;
  border-radius: 0.8em;
  z-index: 1;
`;

export const MobHSPBSliderContainer = styled.div`
  width: auto;
  height: 15em;
  text-align: center;
  padding: 0 1em;
  margin: 0.2em;
  z-index: 0;
  margin-bottom: 1em;
`;

export const ReviewContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5em;
`;

export const ReviewCardContainer = styled.div`
  overflow-x: auto;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  padding: 0 1em;
`;

export const ReviewCard = styled.section`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid #778899;
  margin-left: 0.5em;
`;
export const ReviewOptionContainer = styled.div`
  width: 95%;
  overflow-x: auto;
  height: fit-content;
  text-align: left;
  justify-content: left;
  align-items: left;
  display: flex;
  flex-direction: column;
`;

export const ReviewDecs = styled.span`
  font-size: small;
  width: 25em;
  justify-content: justify;
`;

export const MobPIBInsideContainer = styled.div`
width: 100%;
height: auto;
text-align: center;
justify-content: space-evenly;
align-items: center;
display: flex;
flex-wrap: wrap;
background-color: white;
`;

export const MobPIBInsideDiv = styled.div`
width: 40%;
height: 10em;
display: flex;
box-shadow: 0.5px 0.5px 4px #778899;
background-color: white;
border-radius: 0.5em;
margin : 3%;
position: relative;
text-align: left;
`;

export const LoaderInsideContainer = styled.div`
display : flex;
flex-direction : column;
width: 100%;
height: 80vh; 
z-index: 5;
text-align: center;
justify-content: center;
align-items: center;
`;

export const VideoContainer = styled.img`
width : 50%;
height : auto;
`