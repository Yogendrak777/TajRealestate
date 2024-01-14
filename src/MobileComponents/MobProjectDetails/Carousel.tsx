import React, { useState } from 'react'
import Slider from 'react-slick'
import { SliderContainer,  ImageContainer, } from './Skins'
export default function Carousel(props:any) {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        arrows: true,
        autoplaySpeed: 30000,
      };

      const {Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11} = props;

  return (
    <SliderContainer>
    <Slider {...settings}>
    <div>
    <ImageContainer src={Img1} />
    </div>
    <div>
    <ImageContainer src={Img2} />
    </div>
    <div>
    <ImageContainer src={Img3} />
    </div>
    <div>
    <ImageContainer src={Img4} />
    </div>
    <div>
    <ImageContainer src={Img5} />
    </div>
    {Img6 !== "N/A" &&
    <div>
    <ImageContainer src={Img6} />
    </div>
  }
   {Img7 !== "N/A" &&
    <div>
    <ImageContainer src={Img7} />
    </div>
}
{Img8 !== "N/A" &&
    <div>
    <ImageContainer src={Img8} />
    </div>
}
{Img9 !== "N/A" &&
    <div>
    <ImageContainer src={Img9} />
    </div>
}
{Img10 !== "N/A" &&
    <div>
    <ImageContainer src={Img10} />
    </div>}
    {Img11 !== "N/A" &&
    <div>
    <ImageContainer src={Img11} />
    </div>}
  </Slider>
  </SliderContainer>
  )
}
