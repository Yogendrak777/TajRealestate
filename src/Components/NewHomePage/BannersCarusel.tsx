import React from 'react'
import Slider from 'react-slick'
import { SliderContainer,  ImageContainer, } from './Skins'
import Banner1 from "../assets/Banner1.jpg";
import Banner2 from "../assets/Banner2.jpg";
import Banner3 from "../assets/Banner3.jpg";
export default function BannersCarousel() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        fade : true,
        arrows: true,
        autoplaySpeed: 3000,
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
}
