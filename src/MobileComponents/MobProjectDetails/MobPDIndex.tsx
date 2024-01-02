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
} from "./Skins";
import Carousel from "./Carousel";
import { FaBed } from "react-icons/fa";

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
              <span> 5 Photos</span>
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
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].ApartmentType}</OverviewData>
                  <OverviewTittle>Property Type </OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>
                    {getDBData[0].Power}
                    BHK
                  </OverviewData>
                  <OverviewTittle>Power </OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
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
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewData>{getDBData[0].Parking}</OverviewData>
                  <OverviewTittle>Parking</OverviewTittle>
                </Column>
              </Row>
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
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
          <Row>
            <Column Width="50%" Align="left" Margin="0 0">
           {getDBData[0].Amenities.BatmitionCourt == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Badminton Court</OverviewTittle>
                </Column>
              </Row>
            }
               {getDBData[0].Amenities.ClubHouse == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Club House</OverviewTittle>
                </Column>
              </Row>
            }
               {getDBData[0].Amenities.FireAlarm == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Fire Alarm</OverviewTittle>
                </Column>
              </Row>
            }
               {getDBData[0].Amenities.Gym == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Gym </OverviewTittle>
                </Column>
              </Row>
            }
               {getDBData[0].Amenities.InterCom == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Inter Com</OverviewTittle>
                </Column>
              </Row>
            }
               {getDBData[0].Amenities.PipedGas == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Piped Gas</OverviewTittle>
                </Column>
              </Row>
            }
               {getDBData[0].Amenities.PlayGround == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Play Ground</OverviewTittle>
                </Column>
              </Row>
            }
              {getDBData[0].Amenities.TenniusCourt == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Tennis Court</OverviewTittle>
                </Column>
              </Row>
            }
              {getDBData[0].Amenities.VisitorsParking == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Visitors Parking</OverviewTittle>
                </Column>
              </Row>
            }
            </Column>

            <Column Width="50%" Align="left" Margin="0 0">
            {getDBData[0].Amenities.Lift == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Lift</OverviewTittle>
                </Column>
              </Row>
            }
            {getDBData[0].Amenities.MeditationArea == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Meditation Area</OverviewTittle>
                </Column>
              </Row>
            }
            {getDBData[0].Amenities.MulitpruposeHall == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Multipurpose Hall</OverviewTittle>
                </Column>
              </Row>
            }
            {getDBData[0].Amenities.OpenGym == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Open Gym</OverviewTittle>
                </Column>
              </Row>
            }
            {getDBData[0].Amenities.Park == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Park</OverviewTittle>
                </Column>
              </Row>
            }
            {getDBData[0].Amenities.SewageSystem == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Sewage System</OverviewTittle>
                </Column>
              </Row>
            }
            {getDBData[0].Amenities.ShoppingCentre == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Shopping Centre</OverviewTittle>
                </Column>
              </Row>
            }
            {getDBData[0].Amenities.SwimmingPool == "N/A" ? null : 
              <Row Align="left" Margin="1em 1em">
                <OverviewImage>
                  <FaBed color="#00BF63" size="1.5em" />
                </OverviewImage>
                <Column Align="left" Margin="0 1em">
                  <OverviewTittle>Swimming Pool</OverviewTittle>
                </Column>
              </Row>
            }
             
            </Column>
          </Row>
          <PropertyOverviewTittle>Floor Plan</PropertyOverviewTittle>
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
