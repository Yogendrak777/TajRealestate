import React, { useState } from 'react'
import { OptionContainer,CardContainer, PropertyCardsContainer, CardImage, CardTittle } from './Skins' 
import  Rent  from '../../Components/assets/rent.png'
import SaleIcons from "../../Components/assets//sale.png";
import BuyIcon from "../../Components/assets//mansion.png";
import NewProjectsIcons from "../../Components/assets//skyscraper.png";
import FarmLandIcons from "../../Components/assets//farming.png";
import CommercialIcons from "../../Components/assets//bank.png";
import LoanIconIcons from "../../Components/assets//loan.png";

export default function MobOptionCards() {

    const  [OptionCard, setOptionCards] = useState<string>("")
    const TopDataCards = [
        {
            "title" :  "Rent",
            "Image" :  Rent,
        },
        {
            "title" :  "Sale",
            "Image" :  SaleIcons,
        },
        {
            "title" :  "Buy",
            "Image" :  BuyIcon,
        },
        {
            "title" :  "NewProject",
            "Image" :  NewProjectsIcons,
        },
        {
            "title" :  "Plot",
            "Image" :  FarmLandIcons,
        },
        {
            "title" :  "Commercial",
            "Image" :  CommercialIcons,
        },
        {
            "title" :  "Loan",
            "Image" :  LoanIconIcons,
        },

    ]

    const handleOnclickCards = (item : string) => {
        setOptionCards(item)
    }

  return (
    <OptionContainer>
        <CardContainer>
            {TopDataCards.map((item)=>(
        <PropertyCardsContainer onClick={() => handleOnclickCards(item.title)}>
            <CardImage src={item.Image}/>
            <CardTittle> {item.title} </CardTittle>
        </PropertyCardsContainer>
            ))}
        </CardContainer>
    </OptionContainer>
  )
}
