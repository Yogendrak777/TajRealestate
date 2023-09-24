import React from 'react'
import Slider from 'react-slick'
import { SliderContainer,  ImageContainer, } from './Skins'
import BGImage1 from "../assets/BGImage1.png";
import BGImage from "../assets/BGImage.webp";
import CompanyLogo from "../assets/CompanyLogo.jpeg";
export default function Carousel() {
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
    <ImageContainer src={BGImage1} />
    </div>
    <div>
    <ImageContainer src={BGImage} />
    </div>
    <div>
    <ImageContainer src={CompanyLogo} />
    </div>
    <div>
    <ImageContainer src={BGImage1} />
    </div>
    <div>
    <ImageContainer src={BGImage} />
    </div>
    <div>
    <ImageContainer src={CompanyLogo} />
    </div>
  </Slider>
  </SliderContainer>
  )
}
