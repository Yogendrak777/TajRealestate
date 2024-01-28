import styled from "styled-components";

interface MobImageRowProps {
  justifyContent?: "left" | "right" | "center";
}
interface MobImageContainerProps {
  size?: "0px" | "5em" | "8em" |"10em";
}
interface DivisionAddCardProps {
  BorderBottom ?: "yes" | "no";
}

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

export const MobImageRow = styled.div<MobImageRowProps>`
  width: auto;
  margin-top: 3em;
  height: auto;
  text-align: center;
  justify-content: ${(props) => (props.justifyContent && props.justifyContent)};
  align-items: center;
  display: flex;
  flex-display: row;
  margin-left:2em;
  margin-bottom : 2em;
`;

export const MobImageContainer = styled.img<MobImageContainerProps>`
  width:  ${(props) => (props.size && props.size)};
  height:  ${(props) => (props.size && props.size)};
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

export const AddCardContainer = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

export const DivisionAddCard = styled.section<DivisionAddCardProps>`
  width: 100%;
  height: 4em;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-bottom: ${(props) => (props.BorderBottom == "no" ? "" : "1px solid #00bf63" )};
`;

export const AddCard = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  justify-content: left;
  align-items: left;
  display: flex;
  flex-direction: column;
  margin: 0.2em;
  padding: 0.5em;
  background-image: white;
`;

export const AddCardHeaer = styled.header`
  font-size: small;
  font-weight: 600;
  color: black;
`;

export const AddCardPara = styled.p`
  font-size: small;
`;
