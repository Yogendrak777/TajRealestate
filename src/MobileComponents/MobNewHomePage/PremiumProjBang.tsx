import React, { useState } from "react";
import {
  MobHSPBTittle,
  MobPIBContainer,
  MobHSPBSliderContainer,
  MobHSPBPricesCard,
  MobHSPBContainer,
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

export default function PremiumProjBang() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: true,
    autoplaySpeed: 30000,
  };

  const [OptionCard, setOptionCards] = useState<string>("");

  const handleOnclickCards = (item: string) => {
    setOptionCards(item);
  };
  return (
    <MobPIBContainer>
      <MobHSPBTittle>Premium Project in Bangalore</MobHSPBTittle>

      <MobHSPBSliderContainer>
        <Slider {...settings}>
          <div>
            <MobHSPBContainer>
              <MobHSPBPropertyCardsContainer
                onClick={() => handleOnclickCards("001")}
              >
                <MobHSPBImgBGonDiv src={Banner} />
                <MobHSPBLabelOnImgCard>
                  {" "}
                  Name : The Prestige City Hyderabad{" "}
                </MobHSPBLabelOnImgCard>
                <MobHSPBPricesCard>
                  {" "}
                  Prices : 60Lacks to 70 Lacks{" "}
                </MobHSPBPricesCard>
                <MobHSPBBHKCard> BHK : 3 BHK </MobHSPBBHKCard>
                <MobHSPBProjectSizeCard>
                  {" "}
                  Project size : 4343 units * 1.5 Acres{" "}
                </MobHSPBProjectSizeCard>
              </MobHSPBPropertyCardsContainer>
            </MobHSPBContainer>
          </div>
          <div>
            <MobHSPBContainer>
              <MobHSPBPropertyCardsContainer
                onClick={() => handleOnclickCards("001")}
              >
                <MobHSPBImgBGonDiv src={ThreeBHK} />
                <MobHSPBLabelOnImgCard>
                  {" "}
                  Name : The Prestige City Hyderabad{" "}
                </MobHSPBLabelOnImgCard>
                <MobHSPBPricesCard>
                  {" "}
                  Prices : 60Lacks to 70 Lacks{" "}
                </MobHSPBPricesCard>
                <MobHSPBBHKCard> BHK : 3 BHK </MobHSPBBHKCard>
                <MobHSPBProjectSizeCard>
                  {" "}
                  Project size : 4343 units * 1.5 Acres{" "}
                </MobHSPBProjectSizeCard>
              </MobHSPBPropertyCardsContainer>
            </MobHSPBContainer>
          </div>
          <div>
            <MobHSPBContainer>
              <MobHSPBPropertyCardsContainer
                onClick={() => handleOnclickCards("001")}
              >
                <MobHSPBImgBGonDiv src={Banner} />
                <MobHSPBLabelOnImgCard>
                  {" "}
                  Name : The Prestige City Hyderabad{" "}
                </MobHSPBLabelOnImgCard>
                <MobHSPBPricesCard>
                  {" "}
                  Prices : 60Lacks to 70 Lacks{" "}
                </MobHSPBPricesCard>
                <MobHSPBBHKCard> BHK : 3 BHK </MobHSPBBHKCard>
                <MobHSPBProjectSizeCard>
                  {" "}
                  Project size : 4343 units * 1.5 Acres{" "}
                </MobHSPBProjectSizeCard>
              </MobHSPBPropertyCardsContainer>
            </MobHSPBContainer>
          </div>
          <div>
            <MobHSPBContainer>
              <MobHSPBPropertyCardsContainer
                onClick={() => handleOnclickCards("001")}
              >
                <MobHSPBImgBGonDiv src={FourBHK} />
                <MobHSPBLabelOnImgCard>
                  {" "}
                  Name : The Prestige City Hyderabad{" "}
                </MobHSPBLabelOnImgCard>
                <MobHSPBPricesCard>
                  {" "}
                  Prices : 60Lacks to 70 Lacks{" "}
                </MobHSPBPricesCard>
                <MobHSPBBHKCard> BHK : 3 BHK </MobHSPBBHKCard>
                <MobHSPBProjectSizeCard>
                  {" "}
                  Project size : 4343 units * 1.5 Acres{" "}
                </MobHSPBProjectSizeCard>
              </MobHSPBPropertyCardsContainer>
            </MobHSPBContainer>
          </div>
        </Slider>
      </MobHSPBSliderContainer>
      <a> See all details &gt;</a>
    </MobPIBContainer>
  );
}
