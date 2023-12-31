import React, { useState } from "react";
import {
  MobHSPBTittle,
  MobHSPBMainContainer,
  MobHSPBSliderContainer,
  MobHSPBPricesCard,
  MobHSPBPropertyCardsContainer,
  MobHSPBLabelOnImgCard,
  MobHSPBProjectSizeCard,
  MobHSPBBHKCard,
  MobHSPBImgBGonDiv,
} from "./Skins";
import Banner from "../../Components/assets/Banner2.jpg";
import ThreeBHK from "../../Components/assets/3BHK.jpg";
import FourBHK from "../../Components/assets/4BHK.jpg";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

export default function PremiumProjBang() {

  const navigate = useNavigate();
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 50000,
  };

  const [OptionCard, setOptionCards] = useState<string>("");


  const handleOnclickCards = (item: any) => {
    navigate(`/productSearch/:?City=${item}`);
  };

  const HSPData = [
    {
      id : 100,
      Name : "The Prestige City Hyderabad",
      Prices : "60Lacks to 1.5 Cr",
      ProjectSize : "4343 units, 1.5 Acres",
      BHK : "2,3,4",
      Image: Banner,
    },
    {
      id : 101,
      Name : "LG",
      Prices : "70Lacks to 90 Lacks",
      ProjectSize : "4343 units, 1.5 Acres",
      BHK : "2,3,4",
      Image: ThreeBHK,
    },
    {
      id : 102,
      Name : "Brigade Sanctuary",
      Prices : "90Lacks to 2 Cr",
      ProjectSize : "4343 units, 1.5 Acres",
      BHK : "2,3,4",
      Image: FourBHK,
    },
    {
      id : 103,
      Name : "Shobha",
      Prices : "50Lacks to 90 Lacks",
      ProjectSize : "4343 units, 1.5 Acres",
      BHK : "2,3,4",
      Image: Banner,
    },
  ]
  return (
    <MobHSPBMainContainer>
      <MobHSPBTittle>Hot Selling Project in Bangalore</MobHSPBTittle>
      <MobHSPBSliderContainer>
        <Slider {...settings}>
            {HSPData.map((item : any)=>(
              <MobHSPBPropertyCardsContainer
                onClick={() => handleOnclickCards(item.id)}
              >
                <MobHSPBImgBGonDiv src={item.Image} />
                <MobHSPBLabelOnImgCard>
                  {" "}
                  Name : {item.Name}
                </MobHSPBLabelOnImgCard>
                <MobHSPBPricesCard>
                  {" "}
                  Prices : {item.Prices}
                </MobHSPBPricesCard>
                <MobHSPBBHKCard> BHK :  {item.BHK} </MobHSPBBHKCard>
                <MobHSPBProjectSizeCard>
                  {" "}
                  Project size :  {item.ProjectSize}
                </MobHSPBProjectSizeCard>
              </MobHSPBPropertyCardsContainer>
            ))}
        </Slider>
      </MobHSPBSliderContainer>
      <a> See all details &gt;</a>
    </MobHSPBMainContainer>
  );
}