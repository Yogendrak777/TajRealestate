import React from 'react'
import MobOptionCards from './MobOptionCards'
import  { MobBaseContainer } from './Skins'
import MobBanner from './MobBanner'
import SearchCards from './SearchCards'
import MobAddCard from './MobAddCard'

export default function MobHomeIndex() {
  return (
    <>
    <MobBaseContainer>
        <MobOptionCards/>
        <MobBanner/>
        <SearchCards/>
        <MobAddCard/>
    </MobBaseContainer>
    </>
  )
}
