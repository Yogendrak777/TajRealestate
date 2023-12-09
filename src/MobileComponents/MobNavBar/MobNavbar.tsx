import React, { useEffect, useState } from 'react'
import { NavbarMainDiv, TajLogo, RightContainer, TajName, LoginBtn } from "./Skins"
import CompantLogo from "../../Components/assets/CompanyLogo.jpeg"
import { Outlet, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import FooterNavBar from '../FooterBar/FooterNavBar';

export default function MobNavbar() {

  const navigate = useNavigate();

  const [isLogout, serIsLpgout] = useState<any>(true)

  const HandleGoBack = () => {
    navigate('/')
  }

  const HandleSignIn = () => {
    navigate('/signIn')
  }

  const HandleLagOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Sign Out")
        serIsLpgout(true)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // Disable the back button
    window.history.pushState(null, window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, window.location.href);
    };
    const auth = getAuth(AdminApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        serIsLpgout(false)
      }
    })
  }, []);

  return (
    <>
    <NavbarMainDiv>
      <TajLogo src = {CompantLogo}/>
      <TajName onClick={HandleGoBack}> Taj Properties </TajName>
      {/* <RightContainer>
       {isLogout ? 
       <LoginBtn onClick={HandleSignIn}>
          SignIn / SignUp
        </LoginBtn>
         : 
        <LoginBtn onClick={HandleLagOut}>
        LogOut
      </LoginBtn>
      }
      </RightContainer> */}
    </NavbarMainDiv>
    <Outlet/>
    <FooterNavBar/>
    </>
  )
}