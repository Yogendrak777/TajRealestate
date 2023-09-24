import React from "react";
import {
  SalesInBangaloreContainer,
  PropertiesTittleInHome,
  AddPropertyBtn,
  PropertiesInBangBody,
  ImageCard,
} from "./Skins";
import Carousel from 'better-react-carousel'
import Footer from "./Footer";

export interface SalesInBangaloreProps {
  showFiltersCard: boolean;
}

export default function SalesInBangalore(props: SalesInBangaloreProps) {
  const { showFiltersCard } = props;

  return (
    <SalesInBangaloreContainer showFiltersCard={showFiltersCard}>
      <PropertiesTittleInHome>
        Properties for Sales in Bangalore
      </PropertiesTittleInHome>
      <AddPropertyBtn>Most Popular</AddPropertyBtn>
      <AddPropertyBtn>By Budget</AddPropertyBtn>
      <AddPropertyBtn>By Property Type</AddPropertyBtn>
      <AddPropertyBtn>By BHK</AddPropertyBtn>
      <PropertiesInBangBody>
        <ImageCard> </ImageCard>
        <ImageCard>  </ImageCard>
        <ImageCard> </ImageCard>
        <ImageCard> </ImageCard>
        <ImageCard> </ImageCard>
      </PropertiesInBangBody> 
      <PropertiesTittleInHome>
        Hot Selling Project in Bangalore
      </PropertiesTittleInHome>
      <Carousel cols={4} rows={1} gap={15} loop = {true}>
          <Carousel.Item>
           <ImageCard> </ImageCard>
        </Carousel.Item>
      </Carousel>

     <PropertiesTittleInHome>
        Premium Project in Bangalore
      </PropertiesTittleInHome>

      <Carousel cols={4} rows={1} gap={15} loop = {true}>
          <Carousel.Item>
           <ImageCard> </ImageCard>
        </Carousel.Item>
      </Carousel>

    <PropertiesTittleInHome>
       Our Customer Loves us
      </PropertiesTittleInHome>

      <Carousel cols={4} rows={1} gap={15} loop = {true}>
          <Carousel.Item>
           <ImageCard> </ImageCard>
        </Carousel.Item>
      </Carousel>
      
    <Footer/>
    </SalesInBangaloreContainer>
  );
}
