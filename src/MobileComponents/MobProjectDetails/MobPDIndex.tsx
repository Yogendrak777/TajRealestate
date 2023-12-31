import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  getDocFromCache,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import {
  MobBaseContainer,
  MobImage,
  MobImageContainer,
  ImageTittle,
  PropertyName,
  PopUpContainer,
  PopUpInsideContainer,
  PropertyAddress,
  PropertyPrices,
  PropertyOverviewTittle,
  Column,
  Row,
  IconImage,
} from "./Skins";
import Carousel from "./Carousel";
import { FaBed } from "react-icons/fa";

export default function MobPDIndex() {
  const params = new URLSearchParams(window.location.search);
  const uniqueId = params.get("id");

  const [getDBData, setDBData] = useState<any>([]);
  const [getCarouselOpen, setCarouselOpen] = useState<any>(false);

  const getDisaplyData = async () => {
    try {
      const db = getFirestore(AdminApp);
      const q = query(
        collection(db, "ProdData"),
        where("uniqueId", "==", uniqueId)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setDBData(data);
      console.log(data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getDisaplyData();
  }, []);

  const BHKValue = (arr: any) => {
    console.log(arr);
    const array: any = [];
    array.push(arr.value);
    return array.join(",");
  };

  const handleCarousel = () => {
    setCarouselOpen(!getCarouselOpen);
  };

  return (
    <MobBaseContainer>
      {getDBData[0] && (
        <>
          <MobImageContainer>
            <MobImage src={getDBData[0].images.img1} onClick={handleCarousel} />
            <ImageTittle>
              <span> 5 Photos</span>
            </ImageTittle>
          </MobImageContainer>
          <PropertyName>{getDBData[0].PropertyName}</PropertyName>
          <PropertyAddress>{getDBData[0].Address}</PropertyAddress>
          <PropertyPrices>
            {getDBData[0].MinPrices.label} - {getDBData[0].MaxPrice.label}
          </PropertyPrices>
          <PropertyOverviewTittle>Overview</PropertyOverviewTittle>

          <Column>
            <Row>
              <IconImage>
                <path d="M9,9.5A2.5,2.5,0,1,1,6.5,7,2.5,2.5,0,0,1,9,9.5ZM24,12V10a4,4,0,0,0-4-4H15a4,4,0,0,0-4,4v2ZM2,14V3A1,1,0,0,0,0,3V21a1,1,0,0,0,2,0V19H22v2a1,1,0,0,0,2,0V14Z" />
              </IconImage>
            </Row>
            <Row>
              <FaBed color="#00BF63" size="2em" />
            </Row>
          </Column>

          {/* <BHKValue value = {getDBData[0].BHK.map((item:any)=>(item.value))}/> */}
          {getCarouselOpen && getDBData[0] && (
            <div>
              <PopUpContainer onClick={handleCarousel}></PopUpContainer>
              <PopUpInsideContainer>
                <Carousel
                  Img1={getDBData[0].images.img1}
                  Img2={getDBData[0].images.img2}
                  Img3={getDBData[0].images.img3}
                  Img4={getDBData[0].images.img4}
                  Img5={getDBData[0].images.img5}
                />
              </PopUpInsideContainer>
            </div>
          )}
        </>
      )}
    </MobBaseContainer>
  );
}
