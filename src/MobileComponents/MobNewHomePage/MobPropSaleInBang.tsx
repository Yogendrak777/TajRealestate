import React, { useState } from "react";
import {
  MobPIBContainer,
  MobPIBTittle,
  Row,
  TypeOfPropsBang,
  ImgBGonDiv,
  LabelOnImgCard,
  MobPIBInsideContainer,
  MobPIBInsideDiv
} from "./Skins";
import { useNavigate } from "react-router-dom";
import Banner from "../../Components/assets/Banner2.jpg";
import FiftyLakhs from "../../Components/assets/50Lakhs.jpg";
import NintyLakhs from "../../Components/assets/90Lakhs.jpg";
import OneCr from "../../Components/assets/OneCr.jpg";
import TwoCr from "../../Components/assets/TwoCr.jpg";
import Banner4 from "../../Components/assets/Banner4.jpg";
import Villa from "../../Components/assets/Villa.jpg";
import Independent from "../../Components/assets/Independent.jpg";
import Flats from "../../Components/assets/Flats.jpg";
import Frams from "../../Components/assets/Farms.jpg";
import OneBHK from "../../Components/assets/1BHK.jpg";
import TwoBHK from "../../Components/assets/2BHK.jpg";
import ThreeBHK from "../../Components/assets/3BHK.jpg";
import FourBHK from "../../Components/assets/4BHK.jpg";
import FiveBHK from "../../Components/assets/5BHK.jpg";

export default function MobPropSaleInBang() {
  const [mostPopular, setMostPopular] = useState<any>(true);
  const [Budget, setBudget] = useState<any>(false);
  const [PropertyType, setPropertyType] = useState<any>(false);
  const [BHK, setBHK] = useState<any>(false);
  const navigate = useNavigate();

  const handleMostPopular = () => {
    setMostPopular(true);
    setBudget(false);
    setPropertyType(false);
    setBHK(false);
  };

  const handleByBudget = () => {
    setMostPopular(false);
    setBudget(true);
    setPropertyType(false);
    setBHK(false);
  };

  const handleByPropertyType = () => {
    setMostPopular(false);
    setBudget(false);
    setPropertyType(true);
    setBHK(false);
  };

  // const handleBHK = () => {
  //   setMostPopular(false);
  //   setBudget(false);
  //   setPropertyType(false);
  //   setBHK(true);
  // };

  const HandleBudget = (budget: number) => {
    navigate(`/mobPLBudget/:?Prices=${budget}`);
  };

  const HandelBHK = (budget: number) => {
    navigate(`/mobPLBudget/:?BHK=${budget}`);
  };

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
        {/* <TypeOfPropsBang
          BGColor={BHK ? "#00bf63" : ""}
          Clr={BHK && "white"}
          onClick={handleBHK}
        >
         BHK
        </TypeOfPropsBang> */}
      </Row>

      {mostPopular && (
        <MobPIBInsideContainer>
            <MobPIBInsideDiv onClick={() =>HandleBudget(90)}>
              <ImgBGonDiv src={Banner} />
              <LabelOnImgCard> Budget within 90 Lacks</LabelOnImgCard>
            </MobPIBInsideDiv>
            <MobPIBInsideDiv onClick={() => HandleBudget(105)}>
              <ImgBGonDiv src={ThreeBHK} />
              <LabelOnImgCard> Budget within 1.6 Crores</LabelOnImgCard>
            </MobPIBInsideDiv>
     
            <MobPIBInsideDiv onClick={() =>HandleApartmentType("Apartment")}>
              <ImgBGonDiv src={Flats} />
              <LabelOnImgCard> Apartment </LabelOnImgCard>
            </MobPIBInsideDiv>
            <MobPIBInsideDiv onClick={() =>HandleBudget(87)}>
              <ImgBGonDiv src={Frams} />
              <LabelOnImgCard> Residential Plots</LabelOnImgCard>
            </MobPIBInsideDiv>
        </MobPIBInsideContainer>
      )}

 {Budget && (
   <MobPIBInsideContainer>
     <MobPIBInsideDiv onClick={() =>HandleBudget(50)}>
       <ImgBGonDiv src={Banner} />
       <LabelOnImgCard> Budget within 50 Lacks</LabelOnImgCard>
     </MobPIBInsideDiv>
     <MobPIBInsideDiv onClick={() =>HandleBudget(60)}>
       <ImgBGonDiv src={FiftyLakhs} />
       <LabelOnImgCard>  Budget within 60 Lacks </LabelOnImgCard>
     </MobPIBInsideDiv>
   
     <MobPIBInsideDiv onClick={() =>HandleBudget(90)}>
       <ImgBGonDiv src={NintyLakhs} />
       <LabelOnImgCard>  Budget within 90 Lacks</LabelOnImgCard>
     </MobPIBInsideDiv>
     <MobPIBInsideDiv onClick={() =>HandleBudget(100)}>
       <ImgBGonDiv src={OneCr} />
       <LabelOnImgCard> Budget within 1 crores</LabelOnImgCard>
     </MobPIBInsideDiv>
 </MobPIBInsideContainer>
 )}

{PropertyType && (
   <MobPIBInsideContainer>
     <MobPIBInsideDiv onClick={() => HandleApartmentType("Apartment")}>
       <ImgBGonDiv src={Flats} />
       <LabelOnImgCard> Apartment</LabelOnImgCard>
     </MobPIBInsideDiv>
     <MobPIBInsideDiv onClick={() =>HandleApartmentType("Independent Houses/Villa")}>
       <ImgBGonDiv src={Independent} />
       <LabelOnImgCard> Independent Houses/Villa </LabelOnImgCard>
     </MobPIBInsideDiv>

     <MobPIBInsideDiv onClick={() =>HandleApartmentType("Stand Alone Building")}>
       <ImgBGonDiv src={Banner4} />
       <LabelOnImgCard> Stand Alone Building</LabelOnImgCard>
     </MobPIBInsideDiv>
     <MobPIBInsideDiv onClick={() =>HandleApartmentType("Farm House")}>
       <ImgBGonDiv src={Frams} />
       <LabelOnImgCard> Farm House </LabelOnImgCard>
     </MobPIBInsideDiv>
 </MobPIBInsideContainer>
 )}

{BHK && (
   <MobPIBInsideContainer>
     <MobPIBInsideDiv onClick={() =>HandleBudget(87)}>
       <ImgBGonDiv src={OneBHK} />
       <LabelOnImgCard> 1 BHK Apartments</LabelOnImgCard>
     </MobPIBInsideDiv>
     <MobPIBInsideDiv onClick={() =>HandleBudget(87)}>
       <ImgBGonDiv src={TwoBHK} />
       <LabelOnImgCard> 2 BHK Apartments </LabelOnImgCard>
     </MobPIBInsideDiv>

     <MobPIBInsideDiv onClick={() =>HandleBudget(87)}>
       <ImgBGonDiv src={ThreeBHK} />
       <LabelOnImgCard> 3 BHK Apartments</LabelOnImgCard>
     </MobPIBInsideDiv>
     <MobPIBInsideDiv onClick={() =>HandleBudget(87)}>
       <ImgBGonDiv src={FourBHK} />
       <LabelOnImgCard> 4 BHK Apartments </LabelOnImgCard>
     </MobPIBInsideDiv>
 </MobPIBInsideContainer>
 )}
    </MobPIBContainer>
  );
}