import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import  { MobBaseContainer } from './Skins'
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
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
    <Helmet>
      <title>Welcome to Legacy Properties</title>
      <meta name="description" content='Legacy Properties Limited builds luxury homes in sought-after locations' />
      <link rel="canonical" href="https://legacyproperties.in/"/>
    </Helmet>
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
