import React, { useState,memo } from 'react'
import { OptionContainer,CardContainer, PropertyCardsContainer, CardImage, CardTittle } from './Skins' 
import {
    Rent,
    SaleIcons,
    BuyIcon,
    NewProjectsIcons,
    FarmLandIcons,
    CommercialIcons,
    LoanIconIcons
  } from '../../Components/assets';

const MobOptionCards = memo(() => {

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
})
export default MobOptionCards;
