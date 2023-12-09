import React from 'react'
import { MobBottomContainer, BottomCards, Column, ImageContainer,Tittle } from './Skins'
import MobHomeIcon from '../../Components/assets/MobHomeBtn.png'
import MobShortListIcon from '../../Components/assets/MobShortList.png'
import MobProfile from '../../Components/assets/MobProfile.png'

export default function FooterNavBar() {
  return (
    <MobBottomContainer>
      <BottomCards>
        <Column>
        <ImageContainer src={MobHomeIcon}/>
        <Tittle>Home</Tittle>
        </Column>

        <Column>
        <ImageContainer src={MobShortListIcon}/>
        <Tittle>ShortList</Tittle>
        </Column>

        <Column>
        <ImageContainer src={MobProfile}/>
        <Tittle>Profile</Tittle>
        </Column>

      </BottomCards>
    </MobBottomContainer>
  )
}
