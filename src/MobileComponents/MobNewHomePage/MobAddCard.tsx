import React, {memo} from 'react'
import { AddCardContainer, DivisionAddCard, AddCard, AddCardHeaer, AddCardPara } from './Skins'
import { MdAddHomeWork } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { RiHomeWifiFill } from "react-icons/ri";
import { IoIosPersonAdd } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const MobAddCard = memo(() => {
  const navigate = useNavigate()

  const handelAddData = () => { 
    navigate('/signIn/:?sendTo=/addDataDivision');  
  }

  const handelRequestProp = () => { 
    navigate('/signIn/:?sendTo=/requestProp');  
  }

  const handelBroker = () => { 
    navigate('/signIn/:?sendTo=/addBroker');  
  }

  return (
    <AddCardContainer>
      <DivisionAddCard onClick={handelAddData}>
        <MdAddHomeWork color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> Post Your Property Ads for Free </AddCardHeaer>
          <AddCardPara>
            Sell/Rent out your property & Get unlimited responses
          </AddCardPara>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>

      <DivisionAddCard onClick={handelRequestProp}>
      <RiHomeOfficeFill  color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> Find Your Dream Property </AddCardHeaer>
          <AddCardPara>
          Get the list of properties matching to your requirement
          </AddCardPara>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>
      <DivisionAddCard>
      <RiHomeWifiFill  color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer> Invest in real estate with ease </AddCardHeaer>
          <AddCardPara>
          See top markets Discover high growth options
          </AddCardPara>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>
      <DivisionAddCard onClick={handelBroker}>
      <IoIosPersonAdd  color="#00BF63" size="2.5em" />
        <AddCard>
          <AddCardHeaer>  Are you a broker?  </AddCardHeaer>
          <AddCardPara>
          Register now and join us! And buyers find their dreams home
          </AddCardPara>
        </AddCard>
        <FaGreaterThan  color="#00BF63" size="1em" />
      </DivisionAddCard>
    </AddCardContainer>
  );
})
export default MobAddCard;