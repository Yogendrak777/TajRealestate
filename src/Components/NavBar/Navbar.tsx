import React from 'react'
import { NavbarMainDiv, TajLogo, NavTitle, LogoAndName } from "./Skins"
import CompantLogo from "../assets/CompanyLogo.jpg"
import { Outlet, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();

  const HandleGoBack = () => {
    navigate('/');
  }

  const HandleChartWithUs = () => {
    navigate('/chartWithUs');
  }

  const HandleProfile = () => {
    navigate(`/profile`);
  }

  const HandleShortList = () => {
    navigate(`/shortlist`);
  }

  return (
    <>
    <NavbarMainDiv>
      <LogoAndName>
      <TajLogo src = {CompantLogo}/> 
      <NavTitle fontWeight='800' fontSize='larger' onClick={HandleGoBack}> LegacyProperties</NavTitle>
      </LogoAndName>
      <div>
      <NavTitle fontWeight='600' fontSize='medium' onClick={HandleChartWithUs}> Chart with us </NavTitle>
      <NavTitle fontWeight='600' fontSize='medium' onClick={HandleShortList}> ShortList </NavTitle>
      <NavTitle fontWeight='600' fontSize='medium'  onClick={HandleProfile}> Profile </NavTitle>
      </div>
    </NavbarMainDiv>
    <Outlet/>
    </>
  )
}