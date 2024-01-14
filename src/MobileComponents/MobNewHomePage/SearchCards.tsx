import React, { useState, memo } from "react";
import {
  SearchBaseContainer,
  SearchCard,
  SelectContainer,
  SearchUpperCard,
  MobSearchBtn,
} from "./Skins";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import MobSearch from "../../Components/assets/Mobsearch.png";

const SearchCards = memo(() => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [getApartmentTypeData, setGetApartmentTypeData] = useState<any>("N/A");
  const [getPropertyAgeData, setShowFPropertyAgeData] = useState<any>("N/A");
  const [getBuggetData, setShowgetBuggetData] = useState<any>("N/A");

  const HandleSearchBtn = () => {
    if (selectedOption !== null && getApartmentTypeData !== null) {
      navigate(
        `/mainSearch/:?City=${selectedOption.value}&&ApartmentType=${getApartmentTypeData.value}&&MaxPrice=${getBuggetData.value}&&PropertyAge=${getPropertyAgeData.value}`
      );
    } else {
      alert("please search");
    }
  };

  const options = [
    { value: "Jayanagar", label: "Jayanagar" },
    { value: "Indira Nagar", label: "Indira Nagar" },
    { value: "Ashok Nagar", label: "Ashok Nagar" },
    { value: "Koramangala", label: "Koramangala" },
    { value: "Whitefield", label: "Whitefield" },
    { value: "Marathahalli", label: "Marathahalli" },
    { value: "BTM Layout", label: "BTM Layout" },
    { value: "Vijaya Nagar", label: "Vijaya Nagar" },
    { value: "JP Nagar", label: "JP Nagar" },
    { value: "HSR Layout", label: "HSR Layout" },
    { value: "Malleshwaram", label: "Malleshwaram" },
    { value: "Bannerghatta Road", label: "Bannerghatta Road" },
    { value: "Kaggadasapura", label: "Kaggadasapura" },
    { value: "Basavanagudi", label: "Basavanagudi" },
    { value: "Banashankari", label: "Banashankari" },
    { value: "Bellandur", label: "Bellandur" },
    { value: "T Dasarahalli", label: "T Dasarahalli" },
    { value: "Brookefield", label: "Brookefield" },
    { value: "Yelahanka", label: "Yelahanka" },
    { value: "Sarjapur Road", label: "Sarjapur Road" },
    { value: "Sadashiva Nagar", label: "Sadashiva Nagar" },
    { value: "Kalyan Nagar", label: "Kalyan Nagar" },
    { value: "KR Puram", label: "KR Puram" },
    { value: "Hebbal", label: "Hebbal" },
    { value: "Bilekahalli", label: "Bilekahalli" },
    { value: "Vidyaranyapura", label: "Vidyaranyapura" },
    { value: "Hosur Road", label: "Hosur Road" },
    { value: "Ramamurthy Nagar", label: "Ramamurthy Nagar" },
    { value: "Domlur", label: "Domlur" },
    { value: "HeShivaji Nagarbbal", label: "Shivaji Nagar" },
    { value: "Arekere", label: "Arekere" },
    { value: "Sanjay Nagar", label: "Sanjay Nagar" },
    { value: "Bagalakunte", label: "Bagalakunte" },
    { value: "New Thippasandra", label: "New Thippasandra" },
    { value: "Banaswadi", label: "Banaswadi" },
    { value: "Vasanth Nagar", label: "Vasanth Nagar" },
    { value: "CV Raman Nagar", label: "CV Raman Nagar" },
    { value: "Frazer Town", label: "Frazer Town" },
    { value: "Bommanahalli", label: "Bommanahalli" },
    { value: "Sahakara Nagar", label: "Sahakara Nagar" },
    { value: "Kumaraswamy Layout", label: "Kumaraswamy Layout" },
    { value: "Yelahanka New Town", label: "Yelahanka New Town" },
    { value: "Seshadripuram", label: "Seshadripuram" },
    { value: "Sadduguntepalya", label: "Sadduguntepalya" },
    { value: "Padmanabha Nagar", label: "Padmanabha Nagar" },
    { value: "Yeshwanthpur", label: "Yeshwanthpur" },
    { value: "Wilson Garden", label: "Wilson Garden" },
    { value: "Kengeri Satellite Town", label: "Kengeri Satellite Town" },
    { value: "Mathikere", label: "Mathikere" },
    { value: "Attiguppe", label: "Attiguppe" },
    { value: "Hongasandra", label: "Hongasandra" },
    { value: "Mahadevapura", label: "Mahadevapura" },
    { value: "Doddanekkundi", label: "Doddanekkundi" },
    { value: "Murugesh Palya", label: "Murugesh Palya" },
    { value: "Ejipura", label: "Ejipura" },
    { value: "Raja Rajeshwari Nagar", label: "Raja Rajeshwari Nagar" },
    { value: "Hulimavu", label: "Hulimavu" },
    { value: "Gandhi Nagar", label: "Gandhi Nagar" },
    { value: "Adugodi", label: "Adugodi" },
    { value: "Kodihalli", label: "Kodihalli" },
    { value: "Bennigana Halli", label: "Bennigana Halli" },
    { value: "Gottigere", label: "Gottigere" },
    { value: "Chamarajpet", label: "Chamarajpet" },
    { value: "Jalahalli West", label: "Jalahalli West" },
    { value: "Uttarahalli", label: "Uttarahalli" },
    { value: "Nagavara", label: "Nagavara" },
    { value: "Panduranga Nagar", label: "Panduranga Nagar" },
    { value: "Sudhama Nagar", label: "Sudhama Nagar" },
    { value: "Bidrahalli", label: "Bidrahalli" },
    { value: "Sampangi Rama Nagar", label: "Sampangi Rama Nagar" },
    { value: "Jalahalli East", label: "Jalahalli East" },
    { value: "Chickpet", label: "Chickpet" },
    { value: "Ganga Nagar", label: "Ganga Nagar" },
    { value: "Hoodi", label: "Hoodi" },
    { value: "RT Nagar", label: "RT Nagar" },
    { value: "HBR Layout", label: "HBR Layout" },
    { value: "Harlur", label: "Harlur" },
    { value: "Sunkadakatte", label: "Sunkadakatte" },
    { value: "Kadubeesanahalli", label: "Kadubeesanahalli" },
    { value: "Jayamahal", label: "Jayamahal" },
    { value: "Begur", label: "Begur" },
    { value: "Jeevanbheema Nagar", label: "Jeevanbheema Nagar" },
    { value: "Nandini Layout", label: "Nandini Layout" },
    { value: "RMV 2nd Stage", label: "RMV 2nd Stage" },
    { value: "Shanthi Nagar", label: "Shanthi Nagar" },
    { value: "Maruthi Sevanagar", label: "Maruthi Sevanagar" },
    {
      value: "Ragavendra Nagar-Sunkadakatte",
      label: "Ragavendra Nagar-Sunkadakatte",
    },
    { value: "Kempegowda Nagar", label: "Kempegowda Nagar" },
    { value: "Kanakapura Road", label: "Kanakapura Road" },
    { value: "Bannerghatta", label: "Bannerghatta" },
    { value: "Kamala Nagar", label: "Kamala Nagar" },
    { value: "Richmond Town", label: "Richmond Town" },
    { value: "Chikkalasandra", label: "Chikkalasandra" },
    { value: "Kalena Agrahara", label: "Kalena Agrahara" },
    { value: "Bidadi", label: "Bidadi" },
    { value: "Kasavanahalli", label: "Kasavanahalli" },
    { value: "Kadugodi", label: "Kadugodi" },
    { value: "Varthur", label: "Varthur" },
  ];

  const MiniumRange = [
    { value: 5, label: "₹5 Lacs" },
    { value: 10, label: "₹10 Lacs" },
    { value: 15, label: "₹15 Lacs" },
    { value: 20, label: "₹20 Lacs" },
    { value: 25, label: "₹25 Lacs" },
    { value: 30, label: "₹30 Lacs" },
    { value: 35, label: "₹35 Lacs" },
    { value: 40, label: "₹40 Lacs" },
    { value: 45, label: "₹45 Lacs" },
    { value: 50, label: "₹50 Lacs" },
    { value: 55, label: "₹55 Lacs" },
    { value: 60, label: "₹60 Lacs" },
    { value: 65, label: "₹65 Lacs" },
    { value: 70, label: "₹70 Lacs" },
    { value: 75, label: "₹75 Lacs" },
    { value: 80, label: "₹80 Lacs" },
    { value: 85, label: "₹85 Lacs" },
    { value: 90, label: "₹90 Lacs" },
    { value: 95, label: "₹95 Lacs" },
    { value: 100, label: "₹1 Crores " },
    { value: 101, label: "₹1.20 Crores" },
    { value: 102, label: "₹1.35 Crores" },
    { value: 103, label: "₹1.52 Crores" },
    { value: 104, label: "₹2.5 Crores" },
    { value: 105, label: "₹3.5 Crores" },
    { value: 106, label: "₹4.5 Crores" },
    { value: 107, label: "₹5.5 Crores" },
    { value: 108, label: "₹6.5 Crores" },
    { value: 109, label: "₹7.5 Crores" },
    { value: 110, label: "₹8.5 Crores" },
  ];

  const ApartmentType = [
    { value: "Apartment", label: "Apartment" },
    { value: "Gated community Villa", label: "Gated community Villa" },
    { value: "Independent Houses/Villa", label: "Independent Houses/Villa" },
    { value: "Stand Alone Building", label: "Stand Alone Building" },
  ];

  const PropertyAge = [
    { value: "Under Construction", label: "Under Construction" },
    { value: "Less than a year", label: "Less than a year" },
    { value: "1-3 years", label: "1-3 years" },
    { value: "3-6 years", label: "3-6 years" },
    { value: "7-10 years", label: "7-10 years" },
    { value: "More than 10 years", label: "More than 10 years" },
  ];

  return (
    <SearchBaseContainer>
      <SearchCard>
        <SearchUpperCard>
          <SelectContainer>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "3px",
                  fontStyle: "italic",
                  fontSize: "small",
                }),
              }}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder="Search for the Area 'Whitefiled'"
              isSearchable={true}
              isClearable={true}
            />
          </SelectContainer>
          <MobSearchBtn onClick={HandleSearchBtn} src={MobSearch} />
        </SearchUpperCard>

        {selectedOption && (
          <>
            <SelectContainer>
              <Select
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    padding: "3px",
                    fontStyle: "italic",
                  }),
                }}
                defaultValue={getApartmentTypeData}
                onChange={setGetApartmentTypeData}
                options={ApartmentType}
                placeholder="ApartmentType"
                isClearable={true}
              />
            </SelectContainer>

            <SelectContainer>
              <Select
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    padding: "3px",
                    fontStyle: "italic",
                  }),
                }}
                defaultValue={getPropertyAgeData}
                onChange={setShowFPropertyAgeData}
                options={PropertyAge}
                placeholder="Property Age"
                isClearable={true}
              />
            </SelectContainer>

            <SelectContainer>
              <Select
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    padding: "3px",
                    fontStyle: "italic",
                  }),
                }}
                defaultValue={getBuggetData}
                onChange={setShowgetBuggetData}
                options={MiniumRange}
                placeholder="Bugget Range"
                isClearable={true}
              />
            </SelectContainer>
          </>
        )}
      </SearchCard>
    </SearchBaseContainer>
  );
});
export default SearchCards;
