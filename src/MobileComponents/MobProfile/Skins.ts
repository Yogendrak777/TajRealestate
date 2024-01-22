import styled from "styled-components";

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 3.5em;
  padding-bottom: 2em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const MobImageRow = styled.div`
  width: auto;
  margin-top: 3em;
  height: auto;
  text-align: center;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-display: row;
  margin-left:2em;
`;

export const MobImageContainer = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50em;
  border-color:black;
`;

export const MobImageText = styled.span`
  font-size: 26px;
  font-weight: 800;
  color:#00bf63;
  margin-left:1em;
`;

export const MobProfileBtnContainer = styled.div`
  width: 100%;
  margin-top: 2em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-display: column;
`;

export const MobProfileEditBtn = styled.section`
  width: 84%;
  height: auto;
  font-size: medium;
  font-weight: 500;
  padding : 1em;
  background-color: #00bf63;
  color : white;
  border-radius: 0.5em;
`;
