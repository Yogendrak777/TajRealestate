import React, { useEffect, useState } from "react";
import {
  MobBaseContainer,
  CustomerSection,
  AgentSection,
  BottomCards,
  InputText,
} from "./Skins";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  updateDoc,
  doc,
  where,
  arrayUnion,
} from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";
import { IoSend } from "react-icons/io5";

export default function ChartIndex() {
  const navigate = useNavigate();
  const chartList = {
    Id: "Customer",
    Message: "",
  };

  const [getDBData, setDBData] = useState<any>([]);
  const [DocId, setDocId] = useState("");
  const [Input, setInput] = useState("");

  const db = getFirestore(AdminApp);

  const getDisaplyData = async () => {
    const analytics = getAnalytics(AdminApp);
    logEvent(analytics, 'chartWithUsPage');
    const Uid = sessionStorage.getItem("DeviceId")
      if (Uid) {
        try {
          const q = query(
            collection(db, "Profile"),
            where("uid", "==", Uid)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          querySnapshot.docs.map((doc) => setDocId(doc.id));
          setDBData(data[0].ChartList);
        } catch (e) {
          alert(e);
        }
      } else {
        navigate(`/signIn/:?sendTo=/chartWithUs`);
      }
  };

  const handleShortList = async (chartList: any) => {
    const DBRef = doc(db, "Profile", DocId);
    await updateDoc(DBRef, {
      ChartList: arrayUnion(chartList),
    });
  };

  const handelSend = () => {
    if (Input !== "" && Input !== " ") {
      chartList.Message = Input;
      handleShortList(chartList);
      getDisaplyData();
    }
    setInput("");
  };

  useEffect(() => {
    getDisaplyData();
  }, []);
  
  return (
    <>
      <MobBaseContainer>
        {getDBData?.map((item: any) => (
          <div>
            {item.Id === "Customer" ? (
              <CustomerSection>{item.Message}</CustomerSection>
            ) : (
              <AgentSection>{item.Message}</AgentSection>
            )}
          </div>
        ))}
          </MobBaseContainer>
        <BottomCards>
          <InputText
            type="text"
            onChange={(e: any) => setInput(e.target.value)}
            value={Input}
            placeholder="chart with us"
          />
          <IoSend onClick={handelSend} color="#00BF63" size="1.5em" />
        </BottomCards>
    </>
  );
}
