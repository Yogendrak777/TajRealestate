import React, { useEffect, useState } from "react";
import { MobBaseContainer, MobImageRow, MobImageContainer, MobImageText, AddCardContainer, DivisionAddCard, AddCard, AddCardHeaer, AddCardPara} from './Skins'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { getAuth, signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getAnalytics, logEvent } from "firebase/analytics";
import { MdAddHomeWork } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";

export default function ProfileIndex() {
  const navigate = useNavigate();
  const db = getFirestore(AdminApp);
  const storage = getStorage(AdminApp);
  const uid = sessionStorage.getItem("DeviceId");


  const [getDBData, setDBData] = useState<any>([]);
  const [currentPicture, setCurrentPicture] = useState<any>('https://cdn.icon-icons.com/icons2/2442/PNG/512/add_profile_user_icon_148635.png');
  const [getFileUrl, setFileUrl] = useState<any>('');
  const [DocId, setDocId] = useState<any>("");


  const summitToDB = async() => {
    if (getFileUrl){
      const washingtonRef = doc(db, "Profile", DocId);
        await updateDoc(washingtonRef, {
          UserImage: getFileUrl
        });
    }
  }

  const handleUplaodImageToFirestore = (file:any) => {
        const storageRef = ref(storage, `PropData/${uid}/UserImage`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setFileUrl(downloadURL);
            });
          }
        );
      }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    handleUplaodImageToFirestore(file);

    if (file) {
      // Use FileReader to convert the selected file to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPicture = reader.result;
        setCurrentPicture(newPicture);
      };
      reader.readAsDataURL(file);
    }
    setTimeout(() => {
      summitToDB();
    }, 2000);

  };

  const getDisaplyData = async () => {
    const Uid = sessionStorage.getItem("DeviceId");
      if (Uid) {
        try {
          const q = query(
            collection(db, "Profile"),
            where("uid", "==", Uid)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          querySnapshot.docs.map((doc) => setDocId(doc.id));

          setDBData(data[0]);
          setCurrentPicture(data[0].UserImage)
        } catch (e) {
          alert(e);
        }
      } else {
        navigate(`/signIn/:?sendTo=/profile`);
      }
  };

  const HandleLagOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
       sessionStorage.removeItem("DeviceId");
       navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const analytics = getAnalytics(AdminApp);
    logEvent(analytics, 'ProfilePage');
    getDisaplyData();
  }, []);

  return (
    <MobBaseContainer>
      <MobImageRow justifyContent="left" >
       
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <MobImageContainer
        size='5em'
        src={getDBData.UserImage !== '' ? currentPicture : 'https://cdn.icon-icons.com/icons2/2442/PNG/512/add_profile_user_icon_148635.png'}
        />
      </label>
      
      <MobImageText>{getDBData.Name}</MobImageText>
      </MobImageRow>

      <AddCardContainer>

      <DivisionAddCard >
        <MdAddHomeWork color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> About us </AddCardHeaer>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>

      <DivisionAddCard >
        <MdAddHomeWork color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> Properties Adds </AddCardHeaer>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>

      <DivisionAddCard >
        <MdOutlineLibraryBooks color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> Terms & condition </AddCardHeaer>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>

      <DivisionAddCard>
        <MdOutlinePolicy color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> Policy </AddCardHeaer>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>

      <DivisionAddCard onClick={HandleLagOut} BorderBottom = 'no'>
        <VscSignOut color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> SignOut </AddCardHeaer>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>


    </AddCardContainer>

    </MobBaseContainer>
  )
}
