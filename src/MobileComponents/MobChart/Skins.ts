import styled from "styled-components";

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 3.5em;
  padding-bottom: 2em;
  height: auto;
  overflow-y: auto;
  display : flex;
  flex-direction: column;
`;

export const CustomerSection = styled.section`
  width: 60%;
  height: auto;
  text-align: start;
  justify-content: start;
  align-items: start;
  display : flex;
  flex-direction: row;
  margin : 0.5em;
`;

export const AgentSection = styled.section`
  width: auto;
  height: auto;
  text-align: start;
  justify-content: end;
  align-items: end;
  display : flex;
  flex-direction: row;
  margin : 0.5em 0.5em 0.5em 10em;
`;

export const BottomCards = styled.div`
  margin-bottom: 0em;
  position: fixed;
  bottom: 3.5em;
  background-color: white;
  width: 100%;
  height: 4em;;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
`;

export const InputText = styled.input`
  width: 80%;
  margin: 0em 0.5em;
  font-size:medium;
  height : 1.5em;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;

   &:focus {
        border-bottom: 1px solid #00BF63;
      }
`;