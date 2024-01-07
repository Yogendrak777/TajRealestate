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
  OverviewTittle,
  OverviewData,
  OverviewImage,
  AmenitiesContainer,
  AmenitiesDiv,
  FloorPlanDiv,
  FloorPlanImage,
  FloorPlanTittle,
} from "./Skins";
import Carousel from "./Carousel";
import { FaBed } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { AiOutlineExpand } from "react-icons/ai";

export default function MobPDIndex() {
  const params = new URLSearchParams(window.location.search);
  const uniqueId = params.get("id");

  const [getDBData, setDBData] = useState<any>([]);
  const [getCarouselOpen, setCarouselOpen] = useState<any>(false);
  const [getAvaliableDate, setAvaliableDate] = useState<any>("");

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

  const BHKValue = (arr: any) => {
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
              <span> All Photos</span>
            </ImageTittle>
          </MobImageContainer>
          <PropertyName>{getDBData[0].PropertyName}</PropertyName>
          <PropertyAddress>{getDBData[0].Address}</PropertyAddress>
          <PropertyPrices>
            {getDBData[0].MinPrices.label} - {getDBData[0].MaxPrice.label}
          </PropertyPrices>
          <PropertyOverviewTittle>Overview</PropertyOverviewTittle>
          <Row>
            <Column Width="50%" Align="left" Margin="0 0">
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>
                    <BHKValue
                      value={getDBData[0].BHK.map((item: any) => item.value)}
                    />{" "}
                    BHK
                  </OverviewData>
                  <OverviewTittle>Unit Configuration</OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <MdMapsHomeWork color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].ApartmentType}</OverviewData>
                  <OverviewTittle>Property Type </OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <ImPower color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>
                    {getDBData[0].Power}
                  </OverviewData>
                  <OverviewTittle>Power </OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <AiOutlineExpand color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].ProjectArea}</OverviewData>
                  <OverviewTittle>Project Area </OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getAvaliableDate}</OverviewData>
                  <OverviewTittle>Possesion Date </OverviewTittle>
                </Column>
              </Row>
            </Column>
            <Column Width="50%" Align="left" Margin="0 0">
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaParking color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].Parking}</OverviewData>
                  <OverviewTittle>Parking</OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaHouseFloodWater color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].WaterSupply}</OverviewData>
                  <OverviewTittle>Water Supply</OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].ProjectSize}</OverviewData>
                  <OverviewTittle>Project Size</OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <FaBed color="#00BF63" size="1.5em" />
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].MinPrices.label}</OverviewData>
                  <OverviewTittle>Min. Price</OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].Security}</OverviewData>
                  <OverviewTittle>Security</OverviewTittle>
                </Column>
              </Row>
            </Column>
          </Row>
          <PropertyOverviewTittle>Amenities</PropertyOverviewTittle>

          <AmenitiesContainer>
            
              {getDBData[0].Amenities.BatmitionCourt === "N/A" ? null : (
                <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.BatmitionCourt}
                  </OverviewTittle>
                </Column>
                </AmenitiesDiv>
              )}
           
              {getDBData[0].Amenities.ClubHouse === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.ClubHouse}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.FireAlarm === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.FireAlarm}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.Gym === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.Gym}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.InterCom === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.InterCom}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.Lift === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.Lift}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.MeditationArea === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.MeditationArea}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.MulitpruposeHall === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.MulitpruposeHall}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.OpenGym === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.OpenGym}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.Park === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.Park}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.PipedGas === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.PipedGas}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.PlayGround === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.PlayGround}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.SewageSystem === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.SewageSystem}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.ShoppingCentre === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.ShoppingCentre}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.SwimmingPool === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.SwimmingPool}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.TenniusCourt === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.TenniusCourt}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
              {getDBData[0].Amenities.VisitorsParking === "N/A" ? null : (
            <AmenitiesDiv>
                <Column>
                  <OverviewImage>
                    <FaBed color="#00BF63" size="1.5em" />
                  </OverviewImage>
                  <OverviewTittle>
                    {getDBData[0].Amenities.VisitorsParking}
                  </OverviewTittle>
                </Column>
            </AmenitiesDiv>
              )}
          </AmenitiesContainer>

          <PropertyOverviewTittle> {getDBData[0].PropertyName} Floor Plans</PropertyOverviewTittle>
          {getDBData[0].images.img6 !== "N/A" ?
          <FloorPlanDiv>
                <FloorPlanImage src={getDBData[0].images.img6}/>
                <FloorPlanTittle>1 BHK Floor Plan</FloorPlanTittle>
          </FloorPlanDiv> : null}
          {getDBData[0].images.img7 !== "N/A" ?
          <FloorPlanDiv>
                <FloorPlanImage src={getDBData[0].images.img7}/>
                <FloorPlanTittle>2 BHK Floor Plan</FloorPlanTittle>
          </FloorPlanDiv> : null}
          {getDBData[0].images.img8 !== "N/A" ?
          <FloorPlanDiv>
                <FloorPlanImage src={getDBData[0].images.img8}/>
                <FloorPlanTittle>3 BHK Floor Plan</FloorPlanTittle>
          </FloorPlanDiv> : null}
          {getDBData[0].images.img9 !== "N/A" ?
          <FloorPlanDiv>
                <FloorPlanImage src={getDBData[0].images.img9}/>
                <FloorPlanTittle>4 BHK Floor Plan</FloorPlanTittle>
          </FloorPlanDiv> : null}
          {getDBData[0].images.img10 !== "N/A" ?
          <FloorPlanDiv>
                <FloorPlanImage src={getDBData[0].images.img10}/>
                <FloorPlanTittle>5 BHK Floor Plan</FloorPlanTittle>
          </FloorPlanDiv> : null}
          {getDBData[0].images.img11 !== "N/A" ?
          <FloorPlanDiv>
                <FloorPlanImage src={getDBData[0].images.img11}/>
                <FloorPlanTittle>5+ BHK Floor Plan</FloorPlanTittle>
          </FloorPlanDiv> : null}

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
                  Img6={getDBData[0].images.img6}
                  Img7={getDBData[0].images.img7}
                  Img8={getDBData[0].images.img8}
                  Img9={getDBData[0].images.img9}
                  Img10={getDBData[0].images.img10}
                  Img11={getDBData[0].images.img11}
                />
              </PopUpInsideContainer>
            </div>
          )}
        </>
      )}
    </MobBaseContainer>
  );
}
