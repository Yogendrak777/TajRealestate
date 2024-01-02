import React, { useEffect } from 'react'
import MobOptionCards from './MobOptionCards'
import  { MobBaseContainer } from './Skins'
import MobBanner from './MobBanner'
import SearchCards from './SearchCards'
import MobAddCard from './MobAddCard'
import MobPropSaleInBang from './MobPropSaleInBang'
import MobHotSelling from './MobHotSelling'
import PremiumProjBang from './PremiumProjBang'
import MobReview from './MobReview'
import { useNavigate } from 'react-router-dom'

export default function MobHomeIndex() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/")
  },[])
  return (
    <>
    <MobBaseContainer>
        <MobOptionCards/>
        <MobBanner/>
        <SearchCards/>
        <MobAddCard/>
        <MobPropSaleInBang/>
        <MobHotSelling/>
        <PremiumProjBang/>
        <MobReview/> 
    </MobBaseContainer>
    </>
  )
}
