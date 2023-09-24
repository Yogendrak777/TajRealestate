import React from 'react'
import { NavbarMainDiv, TajLogo, RightContainer, NavBarBtn } from "./Skins"
import CompantLogo from "../assets/CompanyLogo.jpeg"

export default function Navbar() {
  return (
    <NavbarMainDiv>
      <TajLogo src = {CompantLogo}/>
      <RightContainer>
        <NavBarBtn> Your Booking </NavBarBtn>
        <NavBarBtn> SIGN UP </NavBarBtn>
        <NavBarBtn> LOGIN </NavBarBtn>
        <NavBarBtn> LOGIN </NavBarBtn>
        <NavBarBtn> LOGIN </NavBarBtn>
        <NavBarBtn> LOGIN </NavBarBtn>
      </RightContainer>
    </NavbarMainDiv>
  )
}
