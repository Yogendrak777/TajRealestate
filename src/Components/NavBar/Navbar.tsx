import React from 'react'
import { NavbarMainDiv, TajLogo, RightContainer, NavBarBtn } from "./Skins"
import TajLogoImage from "../assets/TajLogo.jpg"

export default function Navbar() {
  return (
    <NavbarMainDiv>
      <TajLogo src = {TajLogoImage}/>
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
