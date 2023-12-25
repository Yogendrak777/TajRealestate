import React from 'react'
import { MobBottomContainer, BottomCards, Column, ImageContainer,Tittle } from './Skins'
import MobHomeIcon from '../../Components/assets/MobHomeBtn.png'
import MobShortListIcon from '../../Components/assets/MobShortList.png'
import MobProfile from '../../Components/assets/MobProfile.png'
import { useNavigate } from 'react-router-dom'

export default function FooterNavBar() {
  const navigate = useNavigate()
  return (
    <MobBottomContainer>
      <BottomCards>
        <Column onClick={()=>{navigate('/')}}>
        <ImageContainer src={MobHomeIcon}/>
        <Tittle>Home</Tittle>
        </Column>

        <Column onClick={()=>{navigate('/shortlist')}}>
        <ImageContainer src={MobShortListIcon}/>
        <Tittle>ShortList</Tittle>
        </Column>

        <Column onClick={()=>{navigate('/profile')}}>
        <ImageContainer src={MobProfile}/>
        <Tittle>Profile</Tittle>
        </Column>

      </BottomCards>
    </MobBottomContainer>
  )
}
