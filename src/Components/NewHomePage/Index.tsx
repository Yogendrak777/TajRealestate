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

export default function Index() {
  return (
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
  );
}
