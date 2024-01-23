import React, { useEffect, useState } from "react";
import { MobBaseContainer, MobImageRow, MobImageContainer, MobImageText, MobProfileEditBtn, MobProfileBtnContainer } from './Skins'
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
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ProfileIndex() {
  const navigate = useNavigate();

  const [getDBData, setDBData] = useState<any>([]);

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
          setDBData(data[0]);
        } catch (e) {
          alert(e);
        }
      } else {
        navigate(`/signIn/:?sendTo=/profile`);
      }
    });
  };

  const HandleLagOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Sign Out")
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    getDisaplyData();
  }, []);
  return (
    <MobBaseContainer>
      <MobImageRow>
      <MobImageContainer src='https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg' alt='Profile image'/>
      <MobImageText>{getDBData.Name}</MobImageText>
      </MobImageRow>
      <MobProfileBtnContainer>
      <MobProfileEditBtn> View and Edit Profile</MobProfileEditBtn>
      </MobProfileBtnContainer>
      <MobProfileBtnContainer>
      <MobProfileEditBtn onClick={HandleLagOut}> LogOut</MobProfileEditBtn>
      </MobProfileBtnContainer>
    </MobBaseContainer>
  )
}
