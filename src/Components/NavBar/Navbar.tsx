import React from 'react'
import { NavbarMainDiv, TajLogo, RightContainer, NavBarBtn } from "./Skins"
import CompantLogo from "../assets/CompanyLogo.jpeg"
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <NavbarMainDiv>
      <TajLogo src = {CompantLogo}/>
      {/* <RightContainer>
        <NavBarBtn> Your Booking </NavBarBtn>
        <NavBarBtn> SIGN UP </NavBarBtn>
        <NavBarBtn> LOGIN </NavBarBtn>
      </RightContainer> */}
    </NavbarMainDiv>
    <Outlet/>
    </>
  )
}
