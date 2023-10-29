import React from "react";
import {
  PropBangBaseContainer,
  PropertiesTittleInHome,
  ListBtn,
  CardBaseContainer,
  TypeOfProps,
  AdSellContainer,
  PropSaleContainer,
  ImgBGonDiv,
  LabelOnImgCard
} from "./Skins";
import Banner2 from "../assets/Banner2.jpg"

export default function PropSalesBang() {
  return (
    <PropBangBaseContainer>
      <PropertiesTittleInHome>
        Properties for Sales in Bangalore
      </PropertiesTittleInHome>

      <CardBaseContainer>
        <TypeOfProps> Most Popular </TypeOfProps>
        <TypeOfProps>By Budget</TypeOfProps>
        <TypeOfProps>By Property Type</TypeOfProps>
        <TypeOfProps>By BHK</TypeOfProps>
      </CardBaseContainer>

      <CardBaseContainer>
        <PropSaleContainer>
            <ImgBGonDiv src= {Banner2}/>
            <LabelOnImgCard> Residential Plot</LabelOnImgCard>
        </PropSaleContainer>
        <PropSaleContainer>
        <ImgBGonDiv src= {Banner2}/>
        <LabelOnImgCard> Residential Plot</LabelOnImgCard>
        </PropSaleContainer>
        <PropSaleContainer>
        <ImgBGonDiv src= {Banner2}/>
        <LabelOnImgCard> Residential Plot</LabelOnImgCard>
        </PropSaleContainer>
        <PropSaleContainer>
        <ImgBGonDiv src= {Banner2}/>
        <LabelOnImgCard> Residential Plot</LabelOnImgCard>
        </PropSaleContainer>
        <PropSaleContainer>
        <ImgBGonDiv src= {Banner2}/>
        <LabelOnImgCard> Residential Plot</LabelOnImgCard>
        </PropSaleContainer>
      </CardBaseContainer>
    </PropBangBaseContainer>
  );
}
