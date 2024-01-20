import React from "react";
import { BaseContainer } from "./Skins";
import BannersCarousel from "./BannersCarusel";
import SearchCard from "./SearchCard";
import Adcard from "./Adcard";
import PropSalesBang from "./PropSalesBang";
import HotSelling from "./HotSelling";
import PremiumProject from "./PremiumProject";
import Review from "./Review";
import FooterPage from "./FooterPage";
import { Helmet } from "react-helmet-async";

export default function Index() {
  return (
    <>
      <Helmet>
      <title>Welcome to Legacy Properties</title>
      <meta name="description" content='Legacy Properties Limited builds luxury homes in sought-after locations' />
      <link rel="canonical" href="https://legacyproperties.in/"/>
    </Helmet>
    <BaseContainer>
      <BannersCarousel />
      <SearchCard />
      <Adcard/>
      <PropSalesBang/>
      <HotSelling/>
      <PremiumProject/>
      <Review/>
      <FooterPage/>
    </BaseContainer>
    </>
  );
}
