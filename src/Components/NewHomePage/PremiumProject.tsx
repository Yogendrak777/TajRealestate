import React from "react";
import {
  PropBangBaseContainer,
  PropertiesTittleInHome,
  CardBaseContainer,
  HotSaleContainer,
  ImgBGonDiv,
  LabelOnImgCard,
} from "./Skins";
import Carousel from "better-react-carousel";
import Banner2 from "../assets/Banner2.jpg";

export default function PremiumProject() {
  return (
    <PropBangBaseContainer>
      <PropertiesTittleInHome>
      Premium Project in Bangalore
      </PropertiesTittleInHome>

      <CardBaseContainer>
        <Carousel cols={4} rows={1} gap={15} loop={true}>
          <Carousel.Item>
            <HotSaleContainer>
              <ImgBGonDiv src={Banner2} />
              <LabelOnImgCard> Residential Plot</LabelOnImgCard>
            </HotSaleContainer>
          </Carousel.Item>  
        </Carousel>
      </CardBaseContainer>
      <a> See all details &gt;</a>
    </PropBangBaseContainer>
  );
}

