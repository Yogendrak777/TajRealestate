import React from 'react'
import Slider from 'react-slick'
import { SliderContainer,  ImageContainer, } from './Skins'
export default function Carousel(props:any) {
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
    <ImageContainer src={props.Img1} />
    </div>
    <div>
    <ImageContainer src={props.Img2} />
    </div>
    <div>
    <ImageContainer src={props.Img3} />
    </div>
    <div>
    <ImageContainer src={props.Img4} />
    </div>
    <div>
    <ImageContainer src={props.Img5} />
    </div>
  </Slider>
  </SliderContainer>
  )
}
