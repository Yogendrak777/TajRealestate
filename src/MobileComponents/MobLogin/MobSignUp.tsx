import React, { useState } from "react";
import {
  BaseContainer,
  SignInContainer,
  EmailInput,
  PasswordInput,
  SignInBtn,
  NewToTP,
  Row,
  ImgForSign,
} from "./Skins";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { phoneNumber, Name, Email, Password } from "../../Components/assets";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";

export default function MobSignUp() {
  const [NameData, setNameData] = useState<any>("");
  const [EmailData, setEmailData] = useState<any>("");
  const [PasswordData, setPasswordData] = useState<any>("");
  const [PhoneNumber, setPhoneNumber] = useState<any>("");
  const navigate = useNavigate();
  const auth = getAuth(AdminApp);
  const db = getFirestore(AdminApp);

  const handleKeyPress = (e: any) => {
    const regex = new RegExp(/^[+0-9\b]+$/);

    if (!regex.test(e.key)) {
      if (e.key !== "Backspace") {
        e.preventDefault();
      }
    }
  };

  const handleName = (event: any) => {
    setNameData(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmailData(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPasswordData(event.target.value);
  };

  const SubmitToDB = async (User: any) => {
    if(User){
    try {
       await addDoc(collection(db, "Profile"), {
        uid: User.uid,
        Name: NameData,
        EmailID: EmailData,
        Password: PasswordData,
      });
    } catch (error) {
      alert(error);
    }
  }
  };

  const handleSubmit = async () => {
    if(NameData !=="" && EmailData !==""  && PasswordData !==""  && PhoneNumber !==""  ){
    try {
      createUserWithEmailAndPassword(auth, EmailData, PasswordData)
        .then((userCredential) => {
          const user = userCredential.user;
          user && SubmitToDB(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } catch (e) {
      alert("Error adding document: " + e);
    }
  }
  };

  return (
    <BaseContainer>
      <SignInContainer>
        <h2> Sign Up </h2>
        <Row>
          <ImgForSign src={Name} />
          <EmailInput
            type="text"
            placeholder="Name"
            required
            onChange={handleName}
          />
        </Row>
        <Row>
          <ImgForSign src={Email} />
          <EmailInput
            type="email"
            placeholder="Email ID"
            required
            onChange={handleEmail}
          />
        </Row>
        <Row>
          <ImgForSign src={Password} />
          <PasswordInput
            type="password"
            placeholder="Password"
            required
            onChange={handlePassword}
          />
        </Row>
        <Row>
          <ImgForSign src={phoneNumber} />
          <EmailInput
            type="tel"
            value={PhoneNumber}
            maxLength={10}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </Row>
        <SignInBtn onClick={handleSubmit}> Continue &gt; </SignInBtn>
        <br />
        <br />
        <NewToTP>
          {" "}
          Already Registered with Taj Properties?{" "}
          <Link to={"/mobSignIn"}>SingIn</Link>{" "}
        </NewToTP>
      </SignInContainer>
    </BaseContainer>
  );
}