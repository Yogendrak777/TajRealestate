import React, { useEffect, useState } from "react";
import {
  MobBaseContainer,
  MobPListContainer,
  MobPLImage,
  MobPLTittle,
  MobPLTittleContainer,
  MobPLAddress,
  MobPLPrice,
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
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";

export default function MobPList() {
  const [getDBData, setDBData] = useState<any>([]);
  const navigate = useNavigate();

  const getDisaplyData = async () => {
    try {
      const db = getFirestore(AdminApp);
      const querySnapshot = await getDocs(collection(db, "ProdData"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setDBData(data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getDisaplyData();
  }, []);
  return (
    <MobBaseContainer>
      {getDBData.map((items: any) => (
        <MobPListContainer onClick={()=> navigate(`/productSearch/:?id=${items.uniqueId}`)}>
          <MobPLImage src={items.images.img1} />
          <MobPLTittleContainer>
            <MobPLTittle>{items.PropertyName}</MobPLTittle>
            <MobPLAddress>{items.Address}</MobPLAddress>
          <MobPLPrice>{items.MinPrices.label}-{items.MaxPrice.label}</MobPLPrice>
          </MobPLTittleContainer>
        </MobPListContainer>
      ))}
    </MobBaseContainer>
  );
}
