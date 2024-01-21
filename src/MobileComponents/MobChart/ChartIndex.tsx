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
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoaderPD from "../MobNewHomePage/LoaderPD";
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
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const db = getFirestore(AdminApp);
  const auth = getAuth(AdminApp);

  const getDisaplyData = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "Profile"),
            where("uid", "==", user && user.uid)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          querySnapshot.docs.map((doc) => setDocId(doc.id));
          setDBData(data[0].ChartList);
        } catch (e) {
          alert(e);
        }
      } else {
        navigate(`/signIn/:?sendTo=/shortlist`);
      }
    });
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
    setShowLoader(true);
    getDisaplyData();
    setShowLoader(false);
  }, []);
  return (
    <>
      {showLoader && <LoaderPD />}
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
        <BottomCards>
          <InputText
            type="text"
            onChange={(e: any) => setInput(e.target.value)}
            value={Input}
            placeholder="chart with us"
          />
          <IoSend onClick={handelSend} color="#00BF63" size="1.5em" />
        </BottomCards>
      </MobBaseContainer>
    </>
  );
}
