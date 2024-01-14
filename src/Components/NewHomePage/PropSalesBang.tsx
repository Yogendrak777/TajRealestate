import React, { useState } from "react";
import {
  PropBangBaseContainer,
  PropertiesTittleInHome,
  CardBaseContainer,
  TypeOfProps,
  PropSaleContainer,
  ImgBGonDiv,
  LabelOnImgCard,
} from "./Skins";
import { useNavigate } from "react-router-dom";
import NintyLakhs from "../assets/90Lakhs.jpg";
import OneCr from "../assets/OneCrores.jpg";
import TwoCr from "../assets/TwoCrores.jpg";
import Banner2 from "../assets/Banner2.jpg";
import Independent from "../assets/Independent.jpeg";
import Flats from "../assets/Flats.jpeg";
import Frams from "../assets/Farms.jpg";
import SeventyLakhs from "../assets/70Lakhs.jpg";

export default function PropSalesBang() {
  const navigate = useNavigate()

  const [mostPopular, setMostPopular] = useState<any>(true);
  const [Budget, setBudget] = useState<any>(false);
  const [PropertyType, setPropertyType] = useState<any>(false);
  const [BHK, setBHK] = useState<any>(false);

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

  const HandleBudgetWithIn90Lacks = (budget:any) => {
    navigate(`/BudgetSearch/:?Prices=${budget}`)
  }

  return (
    <PropBangBaseContainer>
      <PropertiesTittleInHome>
        Properties for Sales in Bangalore
      </PropertiesTittleInHome>

      <CardBaseContainer>
        <TypeOfProps BGColor = {mostPopular ? "#00bf63"  : "" } Clr = {mostPopular && "white"  } onClick={handleMostPopular}> Most Popular </TypeOfProps>
        <TypeOfProps BGColor = {Budget ? "#00bf63"  : "" } Clr = {Budget && "white"  } onClick={handleByBudget}>By Budget</TypeOfProps>
        <TypeOfProps BGColor = {PropertyType ? "#00bf63"  : "" } Clr = {PropertyType && "white"  } onClick={handleByPropertyType}>
          By Property Type
        </TypeOfProps>
        <TypeOfProps BGColor = {BHK ? "#00bf63"  : "" } Clr = {BHK && "white"  } onClick={handleBHK}>By BHK</TypeOfProps>
      </CardBaseContainer>
      
      {mostPopular && (
        <CardBaseContainer>
          <PropSaleContainer onClick={() =>HandleBudgetWithIn90Lacks(87)}>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Budget within 90 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={SeventyLakhs} />
            <LabelOnImgCard> 3 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Flats} />
            <LabelOnImgCard> Flats</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={SeventyLakhs} />
            <LabelOnImgCard> Budget within 50 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Frams} />
            <LabelOnImgCard> Residential Plots</LabelOnImgCard>
          </PropSaleContainer>
        </CardBaseContainer>
      )}

      {Budget && (
        <CardBaseContainer>
          <PropSaleContainer onClick={() =>HandleBudgetWithIn90Lacks(47)}>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard > Budget within 50 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer  onClick={() =>HandleBudgetWithIn90Lacks(57)}>
            <ImgBGonDiv src={SeventyLakhs} />
            <LabelOnImgCard > Budget within 60 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer  onClick={() =>HandleBudgetWithIn90Lacks(87)}>
            <ImgBGonDiv src={NintyLakhs} />
            <LabelOnImgCard> Budget within 90 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer onClick={() =>HandleBudgetWithIn90Lacks(97)}>
            <ImgBGonDiv src={OneCr} />
            <LabelOnImgCard > Budget within 1 crores</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer onClick={() =>HandleBudgetWithIn90Lacks(103)}>
            <ImgBGonDiv src={TwoCr} />
            <LabelOnImgCard > Budget within 2 crores</LabelOnImgCard>
          </PropSaleContainer>
        </CardBaseContainer>
      )}

      {PropertyType && (
        <CardBaseContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Flats} />
            <LabelOnImgCard> Flats </LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Independent} />
            <LabelOnImgCard>Independent Houses/Villa</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Independent} />
            <LabelOnImgCard> Gated community Villa </LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Stand Alone Building </LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Frams} />
            <LabelOnImgCard> Farm House </LabelOnImgCard>
          </PropSaleContainer>
        </CardBaseContainer>
      )}

      {/* {BHK && (
        <CardBaseContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={OneBHK} />
            <LabelOnImgCard> 1 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={TwoBHK} />
            <LabelOnImgCard> 2 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={SeventyLakhs} />
            <LabelOnImgCard> 3 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={FourBHK} />
            <LabelOnImgCard> 4 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={FiveBHK} />
            <LabelOnImgCard> 4+ BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
        </CardBaseContainer>
      )} */}
    </PropBangBaseContainer>
  );
}
