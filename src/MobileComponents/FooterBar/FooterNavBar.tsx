import React, { useState } from 'react'
import { MobBottomContainer, BottomCards, Column,Tittle } from './Skins'
import { useNavigate } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

export default function FooterNavBar() {
  const [homePage, sethomePage] = useState<any>(true);
  const [shortList, setShortList] = useState<any>(false);
  const [about, setAbout] = useState<any>(false);
  const navigate = useNavigate()

  const handleHomePage = () => {
    sethomePage(true);
    setShortList(false);
    setAbout(false);
    navigate('/')
  }

  const handleShortListPage = () => {
    sethomePage(false);
    setShortList(true);
    setAbout(false);
    navigate('/shortlist')
  }

  const handleAbouttPage = () => {
    sethomePage(false);
    setShortList(false);
    setAbout(true);
    navigate('/profile')
  }
  return (
    <MobBottomContainer>
      <BottomCards>
        <Column onClick={handleHomePage}>
        <IoHomeSharp  color={ homePage && "#00BF63"} size="1.5em" />
        <Tittle>Home</Tittle>
        </Column>

        <Column onClick={handleShortListPage}>
        <FaHeart  color={ shortList && "#00BF63"} size="1.5em"  />
        <Tittle>ShortList</Tittle>
        </Column>

        <Column onClick={handleAbouttPage}>
        <BsPersonCircle  color={ about && "#00BF63"} size="1.5em" />
        <Tittle>Profile</Tittle>
        </Column>

      </BottomCards>
    </MobBottomContainer>
  )
}
