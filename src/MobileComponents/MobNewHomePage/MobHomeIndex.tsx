import React from 'react'
import MobOptionCards from './MobOptionCards'
import  { MobBaseContainer } from './Skins'
import MobBanner from './MobBanner'
import SearchCards from './SearchCards'
import MobAddCard from './MobAddCard'
import MobPropSaleInBang from './MobPropSaleInBang'

export default function MobHomeIndex() {
  return (
    <>
    <MobBaseContainer>
        <MobOptionCards/>
        <MobBanner/>
        <SearchCards/>
        <MobAddCard/>
        <MobPropSaleInBang/>
    </MobBaseContainer>
    </>
  )
}
