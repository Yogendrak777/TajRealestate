import React, { useEffect, useState } from "react";
import RentIcons from "../assets/rent.png";
import SaleIcons from "../assets/sale.png";
import BuyIcon from "../assets/mansion.png";
import NewProjectsIcons from "../assets/skyscraper.png";
import FarmLandIcons from "../assets/farming.png";
import CommercialIcons from "../assets/bank.png";
import LoanIconIcons from "../assets/loan.png";
import {
  CardOnMainHeader,
  CardBaseContainer,
  IconOnCard,
  CardContentContainer,
  CardSaleContainer,
  CardContentColContainer,
  CardBuyContainer,
  CardNewProjectContainer,
  CardLandContainer,
  CardCommericalContainer,
  CardLoanContainer,
  LabelOnCard,
  HR,
  SelectContainer,
  SearchBtn,
  CardBottomColContainer,
} from "./Skins";
import Select from "react-select";
import { getFirestore, collection, addDoc, getDocs,setDoc, doc, getDocFromCache, query, where, getDoc } from "firebase/firestore";
import { AdminApp } from "../FirebaseConfig/AdminFirebase"


export default function SearchCard() {


  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [getBHKData, setShowBHKData] = useState<any>("N/A");
  const [getApartmentTypeData, setGetApartmentTypeData] = useState<any>("N/A");
  const [getPropertyAgeData, setShowFPropertyAgeData] = useState<any>("N/A");
  const [getBuggetData, setShowgetBuggetData] = useState<any>("N/A");

  const getDisaplyData = async () => {
    try {
      const db = getFirestore(AdminApp);
      const q = query(collection(db, "PropertyData"), where("City", "==", selectedOption.value), where("BHK", "==", getBHKData.value),  where("ApartmentType", "==", getApartmentTypeData.value),);
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(JSON.stringify(data))
      
    } catch (e) {
      alert(e);
    }
  };

  const HandleSearchBtn = () => {
    getDisaplyData()
  }

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

  const BHKType = [
    { value: "1 BHK", label: "1 BHK" },
    { value: "2 BHK", label: "2 BHK" },
    { value: "3 BHK", label: "3 BHK" },
    { value: "4 BHK", label: "4 BHK" },
    { value: "4 BHK Plus", label: "4 BHK Plus" },
  ];

  const ApartmentType = [
    { value: "Flats", label: "Flats" },
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

  const BuggetType = [
    { value: "10", label: "under 10 lacks" },
    { value: "30", label: "under 30 lacks" },
    { value: "50", label: "under 50 lacks" },
    { value: "70", label: "under 70 lacks" },
    { value: "90", label: "under 90 lacks" },
    { value: "100 cr", label: "under 1 cr" },
    { value: "1.5 cr", label: "under 1.5 cr" },
    { value: "2.5cr", label: "under 2.5 cr" },
    { value: "4 cr", label: "under 4 cr" },
    { value: "6 cr", label: "under 6 cr" },
    { value: "8 cr", label: "under 8 cr" },
    { value: "10 cr", label: "under 10 cr" },
  ]

  return (
    <CardBaseContainer>
      <CardOnMainHeader>
        <CardContentColContainer>
          <CardContentContainer>
            <IconOnCard src={RentIcons} />
            <LabelOnCard>Rent</LabelOnCard>
          </CardContentContainer>
          <CardSaleContainer>
            <IconOnCard src={SaleIcons} />
            <LabelOnCard> Sale </LabelOnCard>
          </CardSaleContainer>
          <CardBuyContainer>
            <IconOnCard src={BuyIcon} />
            <LabelOnCard>Buy</LabelOnCard>
          </CardBuyContainer>
          <CardNewProjectContainer>
            <IconOnCard src={NewProjectsIcons} />
            <LabelOnCard>New Project</LabelOnCard>
          </CardNewProjectContainer>
          <CardLandContainer>
            <IconOnCard src={FarmLandIcons} />
            <LabelOnCard>Plot/Land</LabelOnCard>
          </CardLandContainer>
          <CardCommericalContainer>
            <IconOnCard src={CommercialIcons} />
            <LabelOnCard> Commercial </LabelOnCard>
          </CardCommericalContainer>
          <CardLoanContainer>
            <IconOnCard src={LoanIconIcons} />
            <LabelOnCard> Land </LabelOnCard>
          </CardLoanContainer>
        </CardContentColContainer>
        <HR />
        <CardBottomColContainer>
          <SelectContainer>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "3px",
                  fontStyle: "italic",
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

          <SearchBtn onClick={HandleSearchBtn}>Search</SearchBtn>

          </CardBottomColContainer>
          {selectedOption && 
          <CardBottomColContainer >
          <SelectContainer>
          <Select
           styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "3px",
              fontStyle: "italic",
            }),
          }}
              defaultValue={getBHKData}
              onChange={setShowBHKData}
              options={BHKType}
              placeholder="BHK Type"
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
              options={BuggetType}
              placeholder="Bugget Range"
              isClearable={true}
            />
          </SelectContainer>

        </CardBottomColContainer> }
      </CardOnMainHeader>
    </CardBaseContainer>
  );
}
