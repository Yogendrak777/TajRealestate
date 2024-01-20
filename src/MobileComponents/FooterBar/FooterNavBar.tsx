import React, { useState } from 'react'
import { MobBottomContainer, BottomCards, Column,Tittle } from './Skins'
import { useNavigate } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";

export default function FooterNavBar() {
  const [homePage, sethomePage] = useState<any>(true);
  const [shortList, setShortList] = useState<any>(false);
  const [about, setAbout] = useState<any>(false);
  const [chart, setChart] = useState<any>(false);
  const [addProperties, setAddProperties] = useState<any>(false);
  const navigate = useNavigate()

  const handleHomePage = () => {
    sethomePage(true);
    setShortList(false);
    setAbout(false);
    setChart(false);
    setAddProperties(false);
    navigate('/')
  }

  const handleShortListPage = () => {
    sethomePage(false);
    setShortList(true);
    setAbout(false);
    setChart(false);
    setAddProperties(false);
    navigate('/shortlist')
  }

  const handleAbouttPage = () => {
    sethomePage(false);
    setShortList(false);
    setAbout(true);
    setChart(false);
    setAddProperties(false);
    navigate('/profile')
  }

  const handleChartPage = () => {
    sethomePage(false);
    setShortList(false);
    setAbout(false);
    setChart(true);
    setAddProperties(false);
    navigate('/profile')
  }

  const handleAddProperties = () => {
    sethomePage(false);
    setShortList(false);
    setAbout(false);
    setChart(false);
    setAddProperties(true);
    navigate(`/signIn/:?sendTo=/addDataDivision`);
  }

  return (
    <MobBottomContainer>
      <BottomCards>
        <Column onClick={handleHomePage}>
        <IoHomeSharp  color={ homePage && "#00BF63"} size="1.5em" />
        <Tittle>Home</Tittle>
        </Column>

        <Column onClick={handleChartPage}>
        <BsChatTextFill  color={ chart && "#00BF63"} size="1.5em" />
        <Tittle>Chart</Tittle>
        </Column>

        <Column onClick={handleAddProperties}>
        <IoMdAddCircle  color={ addProperties && "#00BF63"} size="3em" />
        <Tittle>Add Properties</Tittle>
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
