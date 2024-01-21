import React, {memo} from "react";
import {
  ReviewContainer,
  MobHSPBTittle,
  ReviewOptionContainer,
  ReviewCardContainer,
  ReviewCard,
  CardImage,
  CardTittle,
  Row,
  ReviewDecs,
} from "./Skins";
import Banner from "../../Components/assets/Banner2.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const MobReview = memo(() => {
  const ReviewArray = [
    {
      id: 1,
      title: "Helps us to find good properties",
      Name: "Rahul Sisodia",
      Star: 4,
      Image: Banner,
      Desc: "As this was my first time buying a flat. I was vary about the formalites. But, thanks to Taj Properties I was able to get my 3BHK flat with no hassle. As they handle all the paper work.",
    },
    {
      id: 2,
      title: "Helps us to find good properties",
      Name: "Mohan Das",
      Star: 5,
      Image: Banner,
      Desc: "For a brand with no brokerage fees .Its really easy to get hands on the best deal in Bangalore. They have the widest range of properties and lot to choose from for a said Budget.",
    },
    {
      id: 3,
      title: "Helps us to find good properties",
      Name: "Deepak S",
      Star: 4,
      Image: Banner,
      Desc: "For a free site this is really the best one out there. Finding a property is easy and according to budget too.",
    },
   
    
    {
      id: 4,
      title: "Helps us to find good properties",
      Name: "Aryan Akil",
      Star: 4,
      Image: Banner,
      Desc: "I got my dream house within a week of search, Thanks to Taj Properties.",
    },
    
    {
      id: 5,
      title: "Helps us to find good properties",
      Name: "Nithin S",
      Star: 4,
      Image: Banner,
      Desc: "Taj Properties is an amazing platform for the property and app that is easy to use. Basically, it's a kind of one-stop solution for all your property needs.",
    },
    
    {
      id: 6,
      title: "Helps us to find good properties",
      Name: "Krishna",
      Star: 4,
      Image: Banner,
      Desc: "Excellent interface and presentation. Very apt for average tech savvy individuals as well. Well defined search results and not bothered by phone calls even. Keep it up.",
    },
    {
      id: 7,
      title: "Helps us to find good properties",
      Name: "Hari anan",
      Star: 4,
      Image: Banner,
      Desc: "Easy to use and understand. I am finding 2bhk property for 4 to 5 months and downloaded many property apps but I found Taj Properties and liked it so much.",
    },
    {
      id: 8,
      title: "Helps us to find good properties",
      Name: "Pradeep C",
      Star: 4,
      Image: Banner,
      Desc: "Provides very good access to the market. User friendly and helps to add multiple details of the property.",
    },
    {
      id: 9,
      title: "Helps us to find good properties",
      Name: "Satish",
      Star: 4,
      Image: Banner,
      Desc: "Great services and I could find 635 properties in my preferred location. So easy to communicate.",
    },
    {
      id: 10,
      title: "Helps us to find good properties",
      Name: "Rajat Gupta",
      Star: 4,
      Image: Banner,
      Desc: "Awesome and matchable properties and easily view property details and . Very best way to find properties by sitting conveniently on your home.",
    },
  ];
  return (
    <ReviewContainer>
      <MobHSPBTittle>Our Customer Loves us</MobHSPBTittle>

      <ReviewOptionContainer>
        <ReviewCardContainer>
          {ReviewArray.map((item: any) => (
            <ReviewCard>
              <Row>
                {/* <CardImage src={item.Image} /> */}
                <CardTittle> <b>{item.Name} </b> </CardTittle>
              </Row>
              {item.Star == 4 ? (
                <div>
                  {" "}
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <BsStarHalf />{" "}
                </div>
              ) : (
                <div>
                  {" "}
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                  <AiFillStar />{" "}
                </div>
              )}
              <CardTittle> {item.title} </CardTittle>
              <ReviewDecs> {item.Desc} </ReviewDecs>
            </ReviewCard>
          ))}
        </ReviewCardContainer>
      </ReviewOptionContainer>
    </ReviewContainer>
  );
})
export default MobReview;