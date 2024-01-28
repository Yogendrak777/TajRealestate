import React, { useEffect, useState } from "react";
import {
  MobBaseContainer,
  LabelContainer,
  Label,
  Input,
  InputReviewContainer,
  DivisionBtn,
} from "./Skins";
import Select from "react-select";
import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  arrayUnion,
} from "firebase/firestore";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";

export default function MobRequestProp() {
  const navigate = useNavigate();

  const [getDBData, setDBData] = useState<any>([]);
  const [getApartmentTypeData, setGetApartmentTypeData] = useState<any>("N/A");
  const [getBHKData, setShowBHKData] = useState<any>([]);
  const [getAvalibleFrom, setShowAvalibleFromData] = useState<any>("");
  const [getMinPrice, setMinPrice] = useState<any>("N/A");
  const [getMaxPrice, setMaxPrice] = useState<any>("N/A");
  const [getParking, setParkingData] = useState<any>("N/A");
  const [getDescription, setDescriptionData] = useState<any>("");
  const [getContentData, setContentData] = useState<any>("");

  const ApartmentType = [
    { value: "Apartment", label: "Apartment" },
    { value: "Gated community Villa", label: "Gated community Villa" },
    { value: "Independent Houses/Villa", label: "Independent Houses/Villa" },
    { value: "Stand Alone Building", label: "Stand Alone Building" },
    { value: "Farm House", label: "Farm House" },
  ];

  const BHKType = [
    { value: "1", label: "1 BHK" },
    { value: "2", label: "2 BHK" },
    { value: "3", label: "3 BHK" },
    { value: "4", label: "4 BHK" },
    { value: "5", label: "5 BHK" },
    { value: "5+", label: "5 BHK Plus" },
  ];

  const MiniumRange = [
    { value: 5, label: "₹5 Lacs" },
    { value: 10, label: "₹10 Lacs" },
    { value: 15, label: "₹15 Lacs" },
    { value: 20, label: "₹20 Lacs" },
    { value: 25, label: "₹25 Lacs" },
    { value: 30, label: "₹30 Lacs" },
    { value: 35, label: "₹35 Lacs" },
    { value: 40, label: "₹40 Lacs" },
    { value: 45, label: "₹45 Lacs" },
    { value: 50, label: "₹50 Lacs" },
    { value: 55, label: "₹55 Lacs" },
    { value: 60, label: "₹60 Lacs" },
    { value: 65, label: "₹65 Lacs" },
    { value: 70, label: "₹70 Lacs" },
    { value: 75, label: "₹75 Lacs" },
    { value: 80, label: "₹80 Lacs" },
    { value: 85, label: "₹85 Lacs" },
    { value: 90, label: "₹90 Lacs" },
    { value: 95, label: "₹95 Lacs" },
    { value: 100, label: "₹1 Crores " },
    { value: 101, label: "₹1.20 Crores" },
    { value: 102, label: "₹1.35 Crores" },
    { value: 103, label: "₹1.52 Crores" },
    { value: 104, label: "₹2.5 Crores" },
    { value: 105, label: "₹3.5 Crores" },
    { value: 106, label: "₹4.5 Crores" },
    { value: 107, label: "₹5.5 Crores" },
    { value: 108, label: "₹6.5 Crores" },
    { value: 109, label: "₹7.5 Crores" },
    { value: 110, label: "₹8.5 Crores" },
  ];

  const ParkingType = [
    { value: "Open car", label: "Open car" },
    { value: "Bike and Car", label: "Bike and Car" },
    { value: "Covered car", label: "Covered car" },
    { value: "No car parking", label: "No car parking" },
    { value: "Only Bike", label: "Only Bike" },
  ];

  const db = getFirestore(AdminApp);

  const SubmitRequest = async () => {
    if (
      getDBData &&
      getBHKData &&
      getMaxPrice &&
      getMinPrice &&
      getDescription &&
      getContentData
    ) {
      try {
        const docRef = await addDoc(collection(db, "RequestedData"), {
          uid: getDBData.uid,
          Name: getDBData.Name,
          EmailID: getDBData.EmailID,
          ApartmentType: getApartmentTypeData.value,
          BHK: getBHKData,
          AvalibleData: getAvalibleFrom,
          MinPrices: getMinPrice,
          MaxPrice: getMaxPrice,
          Parking: getParking.value,
          Description: getDescription,
          ContactNumber: getContentData,
        });
        alert(
          "Request submitted successfully, our agent will reach you in few minutes"
        );
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("please fill all fields");
    }
  };

  const getDBProfileData = async () => {
    const Uid = sessionStorage.getItem("DeviceId");
    if (Uid) {
      try {
        const q = query(collection(db, "Profile"), where("uid", "==", Uid));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDBData(data[0]);
      } catch (e) {
        alert(e);
      }
    } else {
      navigate(`/signIn/:?sendTo=/profile`);
    }
  };

  useEffect(() => {
    getDBProfileData();
  }, []);

  return (
    <MobBaseContainer>
      <LabelContainer>
        <Label> Property Type : </Label>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "5px",
            }),
          }}
          defaultValue={getApartmentTypeData}
          onChange={setGetApartmentTypeData}
          options={ApartmentType}
          placeholder="ApartmentType"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> BHK Type : </Label>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "5px",
            }),
          }}
          isMulti
          onChange={setShowBHKData}
          options={BHKType}
          placeholder="BHK Type"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Available from : </Label>
        <Input
          type="date"
          placeholder='eg : "Godrej"'
          onChange={(e: any) => setShowAvalibleFromData(e.target.value)}
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Minium Price : </Label>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "3px",
              fontStyle: "italic",
            }),
          }}
          defaultValue={getMinPrice}
          onChange={setMinPrice}
          options={MiniumRange}
          placeholder="Bugget Range"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Maxium Price : </Label>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "3px",
              fontStyle: "italic",
            }),
          }}
          defaultValue={getMaxPrice}
          onChange={setMaxPrice}
          options={MiniumRange}
          placeholder="Bugget Range"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Parking : </Label>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "5px",
              width: "20em",
            }),
          }}
          defaultValue={getParking}
          onChange={setParkingData}
          options={ParkingType}
          placeholder="Parking Type"
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Contact Number : </Label>
        <Input
          type="tel"
          maxLength={10}
          value={getContentData}
          onChange={(e: any) => setContentData(e.target.value)}
          placeholder="Example : '93********8' "
        />
      </LabelContainer>

      <LabelContainer>
        <Label> Property Description : </Label>
        <InputReviewContainer
          onChange={(e: any) => setDescriptionData(e.target.value)}
          placeholder="Write the about the project / property"
        />
      </LabelContainer>

      <DivisionBtn onClick={SubmitRequest}> Submit &gt;</DivisionBtn>
    </MobBaseContainer>
  );
}
