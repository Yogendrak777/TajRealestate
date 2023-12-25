import React from 'react'
import { MobBaseContainer, DivisionContainer, DivTittle, DivisionBtn } from './Skins'
import { useNavigate } from 'react-router-dom'

export default function MobAddPropIndex() {
    const native = useNavigate();
  return (
    <MobBaseContainer>
        <DivisionContainer>
            <DivTittle> Choose the type of Property data you wish to Add..? </DivTittle>
            <DivisionBtn>Add Independent Data</DivisionBtn>
            <DivisionBtn onClick={()=>{native('/addProjectData')}}>Add Project Data</DivisionBtn>
        </DivisionContainer>
    </MobBaseContainer>
  )
}
