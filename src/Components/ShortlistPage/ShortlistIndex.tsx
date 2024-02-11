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
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { AdminApp } from "../FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";

export default function ShortlistIndex() {
  const [getDBData, setDBData] = useState<any>([]);
  const navigate = useNavigate();

  const getDisaplyData = async () => {
    const db = getFirestore(AdminApp);

    try {
      const Uid = sessionStorage.getItem("DeviceId");
        if (Uid) {
          const q = query(
            collection(db, "ProdData"), where("ShortList", "array-contains", Uid)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          setDBData(data);
        }
        else {
          navigate(`/signIn/:?sendTo=/shortlist`);
        }
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


