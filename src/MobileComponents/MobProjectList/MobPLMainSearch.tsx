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

export default function MobPLMainSearch() {
  const params = new URLSearchParams(window.location.search);  
  const [getDBData, setDBData] = useState<any>([]);
  const navigate = useNavigate();

  const getDisaplyData = async () => {
    try {
      const db = getFirestore(AdminApp);
      const q = query(
        collection(db, "ProdData"), where("City", "==", params.get("City")), where("ApartmentType", "==", params.get("ApartmentType")),  where("PropertyAge", "==", params.get("PropertyAge")),
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      const filterData = data.filter((item)=> item.MaxPrice?.value <= Number(params.get("MaxPrice")))
      setDBData(filterData);
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

