import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
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
  PropertyNameAndLike,
  Description,
} from "./Skins";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaBed } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { AiOutlineExpand } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { SiSpringsecurity } from "react-icons/si";
import { CgSize } from "react-icons/cg";
import { SiClubhouse } from "react-icons/si";
import { MdDateRange } from "react-icons/md";
import { GiTennisCourt } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { FaFireExtinguisher } from "react-icons/fa6";
import { FaIntercom } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { PiParkBold } from "react-icons/pi";
import { MdSportsGymnastics } from "react-icons/md";
import { GiElevator } from "react-icons/gi";
import { TbPlayFootball } from "react-icons/tb";
import { MdOutlineGasMeter } from "react-icons/md";
import { FaTableTennis } from "react-icons/fa";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const LoaderPD = loadable(()=> import('./LoaderPD'));
const Carousel = loadable(()=> import('./Carousel'), {fallback:<LoaderPD/>});

export default function MobPDIndex() {
  const params = new URLSearchParams(window.location.search);
  const uniqueId = params.get("id");
  const navigate = useNavigate();

  const [getDBData, setDBData] = useState<any>([]);
  const [shortList, setShortList] = useState<any>(false);
  const [getCarouselOpen, setCarouselOpen] = useState<any>(false);
  const [getAvaliableDate, setAvaliableDate] = useState<any>("");
  const [Loader, setLoader] = useState<any>(false);
  const [DocId, setDocId] = useState("");
  const [Uid, setUid] = useState("");

  const db = getFirestore(AdminApp);
  const auth: any = getAuth(AdminApp);

  const getDisaplyData = async () => {
    setLoader(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "ProdData"),
            where("uniqueId", "==", uniqueId)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          querySnapshot.docs.map((doc) => setDocId(doc.id));
          setDBData(data);
          setUid(user.uid);
          setShortList(data[0].ShortList?.includes(user.uid));
          const formattedDate = new Date(
            data[0].AvalibleData
          ).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          setAvaliableDate(formattedDate);
          setLoader(false);
        } catch (e) {
          alert(e);
        }
      }
      else {
        setLoader(false);
        alert("please login in to see the property details");
        navigate(`/signIn/:?sendTo=/productSearch/:?id=${uniqueId}`)
      }
    });
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

  const handleShortList = async () => {
    setShortList(!shortList);
    const DBRef = doc(db, "ProdData", DocId);
    await updateDoc(DBRef, {
      ShortList: arrayUnion(Uid),
    });
  };

  const handleNonShortList = async () => {
    setShortList(!shortList);
    const DBRef = doc(db, "ProdData", DocId);
    await updateDoc(DBRef, {
      ShortList: arrayRemove(Uid),
    });
  };

  return (
    <MobBaseContainer>
      {Loader ? (
        <LoaderPD />
      ) : (
        <>
          {getDBData[0] && (
            <>
              <MobImageContainer>
                <MobImage
                  src={getDBData[0].images.img1}
                  onClick={handleCarousel}
                />
                <ImageTittle onClick={handleCarousel}>All Photos</ImageTittle>
              </MobImageContainer>
              <PropertyNameAndLike>
                <PropertyName>{getDBData[0].PropertyName}</PropertyName>
                <FaHeart
                  color={shortList ? "#00BF63" : "#778899"}
                  size="2em"
                  onClick={shortList ? handleNonShortList : handleShortList}
                />
              </PropertyNameAndLike>
              <PropertyAddress>{getDBData[0].Address}</PropertyAddress>
              <PropertyPrices>
                {getDBData[0].MinPrices.label} - {getDBData[0].MaxPrice.label}
              </PropertyPrices>
              <PropertyOverviewTittle>Overview : </PropertyOverviewTittle>
              <Row Margin="0em 0.5em">
                <Column Width="50%" Align="left" Margin="0 0">
                  <Row Align="left" Margin="1em 1em">
                    <OverviewImage>
                      <FaBed color="#00BF63" size="1.5em" />
                    </OverviewImage>
                    <Column Align="left" Margin="0 1em">
                      <OverviewData>
                        <BHKValue
                          value={getDBData[0].BHK.map(
                            (item: any) => item.value
                          )}
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
                      <OverviewData>{getDBData[0].Power}</OverviewData>
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
                      <SiSpringsecurity color="#00BF63" size="1.5em" />
                    </OverviewImage>
                    <Column Align="left" Margin="0 1em">
                      <OverviewData>{getDBData[0].Security}</OverviewData>
                      <OverviewTittle>Security</OverviewTittle>
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
                      <CgSize color="#00BF63" size="1.5em" />
                    </OverviewImage>
                    <Column Align="left" Margin="0 1em">
                      <OverviewData>{getDBData[0].ProjectSize}</OverviewData>
                      <OverviewTittle>Project Size</OverviewTittle>
                    </Column>
                  </Row>
                  <Row Align="left" Margin="1em 1em">
                    <IoIosPricetags color="#00BF63" size="1.5em" />
                    <Column Align="left" Margin="0 1em">
                      <OverviewData>
                        {getDBData[0].MinPrices.label}
                      </OverviewData>
                      <OverviewTittle>Min. Price</OverviewTittle>
                    </Column>
                  </Row>
                  <Row Align="left" Margin="1em 1em">
                    <OverviewImage>
                      <MdDateRange color="#00BF63" size="1.5em" />
                    </OverviewImage>
                    <Column Align="left" Margin="0 1em">
                      <OverviewData>{getAvaliableDate}</OverviewData>
                      <OverviewTittle>Possesion Date </OverviewTittle>
                    </Column>
                  </Row>        
                </Column>
              </Row>
              <PropertyOverviewTittle>Amenities : </PropertyOverviewTittle>
              <AmenitiesContainer>
                {getDBData[0].Amenities.BatmitionCourt === "N/A" ? null : (
                  <AmenitiesDiv>
                    <Column>
                      <OverviewImage>
                        <GiTennisCourt color="#00BF63" size="1.5em" />
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
                        <SiClubhouse color="#00BF63" size="1.5em" />
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
                        <FaFireExtinguisher color="#00BF63" size="1.5em" />
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
                        <CgGym color="#00BF63" size="1.5em" />
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
                        <FaIntercom color="#00BF63" size="1.5em" />
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
                        <GiElevator color="#00BF63" size="1.5em" />
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
                        <GiMeditation color="#00BF63" size="1.5em" />
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
                        <FaWarehouse color="#00BF63" size="1.5em" />
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
                        <MdSportsGymnastics color="#00BF63" size="1.5em" />
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
                        <PiParkBold color="#00BF63" size="1.5em" />
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
                        <MdOutlineGasMeter color="#00BF63" size="1.5em" />
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
                        <TbPlayFootball color="#00BF63" size="1.5em" />
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
                        <FaArrowUpFromGroundWater color="#00BF63" size="1.5em" />
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
                        <FaShoppingCart color="#00BF63" size="1.5em" />
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
                        <PiSwimmingPoolBold color="#00BF63" size="1.5em" />
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
                        <FaTableTennis color="#00BF63" size="1.5em" />
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
                        <FaParking color="#00BF63" size="1.5em" />
                      </OverviewImage>
                      <OverviewTittle>
                        {getDBData[0].Amenities.VisitorsParking}
                      </OverviewTittle>
                    </Column>
                  </AmenitiesDiv>
                )}
              </AmenitiesContainer>

              <PropertyOverviewTittle>
                {" "}
                {getDBData[0].PropertyName} Floor Plans : 
              </PropertyOverviewTittle>
              {getDBData[0].images.img6 !== "N/A" ? (
                <FloorPlanDiv>
                  <FloorPlanImage src={getDBData[0].images.img6} />
                  <FloorPlanTittle>1 BHK Floor Plan</FloorPlanTittle>
                </FloorPlanDiv>
              ) : null}
              {getDBData[0].images.img7 !== "N/A" ? (
                <FloorPlanDiv>
                  <FloorPlanImage src={getDBData[0].images.img7} />
                  <FloorPlanTittle>2 BHK Floor Plan</FloorPlanTittle>
                </FloorPlanDiv>
              ) : null}
              {getDBData[0].images.img8 !== "N/A" ? (
                <FloorPlanDiv>
                  <FloorPlanImage src={getDBData[0].images.img8} />
                  <FloorPlanTittle>3 BHK Floor Plan</FloorPlanTittle>
                </FloorPlanDiv>
              ) : null}
              {getDBData[0].images.img9 !== "N/A" ? (
                <FloorPlanDiv>
                  <FloorPlanImage src={getDBData[0].images.img9} />
                  <FloorPlanTittle>4 BHK Floor Plan</FloorPlanTittle>
                </FloorPlanDiv>
              ) : null}
              {getDBData[0].images.img10 !== "N/A" ? (
                <FloorPlanDiv>
                  <FloorPlanImage src={getDBData[0].images.img10} />
                  <FloorPlanTittle>5 BHK Floor Plan</FloorPlanTittle>
                </FloorPlanDiv>
              ) : null}
              {getDBData[0].images.img11 !== "N/A" ? (
                <FloorPlanDiv>
                  <FloorPlanImage src={getDBData[0].images.img11} />
                  <FloorPlanTittle>5+ BHK Floor Plan</FloorPlanTittle>
                </FloorPlanDiv>
              ) : null}

               <PropertyOverviewTittle>Description : </PropertyOverviewTittle>
              <Description>
               {getDBData[0].Description}
                </Description>

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
        </>
      )}
    </MobBaseContainer>
  );
}
