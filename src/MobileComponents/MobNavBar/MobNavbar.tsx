import React, { useEffect, useState } from 'react'
import { NavbarMainDiv, TajLogo, TajName } from "./Skins"
import CompantLogo from "../../Components/assets/CompanyLogo.jpg"
import { Outlet, useNavigate } from 'react-router-dom'
import FooterNavBar from '../FooterBar/FooterNavBar';
import { IoMdArrowBack } from "react-icons/io";

export default function MobNavbar() {

  const navigate = useNavigate();
  const pathname : string = window.location.pathname;
  const [getHeader, setHeader] = useState<any>("LegacyProperties");
  const [goback, setGoBack] = useState<boolean>(false);

  const handelGoBack = () => {
    navigate(-1);
  }

  useEffect(()=>{
    switch(pathname){
      case "/chartWithUs":
        setHeader("ChartWithUs");
        setGoBack(true);
        break;
      case "/profile":
        setHeader("Profile");
        setGoBack(true);
        break;
      case "/shortlist":
        setHeader("ShortList");
        setGoBack(true);
        break;
      case "/addDataDivision":
        setHeader("AddProperty");
        setGoBack(true);
        break;
      case "/":
        setHeader("LegacyProperties");
        setGoBack(false);
        break;
    }
  },[pathname])

  return (
    <>
    <NavbarMainDiv>
      &nbsp; {goback ? <IoMdArrowBack onClick={handelGoBack} color="#00BF63" size="1.5em"/> :  <TajLogo src = {CompantLogo}/> }
      &nbsp; <TajName> {getHeader} </TajName>
    </NavbarMainDiv>
    <Outlet/>
    <FooterNavBar/>
    </>
  )
}