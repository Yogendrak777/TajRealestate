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

export const LabelContainer = styled.section`
width: 80%;
height: auto;
text-align: left;
justify-content: left;
align-items: left;
`;

export const Label = styled.div`
  width: 100%;
  height: auto;
  font-size: medium;
  margin-bottom: 0.5em;
  margin-top: 1em;
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

export const DivisionBtn = styled.span`
  background-color: #00BF63;
  padding : 0.5em 2em;
  border-radius : 0.5em;
  margin: 1em 0;
  box-shadow: 0.5px 0.5px 4px #00BF63;
  color : white;
`;
