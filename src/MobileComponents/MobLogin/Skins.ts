import styled from "styled-components" 

export const BaseContainer = styled.div`
  width: auto;
  margin-top: 3em;
  min-height: 80vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display : flex;
  flex-direction: column;
`;

export const SignInContainer = styled.div`
width: 80%;
height: auto;
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction: column;
box-shadow: 0.5px 0.5px 3px grey;
border-radius: 0.5em;
`;

export const Row = styled.div`
width: 100%;
height: auto;
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction: row;
`;

export const ImgForSign = styled.img`
  width: 5%;
  height: 1em;
`;

export const EmailInput = styled.input`
    margin: 1em;
    width: 60%;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    padding : 5px;

    &:focus {
        border-bottom: 1px solid #00BF63;
      }
`;

export const PasswordInput = styled.input`
    margin: 1em;
    width: 60%;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    padding : 5px;

    &:focus {
        border-bottom: 1px solid #00BF63;
      }
`;

export const SignInBtn = styled.div`
background-color: #00BF63;
color : white;
padding : 0.5em 1em; 0.5em 1em;
border-radius : 5px;
cursor:pointer;
`;

export const ForgetPassword = styled.div`
font-size: 12px;
cursor:pointer;
margin :0 0 5% 45%;
`;

export const NewToTP = styled.div`
font-size: 14px;
margin-bottom : 1em;
`;