import React, {useEffect, useState} from 'react'
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
} from "./Skins"
import Select from "react-select";
import { getFirestore, collection, addDoc, getDocs,setDoc, doc, getDocFromCache, query, where, getDoc } from "firebase/firestore";
import { AdminApp } from "../FirebaseConfig/AdminFirebase"
import Carousel from './Carousel';
import { LuParkingSquare } from "react-icons/lu";
import { BsCurrencyRupee } from 'react-icons/bs'

export default function BudgetSearch() {

  const params = new URLSearchParams(window.location.search);

  const [getBuggetData, setShowgetBuggetData] = useState<any>("N/A");
  const [getDBData, setDBData] = useState<any>([])

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
  ]

  const BuggetTypeObject = BuggetType.find(obj => obj.value === Number(params.get('Prices')));
  console.log(BuggetTypeObject);

  const getDisaplyData = async () => {
    try {
      const db = getFirestore(AdminApp);
      const q = query(collection(db, "PropertyData"), where('Prices', "<=", getBuggetData?.value || BuggetTypeObject?.value));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setDBData(data)

    } catch (e) {
      alert(e);
    }
  };

  useEffect(()=>{
    getDisaplyData();
  },[getBuggetData])

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
                    <SeeMoreBtn> Get more Info &gt;</SeeMoreBtn>
                  </CityDiv>
                </ProductDetailsContainer>
              </PriceColContainer>
            </ProductColContainer>

          </ProductBaseContainer>
        </ProductListContainer>
      ))}
    </BaseContainer>
  )
}
