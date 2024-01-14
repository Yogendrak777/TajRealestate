import React, { useEffect, useState } from "react";
import {
  BaseContainer,
  FilterContainer,
  SelectContainer,
  ProductListContainer,
  ProductDetailsContainer,
  CityDiv,
  ProductColContainer,
  SeeMoreBtn,
  TittleBar,
  PriceColContainer,
  ProductBaseContainer,
  ProductEndContainer,
  PriceBold
} from "./Skins";
import Select from "react-select";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { AdminApp } from "../FirebaseConfig/AdminFirebase";
import Carousel from "./Carousel";
import { LuParkingSquare } from "react-icons/lu";
import { BsCurrencyRupee } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

export default function IndexSearch() {
  const params = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState<any>("N/A");
  const [getBHKData, setShowBHKData] = useState<any>("N/A");
  const [getApartmentTypeData, setGetApartmentTypeData] = useState<any>("N/A");
  const [getPropertyAgeData, setShowFPropertyAgeData] = useState<any>("N/A");
  const [getBuggetData, setShowgetBuggetData] = useState<any>("N/A");

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
    { value: 3, label: "1 to 5 lacks" },
    { value: 7, label: "6 to 10 lacks" },
    { value: 13, label: "11 to 15 lacks" },
    { value: 17, label: "16 to 20 lacks" },
    { value: 23, label: "21 to 25 lacks" },
    { value: 27, label: "26 to 30 lacks" },
    { value: 33, label: "31 to 35 lacks" },
    { value: 37, label: "36 to 40 lacks" },
    { value: 43, label: "41 to 45 lacks" },
    { value: 47, label: "46 to 50 lacks" },
    { value: 53, label: "51 to 55 lacks" },
    { value: 57, label: "56 to 60 lacks" },
    { value: 63, label: "61 to 65 lacks" },
    { value: 67, label: "66 to 70 lacks" },
    { value: 73, label: "71 to 75 lacks" },
    { value: 77, label: "76 to 80 lacks" },
    { value: 83, label: "81 to 85 lacks" },
    { value: 87, label: "86 to 90 lacks" },
    { value: 93, label: "91 to 95 lacks" },
    { value: 97, label: "96 lacks to 1 Cr " },
    { value: 101, label: "1 Cr to 1.20 Cr" },
    { value: 102, label: "1.20 Cr to 1.50 Cr" },
    { value: 103, label: "1.50 Cr to 2 Cr" },
    { value: 104, label: "2 Cr to 2.5 Cr" },
    { value: 105, label: "3 Cr to 3.5 Cr" },
    { value: 106, label: "4 Cr to 4.5 Cr" },
    { value: 107, label: "5 Cr to 5.5 Cr" },
    { value: 108, label: "6 Cr to 6.5 Cr" },
    { value: 109, label: "7 Cr to 7.5 Cr" },
    { value: 110, label: "8 Cr to 8.5 Cr" },
    { value: 111, label: "10+ Cr" },
  ];

  const Cityobject = options.find((obj) => obj.value === params.get("City"));
  const BHKTypeObject = BHKType.find((obj) => obj.value === params.get("BHK"));
  const ApartmentTypeObject = ApartmentType.find(
    (obj) => obj.value === params.get("ApartmentType")
  );
  const PropertyAgeObject = PropertyAge.find(
    (obj) => obj.value === params.get("PropertyAge")
  );
  const BuggetTypeObject = BuggetType.find(
    (obj) => obj.value === Number(params.get("Prices"))
  );

  const [getDBData, setDBData] = useState<any>([]);

  const getDisaplyData = async () => {
    try {
      const db = getFirestore(AdminApp);
      const q = query(
        collection(db, "ProdData"),
        where("City", "==", selectedOption?.value || Cityobject?.value),
        where("BHK", "==", getBHKData?.value || BHKTypeObject?.value),
        where(
          "ApartmentType",
          "==",
          getApartmentTypeData?.value || ApartmentTypeObject?.value
        ),
        where("Prices", "==", getBuggetData?.value || BuggetTypeObject?.value),
        where(
          "PropertyAge",
          "==",
          getPropertyAgeData?.value || PropertyAgeObject?.value
        )
      );
      //const q = query(collection(db, "PropertyData"), where('Prices', "<", getBuggetData?.value ||BuggetTypeObject?.value));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setDBData(data);
      console.log(getDBData);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getDisaplyData();
  }, [
    selectedOption,
    getBHKData,
    getApartmentTypeData,
    getPropertyAgeData,
    getBuggetData,
  ]);

  const HandleGetMore = (id: any) => {
    navigate(`/productFullInfo/:?UniqueID=${id}`)
  }

  return (
    <BaseContainer>
      <FilterContainer>
        <SelectContainer>
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                padding: "3px",
                fontStyle: "italic",
              }),
            }}
            defaultValue={Cityobject}
            onChange={setSelectedOption}
            options={options}
            placeholder="Search for the Area 'Whitefiled'"
            isSearchable={true}
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
            defaultValue={BHKTypeObject}
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
            defaultValue={ApartmentTypeObject}
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
            defaultValue={PropertyAgeObject}
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
            defaultValue={BuggetTypeObject}
            onChange={setShowgetBuggetData}
            options={BuggetType}
            placeholder="Bugget Range"
            isClearable={true}
          />
        </SelectContainer>
      </FilterContainer>

      {getDBData.map((items: any) => (
        <ProductListContainer key={items.uniqueId}>
          <Carousel
            Img1={items.images.img1}
            Img2={items.images.img2}
            Img3={items.images.img3}
            Img4={items.images.img4}
            Img5={items.images.img5}
          />
          <ProductBaseContainer>
              <p>
                <strong> {items.BHK} </strong> is Ready to Occupy from{" "}
                <strong> {items.AvalibleData} </strong> for{" "}
                <strong>{items.BuyOrRent.value} </strong> in{" "}
                <strong>{items.City}</strong>
              </p>
           
            <ProductColContainer>
            <ProductDetailsContainer>
            <ProductEndContainer>
                  <LuParkingSquare />
                <CityDiv>
                  <TittleBar>Apartment Type</TittleBar>
                  <span>
                    <strong>{items.ApartmentType} </strong>
                  </span>
                </CityDiv>
                </ProductEndContainer>
                <ProductEndContainer>
                  <LuParkingSquare />
                <CityDiv>
                  <TittleBar>FLOOR</TittleBar>
                  <span>
                    <strong>{items.Floor} </strong> out of{" "}
                    <strong> {items.TotalFloor} </strong>
                  </span>
                </CityDiv>
                </ProductEndContainer>
              </ProductDetailsContainer>

              <ProductDetailsContainer>
              <ProductEndContainer>
                  <LuParkingSquare />
                <CityDiv>
                  <TittleBar>PARKING</TittleBar>
                  <span>
                    <strong>{items.Parking} </strong>
                  </span>
                </CityDiv>
                </ProductEndContainer>
                <ProductEndContainer>
                  <LuParkingSquare />
                <CityDiv>
                  <TittleBar>FURNISHING</TittleBar>
                  <span>
                    <strong>{items.Furnishing} </strong>
                  </span>
                </CityDiv>
                </ProductEndContainer>
              </ProductDetailsContainer>

              <ProductDetailsContainer>
              <ProductEndContainer>
                  <LuParkingSquare />
                <CityDiv>
                  <TittleBar>FACING</TittleBar>
                  <span>
                    <strong>{items.Facing} </strong>
                  </span>
                </CityDiv>
                </ProductEndContainer>
                <ProductEndContainer>
                  <LuParkingSquare />
                  <CityDiv>
                    <TittleBar>CARPET AREA</TittleBar>
                    <b>{items.CarpetArea}</b>
                  </CityDiv>
                </ProductEndContainer>
              </ProductDetailsContainer>
            
              <PriceColContainer>
                <ProductDetailsContainer>
                  <CityDiv>
                    <p> <BsCurrencyRupee/> <PriceBold>{items.Prices} Lakhs </PriceBold> <sup>{`(${items.Negotiable})`}</sup></p>
                    
                    {/* <TittleBar>{items.BuildUpArea} sqrt</TittleBar> */}
                    <SeeMoreBtn onClick={() => HandleGetMore(items.uniqueId)}> Get more Info &gt;</SeeMoreBtn>
                  </CityDiv>
                </ProductDetailsContainer>
              </PriceColContainer>
            </ProductColContainer>

          </ProductBaseContainer>
        </ProductListContainer>
      ))}
    </BaseContainer>
  );
}
