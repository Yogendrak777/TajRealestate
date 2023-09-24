import React, { useState } from "react";
import {
  NewHomePage,
  BGImageOfHomePage,
  CardOnMainHeader,
  IconOnCard,
  CardIconPackage,
  TextOfIcon,
  CardSeperator,
  LocationSearch,
  LocationItemList,
  HorizontalLine,
  LocationSearchBtn,
  FilterCardRight,
  BottomHeaderSection,
  AddDetailsCard,
  AddPropertyBtn,
  DreamPropertyBtn
} from "./Skins";
import RentIcons from "../assets/rent.png";
import SaleIcons from "../assets/sale.png";
import BuyIcon from "../assets/mansion.png";
import NewProjectsIcons from "../assets/skyscraper.png";
import FarmLandIcons from "../assets/farming.png";
import CommercialIcons from "../assets/bank.png";
import LoanIconIcons from "../assets/loan.png";
import BGImage from "../assets/BGImage.webp";
import SalesInBangalore from "./SalesInBangalore";
import Navbar from "../NavBar/Navbar";

export default function HomeHeader() {

  const [showFiltersCard, setshowFilters] = useState<boolean>(false)
  const [search, setSearch] = useState<any>("")
  const [ShowLocations, setShowLocations] = useState<boolean>(false)
  const [SearchFilter,  setSearchFilter] = useState<any>(["whitefiled", "jpnagar", "jayanagar",])
  const [SearchData, setFiletData] = useState<any>([])
  const [handelBuy, sethandelBuy] = useState<boolean>(false)

 
  const handelSearch = (e:any) => {
    const Value = e.target.value;
    const ValueInLowerData = Value.toLowerCase();
    setShowLocations(true)
    setSearch(ValueInLowerData);
    const filterData = SearchFilter.filter((item:any)=> item.startsWith(search));
    setFiletData(filterData);
  }

  const handelSearchOnClick = (item:any) => {
    setSearch(item)
    setShowLocations(false)
  }

  const HandelFilters = () => {
    setshowFilters(!showFiltersCard)
  }

  const HandelOnClickBuy = () => {
    sethandelBuy(true)
  }

  return (
    <div>
    <Navbar/>
    <NewHomePage>
      <BGImageOfHomePage src={BGImage} />
      <CardOnMainHeader >
        <CardSeperator>
        <CardIconPackage onClick={HandelOnClickBuy} changeOnClick = {handelBuy}>
          <IconOnCard src={BuyIcon} />
          <TextOfIcon>
            Buy
          </TextOfIcon>
        </CardIconPackage>
        <CardIconPackage changeOnClick = {handelBuy}>
          <IconOnCard src={RentIcons} />
          <TextOfIcon>
            Rent
          </TextOfIcon>
        </CardIconPackage>
        <CardIconPackage changeOnClick = {handelBuy}>
          <IconOnCard src={SaleIcons} />
          <TextOfIcon>
            Sale
          </TextOfIcon>
        </CardIconPackage>
        <CardIconPackage changeOnClick = {handelBuy}>
          <IconOnCard src={NewProjectsIcons} />
          <TextOfIcon>
            New Project
          </TextOfIcon>
        </CardIconPackage>
        <CardIconPackage changeOnClick = {handelBuy}>
          <IconOnCard src={FarmLandIcons} />
          <TextOfIcon>
            plot/Land
          </TextOfIcon>
        </CardIconPackage>
        <CardIconPackage changeOnClick = {handelBuy}>
          <IconOnCard src={CommercialIcons} />
          <TextOfIcon>
            Commercial
          </TextOfIcon>
        </CardIconPackage>
        <CardIconPackage changeOnClick = {handelBuy}>
          <IconOnCard src={LoanIconIcons} />
          <TextOfIcon>
            Loan
          </TextOfIcon>
        </CardIconPackage>
          </CardSeperator>
          <hr/>
        <CardSeperator>
        <LocationSearch type="Search" 
        placeholder='Search by location "Whitefield"'
        value={search}
        onChange={(e:any)=> handelSearch(e)}/>
        <LocationSearchBtn type = "submit">Search</LocationSearchBtn>
        <LocationSearchBtn onClick={HandelFilters}>Filter</LocationSearchBtn>
         </CardSeperator>
      </CardOnMainHeader>

      {ShowLocations && search && !showFiltersCard &&
      <LocationItemList >
          {SearchData.map((item:any)=> (
            <div>
                 <ul onClick={()=> handelSearchOnClick(item)}> {item}</ul>
                 <HorizontalLine/>
            </div>
          ))}
      </LocationItemList>
      }

      {showFiltersCard && 
      <div>
      
        <FilterCardRight>

        </FilterCardRight>

      </div>
      }
      
      <BottomHeaderSection showFiltersCard = {showFiltersCard} >
        <AddDetailsCard>
          <h2>Post Your  Property Ads for Free </h2>
          <div>
          <text>Sell/Rent out your property & Get unlimited responses</text>
          </div>
          <AddPropertyBtn>List your property</AddPropertyBtn>
        </AddDetailsCard>
        <AddDetailsCard>
          <h2>Find Your Dream Property</h2>
          <div>
          <text>Get the list of properties matching to your requirement</text>
          </div>
          <DreamPropertyBtn>List your property</DreamPropertyBtn>
        </AddDetailsCard>
        <AddDetailsCard>
        <h2>Invest in real estate with ease</h2>
          <div>
          <text>See top markets</text>
          </div>
          <div>
          <text>Discover high growth options</text>
          </div>
          <AddPropertyBtn>Explore now</AddPropertyBtn>
        </AddDetailsCard>
      </BottomHeaderSection>

      <SalesInBangalore showFiltersCard = {showFiltersCard}/>

    </NewHomePage>
    </div>
  );
}
