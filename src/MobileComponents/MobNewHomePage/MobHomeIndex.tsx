import React from 'react'
import MobOptionCards from './MobOptionCards'
import  { MobBaseContainer } from './Skins'
import MobBanner from './MobBanner'
import SearchCards from './SearchCards'
import MobAddCard from './MobAddCard'
import MobPropSaleInBang from './MobPropSaleInBang'
import MobHotSelling from './MobHotSelling'
import PremiumProjBang from './PremiumProjBang'
import MobReview from './MobReview'

export default function MobHomeIndex() {
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
