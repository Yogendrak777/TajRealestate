import React, { useEffect, useState } from "react";
import {
  BaseContainer,
  ImageBaseContainer,
  OneBigImage,
  TwoSmallImage,
  ThirdSmallImage,
  ImageColContainer,
  PopUpContainer,
  PopUpInsideContainer,
} from "./Skins";
import Select from "react-select";
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
import { AdminApp } from "../FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";
import Carousel from './Carousel';

export default function ProductFullInfoIndex() {
  const params = new URLSearchParams(window.location.search);
  const uniqueNo = params.get("UniqueID");
  const navigate = useNavigate();

  const [getDBData, setDBData] = useState<any>([]);
  const [getCarouselOpen, setCarouselOpen] = useState<any>(false);

  const getDisaplyData = async () => {
    try {
      const db = getFirestore(AdminApp);
      const q = query(
        collection(db, "ProdData"),
        where("uniqueId", "==", uniqueNo)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setDBData(data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getDisaplyData();
  }, []);

  const handleOpenCarousel = () => {
    setCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setCarouselOpen(false);
  }

  return (
    <BaseContainer>
      {getDBData[0] && (
        <ImageBaseContainer>
          <OneBigImage src={getDBData[0].images.img1} onClick={handleOpenCarousel}/>
          <ImageColContainer onClick={handleOpenCarousel}>
            <TwoSmallImage src={getDBData[0].images.img2} />
            <ThirdSmallImage src={getDBData[0].images.img3} />
          </ImageColContainer>
          <div>
            jsdjkfb
            kbjdbs
          </div>
        </ImageBaseContainer>
      )}

      {getCarouselOpen &&  getDBData[0] && (
        <div>
        <PopUpContainer onClick={handleCloseCarousel}></PopUpContainer>
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
   
    </BaseContainer>
  );
}
