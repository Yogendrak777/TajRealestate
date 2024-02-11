import styled from "styled-components";

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 3em;
  padding-bottom: 5em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  display : flex;
flex-direction: column;
`;

export const MobPListContainer = styled.section`
width: 95%;
height: fit-content;
display : flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
margin : 1em 0;
box-shadow: 0.5px 0.5px 3px grey;
border-radius: 0.5em;
`;

export const MobPLImage = styled.img`
width: 100%;
height: 30em;
border-radius: 0.5em 0.5em 0 0;
`;

export const MobPLTittleContainer = styled.section`
width: 98%;
height: fit-content;
display : flex;
flex-direction: column;
text-align: left;
justify-content: left;
align-items: left;
padding : 0.5em;
`;

export const MobPLTittle = styled.span`
font-size : large;
font-weight: 500;
margin: 0.5em 0;
`;

export const MobPLPrice = styled.span`
font-size : 20px;
font-weight: 600;
margin: 0.5em 0;

`;

export const MobPLAddress = styled.span`
font-size : small;
font-weight: 500;
margin: 0.5em 0;

`;

