import React from 'react'
import Slider from 'react-slick'
import { SliderContainer,  ImageContainer, } from './Skins'
import Banner1 from "../../Components/assets/Banner1.jpg";
import Banner2 from "../../Components/assets/Banner2.jpg";
import Banner3 from "../../Components/assets/Banner3.jpg";
import Banner4 from "../../Components/assets/Banner4.jpg";


export default function MobBanner() {

  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        fade : true,
        arrows: true,
        autoplaySpeed: 100000,
        nextArrow: <SampleNextArrow />,
        prevArrow:<SampleNextArrow />,
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
    <div>
    <ImageContainer src={Banner4} />
    </div>
  </Slider>
  </SliderContainer>
  )
}
