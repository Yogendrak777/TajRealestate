import React, { memo } from "react";
import {
  MobHSPBTittle,
  MobHSPBSliderContainer,
  MobHSPBPricesCard,
  MobHSPBPropertyCardsContainer,
  MobHSPBLabelOnImgCard,
  MobHSPBProjectSizeCard,
  MobHSPBBHKCard,
  MobHSPBImgBGonDiv,
  MobHSPBMainContainer
} from "./Skins";
import { Banner, SevetyLakhs, NintyLakhs } from '../../Components/assets';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const MobHotSelling = memo(() =>  {

  const navigate = useNavigate();
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 30000,
  };

  const handleOnclickCards = (item: any) => {
    navigate(`/productSearch/:?id=${item}`);
  };

  const HSPData = [
    {
      id : "idonkkovo141",
      Name : "The Prestige City Hyderabad",
      Prices : "60Lacks to 1.5 Cr",
      ProjectSize : "4343 units, 1.5 Acres",
      BHK : "2,3,4",
      Image: Banner,
    },
    {
      id : "idonkkovo141",
      Name : "LG",
      Prices : "70Lacks to 90 Lacks",
      ProjectSize : "4343 units, 1.5 Acres",
      BHK : "2,3,4",
      Image: SevetyLakhs,
    },
    {
      id : "idonkkovo141",
      Name : "Brigade Sanctuary",
      Prices : "90Lacks to 2 Cr",
      ProjectSize : "4343 units, 1.5 Acres",
      BHK : "2,3,4",
      Image: NintyLakhs,
    },
    {
      id : "idonkkovo141",
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
      <span onClick={() => navigate("/mobProjectList")}> See all details &gt;</span>
    </MobHSPBMainContainer>
  );
})

export default MobHotSelling;
