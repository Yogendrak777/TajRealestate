import React, { useEffect, useState } from "react";
import {
  MobBaseContainer,
  LabelContainer,
  Label,
  Input,
  DivisionBtn,
} from "./skins";
import {
  addDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";
import ProcessingStatus from "../MobStatus/ProcessingStatus";

export default function MobBrokerIndex() {
  const navigate = useNavigate();

  const [getContentData, setContentData] = useState<any>("");
  const [getBrokerName, setBrokerName] = useState<any>("");
  const [getAadharNumber, setAadharNumber] = useState<any>("");
  const [getAddress, setAddress] = useState<any>("");
  const [getEmailId, setEmailId] = useState<any>("");
  const [showProcessingScreen, setShowProcessingScreen] = useState<boolean>(false);

  const db = getFirestore(AdminApp);

  const SubmitRequest = async () => {
    if (getContentData && getBrokerName && getAadharNumber && getAddress && getEmailId) {
      try {
        const docRef = await addDoc(collection(db, "Broker"), {
          BrokerName: getBrokerName,
          AadharNumber: getAadharNumber,
          Address: getAddress,
          EmailId: getEmailId,
          ContactNumber: getContentData,
          verifyed: false
        });
        setShowProcessingScreen(true);
        setTimeout(() => {
          setShowProcessingScreen(false);
          navigate("/");
        }, 4000);
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("please fill all fields");
    }
  };

  return (
    <>
    {showProcessingScreen ? <ProcessingStatus/> : 
    <MobBaseContainer>
      <LabelContainer>
        <Label> Name : </Label>
        <Input
          type="text"
          value={getBrokerName}
          onChange={(e: any) => setBrokerName(e.target.value)}
          placeholder="Shashank"
        />
      </LabelContainer>

      <LabelContainer>
        <Label>Aadhar Number : </Label>
        <Input
          type="tel"
          maxLength={14}
          value={getAadharNumber}
          onChange={(e: any) => setAadharNumber(e.target.value)}
          placeholder="**** **** 7462"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Contact Number : </Label>
        <Input
          type="tel"
          maxLength={10}
          value={getContentData}
          onChange={(e: any) => setContentData(e.target.value)}
          placeholder="93********8"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Email Id : </Label>
        <Input
          type="email"
          value={getEmailId}
          onChange={(e: any) => setEmailId(e.target.value)}
          placeholder="ygk@gmail.com"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Address : </Label>
        <Input
          type="text"
          value={getAddress}
          onChange={(e: any) => setAddress(e.target.value)}
          placeholder="Near United World Academy,Kachamaranahalli,Sarjapur Road, Bangalore"
        />
      </LabelContainer>

      <DivisionBtn onClick={SubmitRequest}> Submit &gt;</DivisionBtn>
    </MobBaseContainer>
  }
    </>
  );
}
