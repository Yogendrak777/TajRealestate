import React, { useState } from "react";
import {
  NavBarInList,
  CompanyLogoOnNav,
  LocationSearchOnNav,
  LocationSearchBtnOnNav,
  LocationItemListOnNav,
  HorizontalLineOnNav,
  SearchContainer,
  FilterCardOnNav
} from "./Skins";
import CompanyLogo from "../assets/CompanyLogo.jpeg";

interface ListNavbarProps {
  HandleGODownFunc : any;
}

export default function ListNavbar(props : ListNavbarProps) {
  const [showFiltersCard, setshowFilters] = useState<boolean>(false);
  const [search, setSearch] = useState<any>("");
  const [ShowLocations, setShowLocations] = useState<boolean>(false);
  const [SearchFilter, setSearchFilter] = useState<any>([
    "whitefiled",
    "jp nagar",
    "jayanagar",
  ]);
  const [SearchData, setFiletData] = useState<any>([]);

  const handelSearch = (e: any) => {
    const Value = e.target.value;
    const ValueInLowerData = Value.toLowerCase();
    setShowLocations(true);
    setSearch(ValueInLowerData);
    const filterData = SearchFilter.filter((item: any) =>
      item.startsWith(search)
    );
    setFiletData(filterData);
  };

  const handelSearchOnClick = (item: any) => {
    setSearch(item);
    setShowLocations(false);
  };

  const HandelFilters = () => {
    setshowFilters(!showFiltersCard);
    props.HandleGODownFunc(!showFiltersCard)
  };

  return (
    <>
    <NavBarInList>
      <CompanyLogoOnNav src={CompanyLogo} />
      <SearchContainer>

      <LocationSearchOnNav
        type="Search"
        placeholder='Search by location "Whitefield"'
        value={search}
        onChange={(e: any) => handelSearch(e)}
        />
      <LocationSearchBtnOnNav type="submit">Search</LocationSearchBtnOnNav>
      <LocationSearchBtnOnNav onClick={HandelFilters}>
        Filter
      </LocationSearchBtnOnNav>

      {ShowLocations && search && !showFiltersCard && (
        <LocationItemListOnNav>
          {SearchData.map((item: any) => (
            <div>
              <ul onClick={() => handelSearchOnClick(item)}> {item}</ul>
              <HorizontalLineOnNav />
            </div>
          ))}
        </LocationItemListOnNav>
      )}
      </SearchContainer>
    </NavBarInList>
    {showFiltersCard && 
        <div>
        
        <FilterCardOnNav>
        
        </FilterCardOnNav>
        
        </div>
      }
    </>
  );
}
