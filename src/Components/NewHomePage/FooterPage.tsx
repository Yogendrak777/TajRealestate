import React from 'react'
import { FooterBaseContainer, FooterColContainer } from './Skins'

export default function FooterPage() {
  return (
    <FooterBaseContainer>
        <FooterColContainer>
          <h2> Company </h2>
          <span> About Us </span>
          <span> Careers </span>
          <span> Lead Registeration </span>
          <span> Services </span>
          <span> Contact Us </span>
          <span> Terms & Conditions </span>
          <span> Policy of Use </span>
          <span> Blog </span>

        </FooterColContainer>

        <FooterColContainer>
          <h2> CONNECT WITH US </h2>
          <b> Write to us at </b>
          <span> connect@tajrealtors.in </span>
          <b> Existing Clients </b>
          <span> customercare@tajrealtors.in </span>
          <b>Call us on, toll free number </b>
          <span>1800 208 3344 </span>

        </FooterColContainer>
      
    </FooterBaseContainer>
  )
}