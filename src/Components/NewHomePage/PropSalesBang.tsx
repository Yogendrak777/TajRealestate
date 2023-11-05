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
import Banner2 from "../assets/Banner2.jpg";
import { useNavigate } from "react-router-dom";

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
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> 3 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Flats</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Budget within 50 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
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
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard > Budget within 60 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer  onClick={() =>HandleBudgetWithIn90Lacks(87)}>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Budget within 90 Lacks</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer onClick={() =>HandleBudgetWithIn90Lacks(97)}>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard > Budget within 1 crores</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer onClick={() =>HandleBudgetWithIn90Lacks(103)}>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard > Budget within 2 crores</LabelOnImgCard>
          </PropSaleContainer>
        </CardBaseContainer>
      )}

      {PropertyType && (
        <CardBaseContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Flats </LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard>Independent Houses/Villa</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Gated community Villa </LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Stand Alone Building </LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> Farm House </LabelOnImgCard>
          </PropSaleContainer>
        </CardBaseContainer>
      )}

      {BHK && (
        <CardBaseContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> 1 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> 2 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> 3 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> 4 BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
          <PropSaleContainer>
            <ImgBGonDiv src={Banner2} />
            <LabelOnImgCard> 4+ BHK Apartments</LabelOnImgCard>
          </PropSaleContainer>
        </CardBaseContainer>
      )}
    </PropBangBaseContainer>
  );
}
