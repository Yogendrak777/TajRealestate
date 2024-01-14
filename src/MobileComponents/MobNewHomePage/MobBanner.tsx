import React , { memo } from 'react'
import Slider from 'react-slick'
import { SliderContainer,  ImageContainer, } from './Skins'
import { Banner1, Banner2, Banner3 } from '../../Components/assets';

const MobBanner = memo(() => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        fade : false,
        arrows: false,
        autoplaySpeed: 100000,
      };
  return (
    <SliderContainer>
    <Slider {...settings}>
    <div>
    <ImageContainer src={Banner1} />
    </div>
    <div>
    <ImageContainer src={Banner2} />
    </div>
    <div>
    <ImageContainer src={Banner3} />
    </div>
  </Slider>
  </SliderContainer>
  )
})
export default MobBanner;
