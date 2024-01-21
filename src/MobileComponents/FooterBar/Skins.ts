import styled from "styled-components";

export const MobBottomContainer = styled.div`
  width: 100%;
  margin-bottom: 0em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 20;
  position: fixed;
  bottom: 0px;
  background-color: white;
`;

export const BottomCards = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-shadow: 0.5px 0.5px 4px #778899;
  border-radius: 0.5em 0.5em 0 0;
`;

export const Column = styled.div`
  width : auto;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding : 0.1em;
`;

export const ImageContainer = styled.img`
  width : 1.5em;
  height: 1.5em;
  cursor: pointer;
`;

export const Tittle = styled.span`
color : #30373C;
font-size: small;
`;