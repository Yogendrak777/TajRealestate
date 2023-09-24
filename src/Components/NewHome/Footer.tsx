import React from "react";
import {
  FooterContainer,
  FooterDividerContainer,
  FooterUlContainer,
  FooterLiContainer,
  HorizontalLine,
} from "./Skins";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterDividerContainer>
        <FooterUlContainer>
          <b>Company</b>
          <FooterLiContainer>About us</FooterLiContainer>
          <FooterLiContainer>Careers</FooterLiContainer>
          <FooterLiContainer>Lead registeration</FooterLiContainer>
          <FooterLiContainer>Services</FooterLiContainer>
          <FooterLiContainer>Contact Us</FooterLiContainer>
          <FooterLiContainer>Terms & Conditions</FooterLiContainer>
          <FooterLiContainer>Policy of Use</FooterLiContainer>
          <FooterLiContainer>Blog</FooterLiContainer>
        </FooterUlContainer>
      </FooterDividerContainer>
      <FooterDividerContainer>
        <FooterUlContainer>
          <b>CONNECT WITH US</b>
          <FooterLiContainer>
            {" "}
            <b>Write to us at</b>
          </FooterLiContainer>
          <FooterLiContainer>connect@tajrealtors.in</FooterLiContainer>
          <FooterLiContainer>
            <b>Existing Clients</b>
          </FooterLiContainer>
          <FooterLiContainer>customercare@tajrealtors.in</FooterLiContainer>
          <FooterLiContainer>
            <b>Call us on, toll free number</b>
          </FooterLiContainer>
          <FooterLiContainer>1800 208 3344</FooterLiContainer>
        </FooterUlContainer>
      </FooterDividerContainer>
      <hr />
    </FooterContainer>
  );
}
