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
  Column,
  Row,
  ImgForSign,
  TittleBar,
  ItemBar,
  RightContainer,
} from "./Skins";
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
import Carousel from "./Carousel";
import BedRoomIcon from "../assets/bed.png";
import Amenties from "./Amenties";

export default function ProductFullInfoIndex() {
  const params = new URLSearchParams(window.location.search);
  const uniqueNo = params.get("UniqueID");
  const navigate = useNavigate();

  const [getDBData, setDBData] = useState<any>([]);
  const [getCarouselOpen, setCarouselOpen] = useState<any>(false);
  const [getAvaliableDate, setAvaliableDate] = useState<any>(false);

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

      const formattedDate = new Date(data[0].AvalibleData).toLocaleDateString(
        "en-US",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      );
      setAvaliableDate(formattedDate);
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
  };

  return (
    <BaseContainer>
      {getDBData[0] && (
        <>
        <Column align="left" MarginLeft="2em">
        <h1>{getDBData[0].PropertyName}</h1>
        <h4>{getDBData[0].Address} &nbsp; {getDBData[0].Locality}</h4> 
        <span>{getDBData[0].Address} </span>
        </Column>
          <ImageBaseContainer>
            <OneBigImage
              src={getDBData[0].images.img1}
              onClick={handleOpenCarousel}
            />
            <ImageColContainer onClick={handleOpenCarousel}>
              <TwoSmallImage src={getDBData[0].images.img2} />
              <ThirdSmallImage src={getDBData[0].images.img3} />
            </ImageColContainer>
            <RightContainer>
              <Column align="left">
                <Row align="left">
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> BHK </TittleBar>
                    <ItemBar>{getDBData[0].BHK}</ItemBar>
                  </Column>
                </Row>

                <Row align="left">
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> AvalibleData </TittleBar>
                    <ItemBar>{getAvaliableDate}</ItemBar>
                  </Column>
                </Row>

                <Row align="left">
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> NoOfBalcony </TittleBar>
                    <ItemBar>{getDBData[0].Balcony} Balcony</ItemBar>
                  </Column>
                </Row>

                <Row align="left">
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> BuildUpArea </TittleBar>
                    <ItemBar>{getDBData[0].BuildUpArea}</ItemBar>
                  </Column>
                </Row>
              </Column>

              <Column align="left">
                <Row align="left">
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> ApartmentType </TittleBar>
                    <ItemBar>{getDBData[0].ApartmentType}</ItemBar>
                  </Column>
                </Row>

                <Row align="left">
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> NoOfBedrooms </TittleBar>
                    <ItemBar>{getDBData[0].NoOfBedRooms} Bedroom</ItemBar>
                  </Column>
                </Row>

                <Row>
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> PropertyAge </TittleBar>
                    <ItemBar>{getDBData[0].PropertyAge}</ItemBar>
                  </Column>
                </Row>

                <Row align="left">
                  <ImgForSign src={BedRoomIcon} />
                  <Column align="left" MarginLeft="0.5em">
                    <TittleBar> CarpetArea </TittleBar>
                    <ItemBar>{getDBData[0].CarpetArea}</ItemBar>
                  </Column>
                </Row>
              </Column>
            </RightContainer>
          </ImageBaseContainer>

          <Row align="left" MarginLeft="2em 2em 2em 0.5em">
            <Column>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> Floor </TittleBar>
                  <ItemBar>
                    {getDBData[0].Floor}th out of {getDBData[0].TotalFloor}{" "}
                    Floor
                  </ItemBar>
                </Column>
              </Row>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> Furnishing </TittleBar>
                  <ItemBar>{getDBData[0].Furnishing}</ItemBar>
                </Column>
              </Row>
            </Column>
            <Column>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> WaterSupply </TittleBar>
                  <ItemBar>{getDBData[0].WaterSupply}</ItemBar>
                </Column>
              </Row>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> NoOfBathRooms </TittleBar>
                  <ItemBar>{getDBData[0].NoOfBathRooms} BathRooms</ItemBar>
                </Column>
              </Row>
            </Column>
            <Column>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> OccupancyCertificate </TittleBar>
                  <ItemBar>{getDBData[0].OccupancyCertificate}</ItemBar>
                </Column>
              </Row>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> Parking </TittleBar>
                  <ItemBar>{getDBData[0].Parking}</ItemBar>
                </Column>
              </Row>
            </Column>
            <Column>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> Power </TittleBar>
                  <ItemBar>{getDBData[0].Power}</ItemBar>
                </Column>
              </Row>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> Facing </TittleBar>
                  <ItemBar>{getDBData[0].Facing} Facing</ItemBar>
                </Column>
              </Row>
            </Column>
            <Column>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> PropertyTax </TittleBar>
                  <ItemBar>{getDBData[0].PropertyTax}</ItemBar>
                </Column>
              </Row>
              <Row align="left">
                <ImgForSign src={BedRoomIcon} />
                <Column align="left" MarginLeft="0.5em">
                  <TittleBar> Security </TittleBar>
                  <ItemBar>{getDBData[0].Security}</ItemBar>
                </Column>
              </Row>
            </Column>
          </Row>
          <Amenties AmentiesProps={getDBData[0].Amenities} />
        </>
      )}
      {getCarouselOpen && getDBData[0] && (
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
