import React from "react";
import { Column, ImgForSign, ItemBar, Row, TittleBar } from "./Skins";
import BedRoomIcon from "../assets/bed.png";

export default function Amenties(props: any) {
  const {
    BatmitionCourt,
    ClubHouse,
    FireAlarm,
    Gym,
    InterCom,
    Lift,
    MeditationArea,
    MulitpruposeHall,
    OpenGym,
    Park,
    PipedGas,
    PlayGround,
    SewageSystem,
    ShoppingCentre,
    SwimmingPool,
    TenniusCourt,
    VisitorsParking,
  } = props.AmentiesProps;
  
  return (
    <>
    <Row align = 'left'>
    <Column align = 'left'>
     {BatmitionCourt !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar>BatmitionCourt</ItemBar>
         </Column>
       </Row>
     ):null} 
     {ClubHouse !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> ClubHouse </ItemBar>
         </Column>
       </Row>
     ):null} 

     {FireAlarm !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> FireAlarm </ItemBar>
         </Column>
       </Row>
     ):null} 

     {BatmitionCourt !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> BatmitionCourt </ItemBar>
         </Column>
       </Row>

     ):null} 
     {Gym !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> Gym </ItemBar>
         </Column>
       </Row>
     ):null} 

    </Column>

    <Column align = 'left'>
     {InterCom !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> InterCom </ItemBar>
         </Column>
       </Row>
     ):null} 
     {Lift !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> Lift </ItemBar>
         </Column>
       </Row>
     ):null} 

     {MeditationArea !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> MeditationArea </ItemBar>
         </Column>
       </Row>
     ):null} 

     {MulitpruposeHall !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> MulitpruposeHall </ItemBar>
         </Column>
       </Row>

     ):null} 
     {OpenGym !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> OpenGym </ItemBar>
         </Column>
       </Row>
     ):null} 

    </Column>

    <Column align = 'left'>
     {Park !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> Park </ItemBar>
         </Column>
       </Row>
     ):null} 
     {PipedGas !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> PipedGas </ItemBar>
         </Column>
       </Row>
     ):null} 

     {PlayGround !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> PlayGround </ItemBar>
         </Column>
       </Row>
     ):null} 

     {SewageSystem !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> SewageSystem </ItemBar>
         </Column>
       </Row>

     ):null} 
     {ShoppingCentre !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> ShoppingCentre </ItemBar>
         </Column>
       </Row>
     ):null} 

    </Column>

    <Column align = 'left'>
     {SwimmingPool !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> SwimmingPool </ItemBar>
         </Column>
       </Row>
     ):null} 
     {TenniusCourt !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> TenniusCourt </ItemBar>
         </Column>
       </Row>
     ):null} 

     {VisitorsParking !== "N/A" ?  (
         <Row align = 'left'>
         <ImgForSign src={BedRoomIcon} />
         <Column>
           <ItemBar> VisitorsParking </ItemBar>
         </Column>
       </Row>
     ):null} 
    </Column>
    </Row>
    </>
  );
}
