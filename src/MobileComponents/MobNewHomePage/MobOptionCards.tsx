import React, { useState,memo } from 'react'
import { OptionContainer,CardContainer, PropertyCardsContainer, CardImage, CardTittle } from './Skins' 
import {
    Rent,
    SaleIcons,
    BuyIcon,
    NewProjectsIcons,
    FarmLandIcons,
    CommercialIcons,
    LoanIconIcons,
    ComingSoon
  } from '../../Components/assets';

const MobOptionCards = memo(() => {

    const  [OptionCard, setOptionCards] = useState<string>("")
    const TopDataCards = [
        {
            "title" :  "Sale",
            "Image" :  SaleIcons,
        },
        {
            "title" :  "NewProject",
            "Image" :  NewProjectsIcons,
        },
        {
            "title" :  "Rent",
            "Image" :  Rent,
            'comingSoon' : ComingSoon,
        },
        {
            "title" :  "Buy",
            "Image" :  BuyIcon,
            'comingSoon' : ComingSoon,
        },
        {
            "title" :  "Plot",
            "Image" :  FarmLandIcons,
            'comingSoon' : ComingSoon,
        },
        {
            "title" :  "Commercial",
            "Image" :  CommercialIcons,
            'comingSoon' : ComingSoon,
        },
        {
            "title" :  "Loan",
            "Image" :  LoanIconIcons,
            'comingSoon' : ComingSoon,
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
            {item.comingSoon && <CardImage src={item.comingSoon}/>}
        </PropertyCardsContainer>
            ))}
        </CardContainer>
    </OptionContainer>
  )
})
export default MobOptionCards;
