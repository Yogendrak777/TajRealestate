import React, { useState, memo } from "react";
import {
  MobPIBContainer,
  MobPIBTittle,
  Row,
  TypeOfPropsBang,
  ImgBGonDiv,
  LabelOnImgCard,
  MobPIBInsideContainer,
  MobPIBInsideDiv,
} from "./Skins";
import { useNavigate } from "react-router-dom";
import {
  SeventyLakhs,
  TwoCrores,
  NintyLakhs,
  OneCr,
  Banner2,
  Independent,
  Flats,
  Frams
} from '../../Components/assets';

const MobPropSaleInBang = memo(() => {
  const [mostPopular, setMostPopular] = useState<any>(true);
  const [Budget, setBudget] = useState<any>(false);
  const [PropertyType, setPropertyType] = useState<any>(false);
  const navigate = useNavigate();

  const handleMostPopular = () => {
    setMostPopular(true);
    setBudget(false);
    setPropertyType(false);
  };

  const handleByBudget = () => {
    setMostPopular(false);
    setBudget(true);
    setPropertyType(false);
  };

  const handleByPropertyType = () => {
    setMostPopular(false);
    setBudget(false);
    setPropertyType(true);
  };

  const HandleBudget = (budget: number) => {
    navigate(`/mobPLBudget/:?Prices=${budget}`);
  };

  // const HandelBHK = (budget: number) => {
  //   navigate(`/mobPLBudget/:?BHK=${budget}`);
  // };

  const HandleApartmentType = (ApartmentType: string) => {
    navigate(`/mobPLApartments/:?ApartmentType=${ApartmentType}`);
  };

  return (
    <MobPIBContainer>
      <MobPIBTittle>Properties for Sales in Bangalore</MobPIBTittle>
      <Row>
        <TypeOfPropsBang
          BGColor={mostPopular ? "#00bf63" : ""}
          Clr={mostPopular && "white"}
          onClick={handleMostPopular}
        >
          {" "}
          Most Popular{" "}
        </TypeOfPropsBang>
        <TypeOfPropsBang
          BGColor={Budget ? "#00bf63" : ""}
          Clr={Budget && "white"}
          onClick={handleByBudget}
        >
          Budget
        </TypeOfPropsBang>
        <TypeOfPropsBang
          BGColor={PropertyType ? "#00bf63" : ""}
          Clr={PropertyType && "white"}
          onClick={handleByPropertyType}
        >
          Property Type
        </TypeOfPropsBang>
      </Row>

      {mostPopular && (
        <MobPIBInsideContainer>
          <MobPIBInsideDiv onClick={() => HandleBudget(90)}>
            <ImgBGonDiv src={NintyLakhs} />
            <LabelOnImgCard> Budget within 90 Lacks</LabelOnImgCard>
          </MobPIBInsideDiv>
          <MobPIBInsideDiv onClick={() => HandleBudget(105)}>
            <ImgBGonDiv src={TwoCrores} />
            <LabelOnImgCard> Budget within 1.6 Crores</LabelOnImgCard>
          </MobPIBInsideDiv>

          <MobPIBInsideDiv onClick={() => HandleApartmentType("Apartment")}>
            <ImgBGonDiv src={Flats} />
            <LabelOnImgCard> Apartment </LabelOnImgCard>
          </MobPIBInsideDiv>
          <MobPIBInsideDiv onClick={() => HandleApartmentType("Plot")}>
            <ImgBGonDiv src={Frams} />
            <LabelOnImgCard> Residential Plots</LabelOnImgCard>
          </MobPIBInsideDiv>
        </MobPIBInsideContainer>
      )}

      {Budget && (
        <MobPIBInsideContainer>
          <MobPIBInsideDiv onClick={() => HandleBudget(50)}>
            <ImgBGonDiv src={SeventyLakhs} />
            <LabelOnImgCard> Budget within 70 Lacks</LabelOnImgCard>
          </MobPIBInsideDiv>
          <MobPIBInsideDiv onClick={() => HandleBudget(60)}>
            <ImgBGonDiv src={NintyLakhs} />
            <LabelOnImgCard> Budget within 90 Lacks </LabelOnImgCard>
          </MobPIBInsideDiv>

          <MobPIBInsideDiv onClick={() => HandleBudget(90)}>
            <ImgBGonDiv src={OneCr} />
            <LabelOnImgCard> Budget within 1 crores</LabelOnImgCard>
          </MobPIBInsideDiv>
          <MobPIBInsideDiv onClick={() => HandleBudget(100)}>
            <ImgBGonDiv src={TwoCrores} />
            <LabelOnImgCard> Budget within 2 crores</LabelOnImgCard>
          </MobPIBInsideDiv>
        </MobPIBInsideContainer>
      )}

      {PropertyType && (
        <MobPIBInsideContainer>
          <MobPIBInsideDiv onClick={() => HandleApartmentType("Apartment")}>
            <ImgBGonDiv src={Flats} />
            <LabelOnImgCard> Apartment</LabelOnImgCard>
          </MobPIBInsideDiv>
          <MobPIBInsideDiv
            onClick={() => HandleApartmentType("Independent Houses/Villa")}
          >
            <ImgBGonDiv src={Independent} />
            <LabelOnImgCard> Independent Houses/Villa </LabelOnImgCard>
          </MobPIBInsideDiv>

          <MobPIBInsideDiv
            onClick={() => HandleApartmentType("Stand Alone Building")}
          >
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Stand Alone Building</LabelOnImgCard>
          </MobPIBInsideDiv>
          <MobPIBInsideDiv onClick={() => HandleApartmentType("Farm House")}>
            <ImgBGonDiv src={Frams} />
            <LabelOnImgCard> Farm House </LabelOnImgCard>
          </MobPIBInsideDiv>
        </MobPIBInsideContainer>
      )}
    </MobPIBContainer>
  );
});
export default MobPropSaleInBang;
