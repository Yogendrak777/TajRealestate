import React, {useState} from 'react'
import { AddCardContainer, DivisionAddCard, AddCard, AddCardHeaer, AddCardPara, MobAddCardImage, MobAddCardArrow } from './Skins'
import AddProperty from '../../Components/assets/MobAddProperty.png' 
import RightArrow from '../../Components/assets/MobRightArrow.png'
import FindHouse from '../../Components/assets/MobFindHouse.png'
import InvestHouse from '../../Components/assets/MobInvest.png'
import Broker from '../../Components/assets/MobHomeBrocker.png'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import { useNavigate } from 'react-router-dom'

export default function MobAddCard() {
  const navigate = useNavigate()

  const [isLogout, setIsLogOut] = useState<any>(true)


  const handelAddData = () => {
    
   const auth = getAuth(AdminApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
       navigate('/addDataDivision');
      } else {
        alert('login page')
      }

    })
  }

  return (
    <AddCardContainer>
      <DivisionAddCard onClick={handelAddData}>
        <MobAddCardImage src={AddProperty}/>
        <AddCard>
          <AddCardHeaer> Post Your Property Ads for Free </AddCardHeaer>
          <AddCardPara>
            Sell/Rent out your property & Get unlimited responses
          </AddCardPara>
        </AddCard>
        <MobAddCardArrow src={RightArrow}/>
      </DivisionAddCard>

      <DivisionAddCard>
      <MobAddCardImage src={FindHouse}/>
        <AddCard>
          <AddCardHeaer> Find Your Dream Property </AddCardHeaer>
          <AddCardPara>
          Get the list of properties matching to your requirement
          </AddCardPara>
        </AddCard>
        <MobAddCardArrow src={RightArrow}/>
      </DivisionAddCard>
      <DivisionAddCard>
      <MobAddCardImage src={InvestHouse}/>
        <AddCard>
          <AddCardHeaer> Invest in real estate with ease </AddCardHeaer>
          <AddCardPara>
          See top markets Discover high growth options
          </AddCardPara>
        </AddCard>
        <MobAddCardArrow src={RightArrow}/>
      </DivisionAddCard>
      <DivisionAddCard>
      <MobAddCardImage src={Broker}/>
        <AddCard>
          <AddCardHeaer>  Are you a broker?  </AddCardHeaer>
          <AddCardPara>
          Register now and join us! And buyers find their dreams home
          </AddCardPara>
        </AddCard>
        <MobAddCardArrow src={RightArrow}/>
      </DivisionAddCard>
    </AddCardContainer>
  );
}
