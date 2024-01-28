import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import  { MobBaseContainer } from './Skins'
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
import { getAnalytics, logEvent } from "firebase/analytics";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { getAuth, onAuthStateChanged} from "firebase/auth";
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
  const auth = getAuth(AdminApp);

  useEffect(()=> {
    const analytics = getAnalytics(AdminApp);
    logEvent(analytics, 'HomePage');
    navigate("/")
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        sessionStorage.setItem("DeviceId" ,user.uid)
      }
    });
  },[])
  return (
    <>
    <Helmet>
      <title>Legacy Properties</title>
      <meta name="description" content='Legacy Properties.Ltd builds luxury homes in Bangalore locations' />
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
