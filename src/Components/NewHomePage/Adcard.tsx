import React from "react";
import {
  CardContentColContainer,
  ListBtn,
  AdSellContainer,
  AdDreamContainer,
  AdBrokerContainer,
  AdInvestContainer,
  HeaderLabel,
  CardContainer,
  Text,
} from "./Skins";
import { useNavigate } from "react-router-dom";

export default function Adcard() {
  const navigate = useNavigate();

  const HandleAddData = () => {
    navigate('/addData')
  }

  return (
    <CardContainer>
      <AdSellContainer>
        <HeaderLabel> Post Your Property Ads for Free </HeaderLabel>
        <Text>Sell/Rent out your property & Get unlimited responses</Text>
        <CardContentColContainer>
        <ListBtn onClick={HandleAddData}>List your property</ListBtn>
        </CardContentColContainer>
      </AdSellContainer>

      <AdDreamContainer>
      <HeaderLabel> Find Your Dream Property </HeaderLabel>
        <Text>Get the list of properties matching to your requirement</Text>
        <CardContentColContainer>
        <ListBtn>Find property</ListBtn>
        </CardContentColContainer>
      </AdDreamContainer>

      <AdBrokerContainer>
      <HeaderLabel> Invest in real estate with ease </HeaderLabel>
        <Text>See top markets Discover high growth options</Text>
        <CardContentColContainer>
        <ListBtn>Invest Now</ListBtn>
        </CardContentColContainer>
      </AdBrokerContainer>

      <AdInvestContainer>
      <HeaderLabel> Are you a broker? </HeaderLabel>
        <Text> Register now and join us!</Text>
        <Text> And buyers find their dreams home.</Text>
        <CardContentColContainer>
        <ListBtn>Register here</ListBtn>
        </CardContentColContainer>
      </AdInvestContainer>
    </CardContainer>
  );
}
