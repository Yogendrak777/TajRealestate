import React from 'react'
import { MobBaseContainer, Title } from './Skins'
import { CiBookmarkCheck } from "react-icons/ci";

export default function ProcessingStatus() {
  return (
    <MobBaseContainer>
      <CiBookmarkCheck color="#f7a432" size="10em"/>
      <Title> Request submitted successfully, our agent will reach you in few minutes </Title>
    </MobBaseContainer>
  )
}
