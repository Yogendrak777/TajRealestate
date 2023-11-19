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

  const ReviewArray = [
    {
      'id' : 1,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Rahul Sisodia',
      "Star" : 4,
      "Desc" : 'As this was my first time buying a flat. I was vary about the formalites. But, thanks to Taj Properties I was able to get my 3BHK flat with no hassle. As they handle all the paper work.',
    },
    {
      'id' : 2,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Mohan Das',
      "Star" : 5,
      "Desc" : 'For a brand with no brokerage fees .Its really easy to get hands on the best deal in Bangalore. They have the widest range of properties and lot to choose from for a said Budget.'
    },
    {
      'id' : 3,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Ravi Shankar',
      "Star" : 5,
      "Desc" : 'I have been trying to buy a plot in Bangalore. But, the real estate market as been flooded by brokers and makes it a hassle. Then, I found this website which handles all the paperwork without any charges.',
    },
    {
      'id' : 4,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Ajay singh',
      "Star" : 5,
      "Desc" : 'To buy land is an art of its own kind and its image has been tainted by the current market . Its nice to know that there is someone out there making things work like they are meant to be.',
    },
    {
      'id' : 5,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Deepak S',
      "Star" : 4,
      "Desc" : 'For a free site this is really the best one out there. Finding a property is easy and according to budget too.',
    },
    {
      'id' : 6,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Ananya G',
      "Star" : 5,
      "Desc" : 'I was looking for a flat to move in close to my office quarters in Bangalore. It was very difficult to find one as it’s a dense city . After trying all the websites,to no avail. I came across Taj Properties and got a flat relatively close to my office and its near a metro station too!.',
    },
    {
      'id' : 7,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Ananya G',
      "Star" : 5,
      "Desc" : 'I was looking for a flat to move in close to my office quarters in Bangalore. It was very difficult to find one as it’s a dense city . After trying all the websites,to no avail. I came across Taj Properties and got a flat relatively close to my office and its near a metro station too!.',
    },
    {
      'id' : 8,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Aryan Akil',
      "Star" : 4,
      "Desc" : 'I got my dream house within a week of search, Thanks to Taj Properties.',
    },
    {
      'id' : 9,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Darshan R',
      "Star" : 5,
      "Desc" : "Taj Properties has truly transformed the way I search for properties. It's a standout choice, with a vast array of listings making it a financially savvy choice. Its easy to schedule a visit or talk instantly allowing for easy communication with property owners.",
    },
    {
      'id' : 10,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Nithin S',
      "Star" : 4,
      "Desc" : "Taj Properties is an amazing platform for the property and app that is easy to use. Basically, it's a kind of one-stop solution for all your property needs.",
    },
    {
      'id' : 11,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Satya',
      "Star" : 4,
      "Desc" : "Simply great.. Convenient to use and lot's information on the same page with pictures of the property. It is a time and energy saver. One can get a fair idea of the property in a very short time. Easy to shortlist on the basis of your choice and requirements."
    },
    {
      'id' : 12,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Aditya',
      "Star" : 4,
      "Desc" : "This website makes your work easy. It's really helpful and has great search options. You cannot find property door to door but with this you will get the Exact choices. This site has filters which help you to choose the best out of it."
    },
    {
      'id' : 13,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Krishna',
      "Star" : 4,
      "Desc" : "Excellent interface and presentation. Very apt for average tech savvy individuals as well. Well defined search results and not bothered by phone calls even. Keep it up."
    },
    {
      'id' : 14,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Hari anan',
      "Star" : 4,
      "Desc" :"Easy to use and understand. I am finding 2bhk property for 4 to 5 months and downloaded many property apps but I found Taj Properties and liked it so much.",
    },
    {
      'id' : 15,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Pradeep C',
      "Star" : 4,
      "Desc" : "The interface and experience of the site is very user friendly. Response to the queries are quick. I was hassle free and easily got a property of my choice through Taj Properties. I would definitely recommend it to my friends.",
    },
    {
      'id' : 16,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Pradeep C',
      "Star" : 4,
      "Desc" : "Provides very good access to the market. User friendly and helps to add multiple details of the property.",
    },
    {
      'id' : 17,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Satish',
      "Star" : 4,
      "Desc" : "Great services and I could find 635 properties in my preferred location. So easy to communicate.",
    },
    {
      'id' : 18,
      "title" : 'Helps us to find good properties' ,
      "Name" : 'Rajat Gupta',
      "Star" : 4,
      "Desc" : "Awesome and matchable properties and easily view property details and . Very best way to find properties by sitting conveniently on your home.",
    },

  ]
  return (
    <PropBangBaseContainer>
    <PropertiesTittleInHome>Our Customer Loves us</PropertiesTittleInHome>

      <CardReview>
        <Carousel cols={3} rows={1} gap={15} loop={true}>
        {ReviewArray.map((item:any) => (
          <Carousel.Item>
            <ReviewBaseContainer>
              <ReviewColContainer>
                <ReviewImage src={Banner2} />
                <ReviewName> {item.Name} </ReviewName>
                <ReviewName>
                {item.Star == 4 ? <div>  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  <BsStarHalf /> </div> :  <div>  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  <AiFillStar /> </div>}  
                 
                </ReviewName>
              </ReviewColContainer>
              <ReviewTittle>{item.title} </ReviewTittle>
              <ReviewPara>
               {item.Desc}
              </ReviewPara>
            </ReviewBaseContainer>
          </Carousel.Item>
        ))}
        </Carousel>
      </CardReview>
    </PropBangBaseContainer>
  );
}
