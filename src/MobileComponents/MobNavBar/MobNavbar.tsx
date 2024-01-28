import React, { useEffect, useState } from 'react'
import { NavbarMainDiv, TajLogo, TajName } from "./Skins"
import CompantLogo from "../../Components/assets/CompanyLogo.jpeg"
import { Outlet, useNavigate } from 'react-router-dom'
import FooterNavBar from '../FooterBar/FooterNavBar';

export default function MobNavbar() {

  const navigate = useNavigate();
  const pathname : string = window.location.pathname;
  const [getHeader, setHeader] = useState<any>("LegacyProperties");

  const HandleGoBack = () => {
    navigate('/');
  }

  useEffect(()=>{
    switch(pathname){
      case "/chartWithUs":
        setHeader("ChartWithUs");
        break;
      case "/profile":
        setHeader("Profile");
        break;
      case "/shortlist":
        setHeader("ShortList");
        break;
      case "/addDataDivision":
        setHeader("AddProperty");
        break;
      case "/":
        setHeader("LegacyProperties");
        break;
    }
  },[pathname])

  return (
    <>
    <NavbarMainDiv>
      <TajLogo src = {CompantLogo}/>
      <TajName onClick={HandleGoBack}> {getHeader} </TajName>
    </NavbarMainDiv>
    <Outlet/>
    <FooterNavBar/>
    </>
  )
}