import React from "react";
import {
  SalesInBangaloreContainer,
  PropertiesTittleInHome,
  AddPropertyBtn,
  PropertiesInBangBody,
  ImageCard,
} from "./Skins";
import Carousel from 'better-react-carousel'

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
      <AddPropertyBtn>List your property</AddPropertyBtn>
      <AddPropertyBtn>List your property</AddPropertyBtn>
      <AddPropertyBtn>List your property</AddPropertyBtn>
      <AddPropertyBtn>List your property</AddPropertyBtn>
      <PropertiesInBangBody>
        <ImageCard> </ImageCard>
        <ImageCard> </ImageCard>
        <ImageCard> </ImageCard>
        <ImageCard> </ImageCard>
        <ImageCard> </ImageCard>
      </PropertiesInBangBody> 
      <PropertiesTittleInHome>
        Hot Selling Project in Bangalore
      </PropertiesTittleInHome>

      <Carousel cols={4} rows={1} gap={15} loop = {true}>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
    </Carousel>


     <PropertiesTittleInHome>
        Premium Project in Bangalore
      </PropertiesTittleInHome>

      <Carousel cols={4} rows={1} gap={15} loop = {true}>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
    </Carousel>

    <PropertiesTittleInHome>
       Our Customer Loves us
      </PropertiesTittleInHome>

      <Carousel cols={3} rows={1} gap={15} loop = {true}>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
    </Carousel>
    </SalesInBangaloreContainer>
  );
}
