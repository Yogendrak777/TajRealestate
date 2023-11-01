import React from "react";
import {
  PropBangBaseContainer,
  PropertiesTittleInHome,
  ReviewBaseContainer,
  CardReview,
  ReviewImage,
  ReviewColContainer,
  ReviewName,
  ReviewTittle,
  ReviewPara,
} from "./Skins";
import Carousel from "better-react-carousel";
import Banner2 from "../assets/Banner2.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export default function Review() {
  return (
    <PropBangBaseContainer>
      <PropertiesTittleInHome>Our Customer Loves us</PropertiesTittleInHome>

      <CardReview>
        <Carousel cols={3} rows={1} gap={15} loop={true}>
          <Carousel.Item>
            <ReviewBaseContainer>
              <ReviewColContainer>
                <ReviewImage src={Banner2} />
                <ReviewName> Pasha </ReviewName>
                <ReviewName>
                  {" "}
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <BsStarHalf />{" "}
                </ReviewName>
              </ReviewColContainer>
              <ReviewTittle> Helps us to find good properties </ReviewTittle>
              <ReviewPara>
                "This site really helps us find good properties in the latest
                amount of time without any headache of brokerage."
              </ReviewPara>
            </ReviewBaseContainer>
          </Carousel.Item>

          <Carousel.Item>
            <ReviewBaseContainer>
              <ReviewColContainer>
                <ReviewImage src={Banner2} />
                <ReviewName> Pasha </ReviewName>
                <ReviewName>
                  {" "}
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <BsStarHalf />{" "}
                </ReviewName>
              </ReviewColContainer>
              <ReviewTittle> Helps us to find good properties </ReviewTittle>
              <ReviewPara>
                "This site really helps us find good properties in the latest
                amount of time without any headache of brokerage."
              </ReviewPara>
            </ReviewBaseContainer>
          </Carousel.Item>

          <Carousel.Item>
            <ReviewBaseContainer>
              <ReviewColContainer>
                <ReviewImage src={Banner2} />
                <ReviewName> Pasha </ReviewName>
                <ReviewName>
                  {" "}
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <BsStarHalf />{" "}
                </ReviewName>
              </ReviewColContainer>
              <ReviewTittle> Helps us to find good properties </ReviewTittle>
              <ReviewPara>
                "This site really helps us find good properties in the latest
                amount of time without any headache of brokerage."
              </ReviewPara>
            </ReviewBaseContainer>
          </Carousel.Item>

          <Carousel.Item>
            <ReviewBaseContainer>
              <ReviewColContainer>
                <ReviewImage src={Banner2} />
                <ReviewName> Pasha </ReviewName>
                <ReviewName>
                  {" "}
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <BsStarHalf />{" "}
                </ReviewName>
              </ReviewColContainer>
              <ReviewTittle> Helps us to find good properties </ReviewTittle>
              <ReviewPara>
                "This site really helps us find good properties in the latest
                amount of time without any headache of brokerage."
              </ReviewPara>
            </ReviewBaseContainer>
          </Carousel.Item>

          <Carousel.Item>
            <ReviewBaseContainer>
              <ReviewColContainer>
                <ReviewImage src={Banner2} />
                <ReviewName> Pasha </ReviewName>
                <ReviewName>
                  {" "}
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <BsStarHalf />{" "}
                </ReviewName>
              </ReviewColContainer>
              <ReviewTittle> Helps us to find good properties </ReviewTittle>
              <ReviewPara>
                "This site really helps us find good properties in the latest
                amount of time without any headache of brokerage."
              </ReviewPara>
            </ReviewBaseContainer>
          </Carousel.Item>
        </Carousel>
      </CardReview>
    </PropBangBaseContainer>
  );
}
