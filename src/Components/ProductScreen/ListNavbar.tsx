import React, { useState } from "react";
import {
  NavBarInList,
  CompanyLogoOnNav,
} from "./Skins";
import CompanyLogo from "../assets/CompanyLogo.jpeg";

export default function ListNavbar() {

  return (
    <NavBarInList>
      <CompanyLogoOnNav src={CompanyLogo} />
     </NavBarInList>
  );
}
