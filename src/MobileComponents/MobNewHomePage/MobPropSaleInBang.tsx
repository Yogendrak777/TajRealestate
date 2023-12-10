import React, { useState } from "react";
import {
  MobPIBContainer,
  MobPIBTittle,
  Row,
  TypeOfPropsBang,
  PIBContainer,
  ImgBGonDiv,
  LabelOnImgCard,
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

  const handleBHK = () => {
    setMostPopular(false);
    setBudget(false);
    setPropertyType(false);
    setBHK(true);
  };

  const HandleBudgetWithIn90Lacks = (budget: any) => {
    navigate(`/BudgetSearch/:?Prices=${budget}`);
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
          By Budget
        </TypeOfPropsBang>
        <TypeOfPropsBang
          BGColor={PropertyType ? "#00bf63" : ""}
          Clr={PropertyType && "white"}
          onClick={handleByPropertyType}
        >
          By Property Type
        </TypeOfPropsBang>
        <TypeOfPropsBang
          BGColor={BHK ? "#00bf63" : ""}
          Clr={BHK && "white"}
          onClick={handleBHK}
        >
          By BHK
        </TypeOfPropsBang>
      </Row>

      {mostPopular && (
        <>
          <Row>
            <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
              <ImgBGonDiv src={Banner} />
              <LabelOnImgCard> Budget within 90 Lacks</LabelOnImgCard>
            </PIBContainer>
            <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
              <ImgBGonDiv src={ThreeBHK} />
              <LabelOnImgCard>  3 BHK Apartments</LabelOnImgCard>
            </PIBContainer>
          </Row>

          <Row>
            <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
              <ImgBGonDiv src={Flats} />
              <LabelOnImgCard> Flats</LabelOnImgCard>
            </PIBContainer>
            <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
              <ImgBGonDiv src={Frams} />
              <LabelOnImgCard> Residential Plots</LabelOnImgCard>
            </PIBContainer>
          </Row>
        </>
      )}

 {Budget && (
   <>
   <Row>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={Banner} />
       <LabelOnImgCard> Budget within 50 Lacks</LabelOnImgCard>
     </PIBContainer>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={FiftyLakhs} />
       <LabelOnImgCard>  Budget within 60 Lacks </LabelOnImgCard>
     </PIBContainer>
   </Row>

   <Row>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={NintyLakhs} />
       <LabelOnImgCard>  Budget within 90 Lacks</LabelOnImgCard>
     </PIBContainer>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={OneCr} />
       <LabelOnImgCard> Budget within 1 crores</LabelOnImgCard>
     </PIBContainer>
   </Row>
 </>
 )}

{PropertyType && (
   <>
   <Row>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={Flats} />
       <LabelOnImgCard> Flats</LabelOnImgCard>
     </PIBContainer>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={Independent} />
       <LabelOnImgCard> Independent Houses/Villa </LabelOnImgCard>
     </PIBContainer>
   </Row>

   <Row>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={Banner4} />
       <LabelOnImgCard> Stand Alone Building</LabelOnImgCard>
     </PIBContainer>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={Frams} />
       <LabelOnImgCard> Farm House </LabelOnImgCard>
     </PIBContainer>
   </Row>
 </>
 )}

{BHK && (
   <>
   <Row>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={OneBHK} />
       <LabelOnImgCard> 1 BHK Apartments</LabelOnImgCard>
     </PIBContainer>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={TwoBHK} />
       <LabelOnImgCard> 2 BHK Apartments </LabelOnImgCard>
     </PIBContainer>
   </Row>

   <Row>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={ThreeBHK} />
       <LabelOnImgCard> 3 BHK Apartments</LabelOnImgCard>
     </PIBContainer>
     <PIBContainer onClick={() => HandleBudgetWithIn90Lacks(87)}>
       <ImgBGonDiv src={FourBHK} />
       <LabelOnImgCard> 4 BHK Apartments </LabelOnImgCard>
     </PIBContainer>
   </Row>
 </>
 )}
    </MobPIBContainer>
  );
}