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
import { Banner, SevetyLakhs, NintyLakhs } from '../../Components/assets';


export default function HotSelling() {
  const HSPData = [
    {
      id : '1',
      uniqueId : "idonkkovo141",
      Name : "The Prestige City Hyderabad",
      Prices : "60Lacks to 1.5 Cr",
      Image: Banner,
    },
    {
      id : '2',
      uniqueId : "idonkkovo141",
      Name : "LG",
      Prices : "70Lacks to 90 Lacks",
      Image: SevetyLakhs,
    },
    {
      id : '3',
      uniqueId : "idonkkovo141",
      Name : "Brigade Sanctuary",
      Prices : "90Lacks to 2 Cr",
      Image: NintyLakhs,
    },
    {
      id : '4',
      uniqueId : "idonkkovo141",
      Name : "Shobha",
      Prices : "50Lacks to 90 Lacks",
      Image: Banner,
    },
    {
      id : '5',
      uniqueId : "idonkkovo141",
      Name : "LG",
      Prices : "70Lacks to 90 Lacks",
      Image: SevetyLakhs,
    },
    {
      id : '6',
      uniqueId : "idonkkovo141",
      Name : "Brigade Sanctuary",
      Prices : "90Lacks to 2 Cr",
      Image: NintyLakhs,
    },
    {
      id : '7',
      uniqueId : "idonkkovo141",
      Name : "Shobha",
      Prices : "50Lacks to 90 Lacks",
      Image: Banner,
    },
  ]
  return (
    <PropBangBaseContainer>
      <PropertiesTittleInHome>
        Hot Selling Project in Bangalore
      </PropertiesTittleInHome>
      <CardBaseContainer>

      <Carousel cols={4} rows={1} gap={15} loop={true}>
      {HSPData.map((item:any) => (
          <Carousel.Item>
            <HotSaleContainer  Height='16em' >
              <ImgBGonDiv src={item.Image} />
              <LabelOnImgCard > Name : {item.Name}</LabelOnImgCard>
              <LabelOnImgCard >  Prices : {item.Prices}</LabelOnImgCard>
            </HotSaleContainer>
          </Carousel.Item>  
      ))}
        </Carousel>
      </CardBaseContainer>
      <br/>
      <a> See all details &gt;</a>
    </PropBangBaseContainer>
  );
}
