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
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function MobshortlistIndex() {
  const [getDBData, setDBData] = useState<any>([]);
  const navigate = useNavigate();

  const getDisaplyData = async () => {
    const db = getFirestore(AdminApp);
    const auth = getAuth(AdminApp);

    try {
      onAuthStateChanged(auth, async(user) => {
        if (user) {
          const q = query(
            collection(db, "ProdData"), where("ShortList", "array-contains", user && user.uid)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          setDBData(data);
        }
        else {
          navigate(`/signIn/:?sendTo=/shortlist`);
        }
      });
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


