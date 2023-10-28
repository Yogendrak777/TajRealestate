import React from "react";
import { BaseContainer } from "./Skins";
import BannersCarousel from "./BannersCarusel";
import SearchCard from "./SearchCard";

export default function Index() {
  return (
    <BaseContainer>
      <BannersCarousel />
      <SearchCard />
      
    </BaseContainer>
  );
}
