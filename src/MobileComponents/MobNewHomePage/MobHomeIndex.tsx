import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import  { MobBaseContainer } from './Skins'
import loadable from '@loadable/component';
const MobOptionCards = loadable(()=> import('./MobOptionCards'));
const MobBanner = loadable(()=> import('./MobBanner'));
const SearchCards = loadable(()=> import('./SearchCards'));
const MobAddCard = loadable(()=> import('./MobAddCard'));
const MobHotSelling = loadable(()=> import('./MobHotSelling'));
const PremiumProjBang = loadable(() => import('./PremiumProjBang'));
const MobReview = loadable(()=> import('./MobReview'));
const LoaderPD = loadable(()=> import('./LoaderPD'));
const MobPropSaleInBang = loadable(() => import('./MobPropSaleInBang'),{fallback : <LoaderPD/>});

const MobHomeIndex = memo(() => {
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
})
export default MobHomeIndex;
