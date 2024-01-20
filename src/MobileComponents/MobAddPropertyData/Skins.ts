import styled from "styled-components";

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 3em;
  padding-bottom: 2em;
  height: 80vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const DivisionContainer = styled.div`
  width: 80%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0.5px 0.5px 4px #778899;
  background-color: white;
  border-radius: 0.3em;
  padding: 1em;
`;

export const DivTittle = styled.strong`
  font-size: large;
`;

export const DivisionBtn = styled.span`
  background-color: #00BF63;
  padding : 0.5em 1em;
  border-radius : 0.5em;
  margin: 1em 0;
  box-shadow: 0.5px 0.5px 4px #00BF63;
  color : white;
`;

export const MobProjectContainer = styled.section`
  width: auto;
  margin-top: 3em;
  padding-bottom: 2em;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const MobProjectCard = styled.section`
  width: auto;
  height: 51em;
  // box-shadow: 1px 1px 5px gray;
  margin: 1em;
  align-items: center;
  text-algin: center;
  justify-content: left;
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  padding-bottom : 0.5em;
  overflow-Y: auto;
`;

export const Label = styled.div`
  width: 100%;
  height: auto;
  font-size: medium;
  margin-bottom: 0.5em;
  margin-top: 1em;
`;

export const LabelContainer = styled.section`
width: 80%;
height: auto;
text-align: left;
justify-content: left;
align-items: left;
`;

export const Input = styled.input`
  width: 100%;
  margin: 0.5em 0;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
`;

export const InputReviewContainer = styled.textarea`
  align-items: center;
  text-algin: center;
  width: 95%;
  height: 9em;
  justify-content: center;
  padding: 0.5em;
  border-radius: 0.7em;
`;

export const InputCheckContainer = styled.input`
  align-items: center;
  text-algin: center;
  justify-content: center;
  margin-right: 0.5em;
  border-radius: 0.7em;
`;

export const CheckBoxContainer = styled.div`
  width: auto;
  height: auto;
  font-size: medium;
  align-items: left;
  text-algin: left;
  justify-content: left;
  display: flex;
  flex-direction: row;
  margin-bottom : 0.5em;
`;

export const LabelContainerForCheckBox = styled.label`
  margin-bottom: 0em;
  margin-top: 0.3em;
  width: auto;
  text-align: left;
  justify-content: left;
  align-items: left;
  height: auto;
`;

export const LabelContainerOnImages = styled(LabelContainer)`
  margin-bottom: 1em;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: #3f6184;
`;

export const InputImageContainer = styled.input`
  align-items: center;
  text-algin: center;
  width: auto;
  height: auto;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: 0.5em;
  background-color: #f5f6f8;
`;